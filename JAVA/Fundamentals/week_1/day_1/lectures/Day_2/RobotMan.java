public class RobotMan {

    // Attributes | member variables.
    private String name;
    private int age;
    private String color;
    private String manufact;
    
    private static int numOfBots;

    // Empty Constructor
    public RobotMan(){
        numOfBots++;
    }

    public RobotMan(String name, int age, String color, String manufact){
        this.name = name;
        this.age = age;
        this.color = color;
        this.manufact = manufact;
        numOfBots++;

    }

    // Static Methods
    public static int getNumofBots(){
        return numOfBots;
    }

    // Getters and Setters are vert important inside classes. Want to have them for all of the member vaariables. 
    public String getName () {
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public int getAge () {
        return age;
    }

    public void setAge () {
        this.name =  name;
    }
    
    
    public void test (){
        System.out.println("Print from OOPDay1");
    }
}