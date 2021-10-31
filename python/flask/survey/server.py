from flask import Flask, render_template, session, redirect, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/process', methods=['POST'])
def process():
    session['name'] = request.form['name']
    session['lacation'] = request.form['lacation']
    session['language'] = request.form['language']
    session['comments'] = request.form['comments']
    return redirect('/success')

@app.route('/success')
def success():
    return render_template('success.html')

if __name__=="__main__":
    app.run(debug=True)