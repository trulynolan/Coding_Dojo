from users_bank import BankAccount


class User:
    def __init__(self, name):
        self.name = name
        self.checking = BankAccount(int_rate=0.2, balance=5) 
        
    def makeDeposit(self, amount):
        self.checking.deposit(amount)
        self.checking.display_account_info()
        return self

    def makeWithdrawal(self, amount):
        self.checking.withdraw(amount)
        self.checking.display_account_info()
        return self

    def checkBalance(self, amount):
        self.checking.display_account_info(amount)
        return self



franklin = User("Franklin the turtle")
franklin.makeDeposit(500).makeWithdrawal(100)