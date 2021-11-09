from src import app
from src.modals.activity import CreateDB

CreateDB.createDB()

@app.route("/", methods=["GET", "POST"])
def teste():
    return "Okay"