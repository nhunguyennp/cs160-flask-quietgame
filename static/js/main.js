import Camera from './Camera.js';
import {loadLevel, loadQueue} from './loaders.js';
import {createMario} from './entities.js';
import Timer from './Timer.js';
import {setupKeyboard, setupAlphabetKeyboard} from './input.js';
import {setupMouseControl} from './debug.js';
import {createCollisionLayer, createCameraLayer} from './layers.js';
import Queue from './Queue.js';
import Stopwatch from './Stopwatch.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
let stopwatch;
let time;

// Promize.all to createMario() and loadLevel()
//  and loadQueue() at the same time

// loadQueue() creates a queue of letters (currently from A-Z)
// from JSON file. You can printQueue() to print the entire queue
// and check the first letter in queue using front()
Promise.all([
    createMario(),
    loadLevel('1-1'),
    loadQueue('1-1'),
])
.then(([mario, level, queue]) => {

        const camera = new Camera();

        mario.pos.set(64, 64);

        level.comp.layers.push(
            createCollisionLayer(level),
            createCameraLayer(camera));

        level.entities.add(mario);

        const input = setupKeyboard(mario);

        console.log(queue.printQueue());

        // Here a keyboard is set up, which maps the input letter
        // to the character's movement
        const inputLetter = setupAlphabetKeyboard(queue, mario);

            inputLetter.listenTo(window);
            input.listenTo(window);

        const timer = new Timer(1/60);
        timer.update = function update(deltaTime)
        {
                level.update(deltaTime);

                if (mario.pos.x > 100)
                {
                    camera.pos.x = mario.pos.x - 100;
                }
                level.comp.draw(context, camera);
        }

        // Set up Webcam object using getUserMedia
        var video = document.querySelector('#video');
        if(navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.srcObject = stream;
        })
        .catch(function (error) {
            console.log("Webcam went wrong");
        });
    }
        timer.start();

        // So let's say if you want to check whether the correct sign has been displayed,
        // you get the webcam data, evaluate it with the model, then check whether the result
        // matches with the first letter of the queue. If yes, move Mario (Mario has a leap method
        // that you can just call to make Mario jump over the letter)

        // Example:
        // if (result == queue.front())
        // {
        //    queue.dequeue();
        //    mario.leap.start()
        //  }
});
