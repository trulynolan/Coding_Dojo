

class User:
    classification = "homosapien"
    how_many = []
    def __init__(self, fname, lname, age, email = "defaulty@email.com"):
        self.fname = fname
        self.lname = lname
        self.email = email
        self.age = age 
        




sbeve = User("sbeve", "tyler", 34)
bobothy = User("bobothy", "jones", 57, "bob@email.com")

print(sbeve.fname)
print(bobothy.fname)
print(sbeve.classification)

