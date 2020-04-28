# serve.py

from flask import Flask, request, jsonify, after_this_request
from flask import render_template
import os, json, mysql.connector

# creates a Flask application, named app
app = Flask(__name__)


# a route where we will display a welcome message via an HTML template
@app.route('/', methods=['GET', 'POST'])
def hello():
    db = mysql.connector.connect(
        host="localhost",
        port=3306,
        user="root",
        passwd="redwoodclock",
        database="asl"
    )

    # if request.method == 'POST':
    #     print("HERE:")
    #     x = request.form.get('theName', None)
    #     print(x)
    #     y = request.form.get('theScore', None)
    #     print(y)


    if request.method == 'POST':
        userName = request.form.get('theName', None)
        score = request.form.get('theScore', None)

        mycursor = db.cursor();
        insert = ("INSERT INTO scoreboard (username, score) VALUES(%s, %s)") #change info to info2 for score type change
        data = (userName, score)
        mycursor.execute(insert, data)
        db.commit()



    # mycursor.execute("SELECT * FROM info")
    # result = mycursor.fetchone()
    # print(result)

    message = "Hello, World"
    return render_template('index.html', message=message)


@app.route('/leaderboard', methods=['GET', 'POST'])
def hi():
    db = mysql.connector.connect(
        host="localhost",
        port=3306,
        user="root",
        passwd="redwoodclock",
        database="asl"
    )
    #mycursor = db.cursor();


    cur = db.cursor()
    cur.execute("SELECT * FROM scoreboard ORDER BY score ASC") #from info
    data = cur.fetchall()
    #render_template('template.html', data=data)


    return render_template('leaderboard.html', output_data = data)


# run the application
if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0')
