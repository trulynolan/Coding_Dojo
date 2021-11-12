from flask import render_template, redirect,  request, session
from flask_app import app
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja

@app.route ("/dashboard")
def all_ninjas():
    return render_template("all_dojos.html", ninjas = Ninja.get_all())

@app.route ("/createDojo", methods = ["post"])
def createDojo():
    data = {
        "name": request.form["name"]
    }
    Dojo.save(data)
    return redirect("/all_dojos")

@app.route ("/dojo_display/<int:id>")
def dojo_display(id):
    data = {
        "id": id
    }
    ninja_display = Dojo.ninja_display(data)
    return render_template("dojo_display.html", ninja_display = ninja_display)


