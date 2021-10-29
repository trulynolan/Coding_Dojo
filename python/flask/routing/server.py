from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello World!"

@app.route('/dojo')
def dojo():
    return "dojo"

@app.route ('/hello/<string:flask>/<int:num>')
def flask(flask, num):
    return f"Hi {flask * num}"

@app.route ('/hello/<string:Michael>/<int:num>')
def Michael(Michael, num):
    return f"Hi {Michael * num}"

@app.route ('/hello/<string:John>/<int:num>')
def john(john, num):
    return f"Hi {john * num}"

@app.route ('/repeat/<string:hello>/<int:num>')
def hello(hello, num):
    return f"{hello * num}"

@app.route ('/repeat/<string:bye>/<int:num>')
def bye(bye, num):
    return f"{bye * num}"

@app.route ('/repeat/<string:dogs>/<int:num>')
def dogs(dogs, num):
    return f"{dogs * num}"

if __name__=="__main__":
    app.run(debug=True)
