#web page that has posts below each other
import requests
from flask import Flask, render_template

app = Flask(__name__)
@app.route('/', strict_slashes=False)
def home():
    return render_template('index.html')

@app.route('/contact', strict_slashes=False)
def contact():
    return render_template('contact.html')
if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
