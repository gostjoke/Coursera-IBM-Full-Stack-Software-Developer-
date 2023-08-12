from flask import request
from flask import Flask,redirect, make_response, url_for,  render_template

app = Flask("Math Cwalculator")


@app.route("/")
def render_index_page():
    return render_template('index.html')

@app.route('/sum')
def sum_route():
    #http://127.0.0.1:5000/sum?num1=10&num2=5
    num1 = float(request.args.get('num1'))
    num2 = float(request.args.get('num2'))
    return str(num1 + num2)

@app.route('/sub')
def sub_route():
    num1 = float(request.args.get('num1'))
    num2 = float(request.args.get('num2'))
    return str(num1 - num2)

@app.route('/mul')
def mul_route():
    num1 = float(request.args.get('num1'))
    num2 = float(request.args.get('num2'))
    return str(num1 * num2)


if __name__ == '__main__':
    app.run()