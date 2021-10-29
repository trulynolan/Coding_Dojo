from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    num=4
    return render_template("hello.html", num=num)

@app.route('/hello/<int:num>')
def hello(num):
    return render_template("hello.html", num=num)

if __name__ =="__main__":
    app.run(debug=True)