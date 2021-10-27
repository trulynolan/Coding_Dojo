class BankAccount:

# don't forget to add some default values for these parameters!
    def __init__(self, balance, account, interest = 5): 
        self.account = account
        self.balance = balance
        self.interest = interest
    
    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        self.balance -= amount
        if(self.balance<0):
            print("Insufficient funds: Charging $200 and your right leg.")
            return self

    def display_account_info(self):
        print(f"Account: {self.account}, Balance: {self.balance}")

    def yield_interest(self):
        self.balance += (self.balance*self.int_rate)

solo = BankAccount("Jimmothy", 3000)
joint = BankAccount("Mathatrick", 2000)

print(f"Account: {solo.account}, Balance:{solo.balanace}")
solo.deposit(400).deposit(500).deposit(540).withdraw(320).yeild_interest().display_account_info()