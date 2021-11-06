from flask import render_template, redirect,  request, session
from flask_app import app
from flask_app.models.user import User 


@app.route ('/')
def index():
    return redirect ('/showUsers')

@app.route ('/newuser')
def newuser():
    return render_template ('addusers.html')

@app.route ('/create_user', methods=['post'])
def createUser():
    data = {
        'first_name': request.form ['first_name'],
        'last_name': request.form ['last_name'],
        'email': request.form ['email']
    }
    User.save (data)
    return redirect ('/showUsers')
    
@app.route ("/showUsers")
def showUsers():
    users = User.get_all()
    return render_template('showusers.html', users = users)

@app.route ('/showuser/<int:id>')
def showeuser(id):
    data = {'id': id}
    user = User.get_user(data)
    return render_template('show.html', user = user)

@app.route ('/edituser/<int:id>')
def edituser(id):
    data = {'id': id}
    user = User.get_user(data)
    return render_template ('edit.html', user = user)


@app.route ('/edit_user/<int:id>', methods=['post'])
def editUser(id):
    data = {
        'id': id,
        'first_name': request.form ['first_name'],
        'last_name': request.form ['last_name'],
        'email': request.form ['email']
    }
    User.updating (data)
    return redirect ('/showUsers')