class User:
    def __init__(self):
        self.name = "myAccount"
        self.accountBalance = 5
    
    def makeDeposit(self, amount):
        self.accountBalance += amount
    def makeWithdrawal(self, amount):
        self.accountBalance -= amount
    def checkBalance(self):
        print(f"{self.name}'s balance is {self.accountBalance}")
frank = User()
frank.name = "Frank"
frank.accountBalance = 10

frank.makeDeposit(5)
frank.makeDeposit(5)
frank.makeDeposit(5)
frank.makeWithdrawal(5)
frank.checkBalance()

johnny = User()
johnny.name = "Johnny Meatstick"
johnny.accountBalance = 10

johnny.makeDeposit(5)
johnny.makeDeposit(5)
johnny.makeWithdrawal(5)
johnny.makeWithdrawal(5)
johnny.checkBalance()

tommy = User()
tommy.name = "Tommy Noble"
tommy.accountBalance = 10

tommy.makeDeposit(5)
tommy.makeWithdrawal(1)
tommy.makeWithdrawal(1)
tommy.makeWithdrawal(1)
tommy.checkBalance()