from flask import Flask,  render_template
app = Flask(__name__)

@app.route("/")
def welcome():
    return render_template("index.html")

@app.route("/monsters/<string:monster>")
def montster_page(monster):
    print(monster)
    return f"This is {monster}'s page."

if __name__=="__main__":
    app.run(debug=True)
