

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
