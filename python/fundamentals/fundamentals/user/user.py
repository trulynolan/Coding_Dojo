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

frank.makeDeposit(5).makeDeposit(5).makeDeposit(5).makeWithdrawal(5).checkBalance()

johnny = User()
johnny.name = "Johnny Meatstick"
johnny.accountBalance = 10

johnny.makeDeposit(5).makeDeposit(5).makeWithdrawal(5).makeWithdrawal(5).checkBalance()

tommy = User()
tommy.name = "Tommy Noble"
tommy.accountBalance = 10

tommy.makeDeposit(5).makeWithdrawal(1).makeWithdrawal(1).makeWithdrawal(1).checkBalance()