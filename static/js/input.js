import Keyboard from './KeyboardState.js';
import Stopwatch from './Stopwatch.js';

export function setupKeyboard(entity)
{
        const input = new Keyboard();
        input.addMapping('Space', keyState => {
            if (keyState)
            {
                entity.jump.start();
            }
            else
            {
                entity.jump.cancel();
            }
                console.log(keyState);
            });

        input.addMapping('ArrowRight', keyState => {
            entity.go.dir += keyState ? 1 : -1;
            });

        input.addMapping('ArrowLeft', keyState => {
            entity.go.dir += keyState ? -1 : 1;
            });
        return input;
}

export function setupAlphabetKeyboard(queue, entity)
{
  const input = new Keyboard();
  const stopwatch = new Stopwatch( document.querySelector('.stopwatch'), document.querySelector('.results'));
  const time = document.getElementById('time');
  const gameIsDone = false;
  const inputForm = document.getElementById('inputForm');
  const startButton = document.getElementById('startButton');
  const stopWatchValue = document.getElementById('theScore');
  let temp;
  let buttonClicked = false;
  stopwatch.start();
  inputForm.style.visibility="hidden";


        input.addMapping('KeyA', keyState => {
            if (keyState && queue.front() == 'A')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
                console.log("Q length: " + queue.items.length);
            }
            });
        input.addMapping('KeyB', keyState => {
            if (keyState && queue.front() == 'B')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);

                console.log("Q length: " + queue.items.length);

            }
            });
        input.addMapping('KeyC', keyState => {
            if (keyState && queue.front() == 'C')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);

                stopWatchValue.value = stopwatch.returnTime();
                console.log(stopWatchValue.value);
                inputForm.style.visibility="visible";
                stopwatch.stop()
            }
            });
        input.addMapping('KeyD', keyState => {
            if (keyState && queue.front() == 'D')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyE', keyState => {
            if (keyState && queue.front() == 'E')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyF', keyState => {
            if (keyState && queue.front() == 'F')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyG', keyState => {
            if (keyState && queue.front() == 'G')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyH', keyState => {
            if (keyState && queue.front() == 'H')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyI', keyState => {
            if (keyState && queue.front() == 'I')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyK', keyState => {
            if (keyState && queue.front() == 'K')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyL', keyState => {
            if (keyState && queue.front() == 'L')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyM', keyState => {
            if (keyState && queue.front() == 'M')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyN', keyState => {
            if (keyState && queue.front() == 'N')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyO', keyState => {
            if (keyState && queue.front() == 'O')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyP', keyState => {
            if (keyState && queue.front() == 'P')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyQ', keyState => {
            if (keyState && queue.front() == 'Q')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyR', keyState => {
            if (keyState && queue.front() == 'R')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyS', keyState => {
            if (keyState && queue.front() == 'S')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyT', keyState => {
            if (keyState && queue.front() == 'T')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyU', keyState => {
            if (keyState && queue.front() == 'U')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyV', keyState => {
            if (keyState && queue.front() == 'V')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyW', keyState => {
            if (keyState && queue.front() == 'W')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyX', keyState => {
            if (keyState && queue.front() == 'X')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyY', keyState => {
            if (keyState && queue.front() == 'Y')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);


                // if (queue.items.length == 22) {
                //   console.log("stopwatch time is " + stopwatch.returnTime());
                //   //window.location.href = "index.php/name=" + 'testing';
                //   //window.open("index.php/name=" + 'testing');
                //   //window.open("name.html");
                //   //inputForm = document.getElementById('inputForm');
                //   inputForm.style.display = "inline-block";
                //
                //   gameIsDone = true;
                //   stopwatch.stop();
                // }
            }
            });

        return input;
}
