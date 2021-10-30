from flask import Flask, render_template
from board import make_checkerboard
app = Flask(__name__)

@app.route('/<int:x>/<int:y>')
def checkerboard(x,y):
    result = make_checkerboard(x,y)
    return render_template("index.html", result=result)


if __name__=="__main__":
    app.run(debug=True)

