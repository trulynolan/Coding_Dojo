# 1 Basic - Print all integers from 0 to 150.
for i in range(1, 151):
    print(i)

# 2 Print all the multiples of 5 from 5 to 1,000
total = 5
while total <= 1000:
    print(total)
    total = total + 5

# 3 Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".
for i in range(1, 101):
    # print(i)
    if(i%10==0):
        print("Coding Dojo")
    elif(i%5==0):
        print("Coding")
    else:
        print(i)
     
# 4 Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.
number=0
for i in range(1, 500001):
    if(i%2==1):
        number+=i
print(number)

#5 Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.

for i in range(2018, 0, -4):
    print(i)

#6 Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)

lowNum=1
highNum=10
mult=2
for i in range(lowNum, highNum+2):
    if(i%mult==0):
        print(i)

x=1
y=2
print(str(x)+str(y))

name = "Charles"


