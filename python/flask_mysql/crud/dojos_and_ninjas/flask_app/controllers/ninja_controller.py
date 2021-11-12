from flask import render_template, redirect,  request, session
from flask_app import app
from flask_app.models.ninja import Ninja

from flask_app.models.dojo import Dojo

@app.route ("/new_ninja")
def new_ninja ():
    dojos = Dojo.get_all()
    return render_template("new_ninjas.html", dojos = dojos)

@app.route ("/create_ninja", methods = ["post"])
def create_ninja():
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "age": request.form["age"],
        "dojo_id": request.form["dojo_id"]
    }
    Ninja.ninja_save(data)
    return redirect("/all_dojos")