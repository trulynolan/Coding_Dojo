from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.ninja import Ninja

class Dojo:
    def __init__ (self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.ninjas = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query)
        dojos = []
        for dojo in results:
            dojos.append( cls(dojo) )
        return dojos

    @classmethod
    def show_one_dojo(cls, data):
        query = "SELECT * FROM dojos WHERE id = %(id)s;"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        return cls(results[0])

    @classmethod
    def save (cls, data):
        query = "INSERT INTO dojos (name) VALUES (%(name)s)"
        return connectToMySQL('dojos_and_ninjas_schema').query_db( query, data )
    
    @classmethod
    def ninja_display (cls, data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        dojo = cls(results[0])
        # print (results[0])
        for i in results: 
            print("*****************************")
            print(i)
            print("*****************************")
            ninjaData = {
                "id": i["ninjas.id"],
                "first_name": i["first_name"],
                "last_name": i["last_name"],
                "age": i["age"],
                "created_at": i["created_at"],
                "updated_at": i["updated_at"],
                "dojo_id": i["dojo_id"]
            }
            dojo.ninjas.append(Ninja(ninjaData))
        return dojo