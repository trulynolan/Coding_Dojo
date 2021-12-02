import java.util.ArrayList;

public class CafeUtil {


    // Each week, a customer needs to purchase 1 more drink than they bought the previous week to get some free drinks after 10 weeks. For this method, sum together every integer from 1 to 10 and return the sum after it has been calculated. 

    public int getStreakGoal(){
        int num = 0;
        for (int i = 0; i <= 10; i++){
            num += i ;
        }
        return num;
    }

    // Given an array of order prices, sum the prices and return the total. 

    double getOrderTotal(double[] prices){
        double total = 0.0;
        for (int j = 0; j < prices.length; j++){
            total += prices[j];
        }
        return total;
    }


    // Given an ArrayList of menu items (strings), print out each index and menu item.
    // Sample output, with the argument { "drip coffee", "cappuccino", "latte", "mocha" } :

    void displayMenu(ArrayList<String> menuItems){
        int num = 0;
        for(String name : menuItems){
            System.out.println(num +" "+ name);
            num++;
        }
    }


    public void addCustomer(ArrayList<String>customers){
        System.out.println("Please enter your name: ");
        String userName = System.console().readLine();
        System.out.println("Hello, " + userName);
        System.out.println("There are " + customers.size() + " people in front of you");
        customers.add(userName);
    }


    // For this method:

    // Print this string to the console: "Please enter your name:"
    // Then add this line of code to get their answer and store it in the variable  userName: 
    // String userName = System.console().readLine();copy
    // Next print the userName to the console, saying "Hello, [user name here]!"
    // Next print "There are ___ people in front of you" using the number for how many people are ahead of them (how many items already in the array)
    // Then, add the customer's name to the given customers list. And print the list.
    // No need to return anything.
}

