from flask_app import app
from flask import render_template,flash,redirect,request,session
from flask_app.models.user import User
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/register",methods=["POST"])
def register():
    if User.validate(request.form):
        pw_hash = bcrypt.generate_password_hash(request.form["password"])
        data = {
        "first_name":request.form["first_name"],
        "last_name":request.form["last_name"],
        "email":request.form["email"],
        "password":pw_hash,
        "confirm_password":pw_hash
        }
        user_id = User.insert_user(data)
        flash("User created!", "register")  
        session["user_id"] = user_id       #creates the session
        return redirect("/nextpage")
    else:
        return redirect("/")

@app.route("/login",methods=["POST"])
def login():
    user_in_db = User.get_by_email(request.form)
    if not user_in_db:
        flash("invalid email/password", "login")
        return redirect("/")
    if not bcrypt.check_password_hash(user_in_db.password, request.form["password"]): 
        flash("invalid email/password", "login")
        return redirect("/")
    session["user_id"] = user_in_db.id   # CREATES THE SESSION
    return redirect("/nextpage")

@app.route("/nextpage")
def secret_page():
    if "user_id" not in session:    #checks if you're logged in (the session above exists)
        flash("Must be registered or logged in!", "register")
        return redirect("/")
    else:
        data = {
            "user_id": session["user_id"]
        }
        user = User.get_user(data)
        return render_template("nextpage.html", user=user)

@app.route("/logout")
def logout():
    session.clear()
    flash("logged out!", "login")
    return redirect("/")
