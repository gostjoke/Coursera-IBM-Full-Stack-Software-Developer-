from flask import request
from flask import Flask,redirect, make_response, url_for,  render_template

app = Flask(__name__)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        # process login here
    return render_template('login.html')  # 渲染 login.html 页面


@app.route('/admin')
def admin():
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run()