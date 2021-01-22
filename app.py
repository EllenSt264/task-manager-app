import os
from flask import Flask
if os.path.exists("env.py"):
    import env


app = Flask(__name__)


# The forward slash refers to the default route
@app.route("/")
def hello():
    return "Hello World!"


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            # Ensure to update this to False prior to deployment/submission
            debug=True)
