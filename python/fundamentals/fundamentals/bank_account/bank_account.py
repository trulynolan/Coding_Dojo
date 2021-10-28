


class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance): 
        self.balance = balance
        self.int_rate = int_rate

    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        self.balance -= amount
        return self
    def display_account_info(self):
        print(f"int_rate: {self.int_rate}, Balance: {self.balance}")
        return self
    def yeild_interest(self):
        self.balance += (self.balance*self.int_rate)
        return self

first = BankAccount(.1, 3000)
second = BankAccount(.1, 2000)

account = BankAccount(5, 10)
account.deposit(500)

first.deposit(400).deposit(500).deposit(540).withdraw(320).yeild_interest().display_account_info()

second.deposit(400).deposit(500).withdraw(300).withdraw(300).withdraw(300).withdraw(300).yeild_interest().display_account_info()

