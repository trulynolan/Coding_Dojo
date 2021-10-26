

x = [[5, 2, 3], [10, 8, 9]]
students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}
z = [{'x': 10, 'y': 20}]

# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
x[1][0] = 15
print(x[1][0])
# Change the last_name of the first student from 'Jordan' to 'Bryant'
students[0]['last_name'] = "Bryant"
print(students[0]['last_name'])
# In the sports_directory, change 'Messi' to 'Andres'
sports_directory["soccer"][0] = "Andres"
print(sports_directory["soccer"][0])
#Change the value 20 in z to 30#
z[0]['y'] = 30
print(z[0]['y'])

# Create a function iterateDictionary(some_list) that, given a list of dictionaries, the function loops through each dictionary in the list and prints each key and the associated value. For example, given the following list:

students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]


def iterateDictionary(list):
    for i in range(0, len(list)):
        print(list[i])


iterateDictionary(students)


# 3 Get Values From a List of Dictionaries
students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]


# This line is defining parameters. These are my temporary variables. The function won't work if this isn't here. ^^^^^^^
def iterateDictionary(key_name, list):
    # i is my start point, range is telling it when to stop.
    for i in range(0, len(list)):
        # This is the command for each iteration. Like the console.log dealio.
        print(list[i][key_name])


iterateDictionary("last_name", students)

# 4 Create a function printInfo(some_dict) that given a dictionary whose values are all lists, prints the name of each key along with the size of its list, and then prints the associated values within each key's list. For example:


def printInfo(some_dict):
    print(len(some_dict['locations']), "LOCATIONS")
    for location in some_dict['locations']:
        print(location)
    print(len(some_dict['instructors']), "INSTRUCTORS")
    for location in some_dict['instructors']:
        print(instructors)
    
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)
