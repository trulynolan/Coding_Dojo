num1 = 42 # variable declaration, number 
num2 = 2.3 # variable declaration, decimal initialized
boolean = True # variable declaration, boolean initialized
string = 'Hello World' #variable declaration, string initialized
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] 
# variable, list initialized
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}# variable, dictionary initialized
fruit = ('blueberry', 'strawberry', 'banana')
# variable declaration, tuple initialized
print(type(fruit)) #print to console, type check
print(pizza_toppings[1]) #print to console, list access value
pizza_toppings.append('Mushrooms') # list, add value
print(person['name']) # print to console, dictionary access value 
person['name'] = 'George' #change value dictionary
person['eye_color'] = 'blue' #dictionary change value
print(fruit[2]) #print to console, accessing the value of the tuple

if num1 > 45: #conditional if, evaluation
    print("It's greater") 
else:
    print("It's lower") #print to console

if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:  #conditional elif
    print("It's a long word!") #print to console
else:
    print("Just right!")

#how a for loop is written in python, starts at 0 and goes to 5.
for x in range(5): 
    print(x)
for x in range(2,5): #starts at 2 and goes up until 5. 
    print(x)
for x in range(2,10,3): #starts at 2, goes to 10, increments by 3.
    print(x)
x = 0
while(x < 5): #while loop, variable declaration.
    print(x) #print to console.
    x += 1 # incrementing x

pizza_toppings.pop() #list, delete value at the end
pizza_toppings.pop(1) #list, delete value at the index

print(person) #print to console to dictionary
person.pop('eye_color') #dictionary delete value
print(person) #print console of dictionary

for topping in pizza_toppings:#for loop through a list.
    if topping == 'Pepperoni': #conditional if, contintue
        continue
    print('After 1st if statement') #print to console
    if topping == 'Olives':
        break #conditional if, break stops the loop.

def print_hello_ten_times(): #function declaration
    for num in range(10): #for loop starts at zero, goes to 10
        print('Hello') #print to console.

print_hello_ten_times() #calling a function

def print_hello_x_times(x): #funtion declaration
    for num in range(x): #for loop until a given number
        print('Hello') #print to console

print_hello_x_times(4) #calling the function argument of 4

def print_hello_x_or_ten_times(x = 10): #function declaration with default parameter.
    for num in range(x): #for loop until x
        print('Hello')#print to console.

print_hello_x_or_ten_times() #calling the function to 10
print_hello_x_or_ten_times(4) #calling the function to 4.


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)