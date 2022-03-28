print("Welcome to my first game!")

name = input("What is your name? ")
age = int (input ("What is your age? "))


health = 10



if age >= 18:
    print("You are old enough to play!")

    wants_to_play = input("Do you want to play? ")
    if wants_to_play == "yes":
        print("You are starting with", health, "health")
        print("Let's do this...")

        left_or_right = input("First choice... Left or Right (left/right)?  ")
        if left_or_right == "left":
            ans = input("Well done, you have reached a lake... do you swim across or go around? (across/around)")
            
            if ans == "around":
                print("You went around and reached the other side of the lake. ")
            elif ans == "across":
                print("You managed to get across but you were bit by a fish and lost 5 health. ")
                health -= 5
                
            ans = input("You notice a house and a river. Which do you go to (river/house)?  ")
            if ans == "house":
                print("You go to the house and are greeted by the owner... he doesn't like you and you lose 5 health")
                health -= 5

                if health <= 0:
                    print("You now have 0 health. You lose.")
                else:
                    print("You have survived... You win!")
            else:
                print("You fell in the river and lost... idiot.")
                
            
        else:
            print("You have chosen the Caradhras pass ...You have died...")
    
    else:
        print("Cya...")
else: 
    print("Get you of here, you don't want no part of this game!")





'''
string -> "hello", "hi", "89"
int -> 8, 7, 999
float -> 6.0, 7.5, -9.8
bool -> True, False
'''
