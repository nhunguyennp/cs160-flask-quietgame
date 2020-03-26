# serve.py

from flask import Flask, request, jsonify, after_this_request
from flask import render_template
import os, json

# creates a Flask application, named app
app = Flask(__name__)



# a route where we will display a welcome message via an HTML template
@app.route("/")
def hello():
    message = "Hello, World"
    return render_template('index.html', message=message)


# run the application
if __name__ == "__main__":
    app.run(debug=True)