from flask_app import app
from flask_app.controllers import users
from flask import render_template, request, redirect

if __name__ == "__main__":
    app.run(debug=True)