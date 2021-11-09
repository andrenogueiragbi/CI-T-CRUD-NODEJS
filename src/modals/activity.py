from src import db

class Activity(db.Model):
    __tablename__ = 'atividade'
    id_atividade = db.Column(db.Integer, autoincrement=True, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    status = db.Column(db.Boolean)


    def __init__(self, nome, staus):
        self.nome = nome
        self.staus = staus


class CreateDB():
    def createDB():
        db.create_all()
            



