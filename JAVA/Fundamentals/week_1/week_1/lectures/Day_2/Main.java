public class Main {
    public static void main(String[] args) {
        // System.out.println("Just make sure it works");

        // OOPDay1 instance1 = new OOPDay1();

        // instance1.test();



        RobotMan robot1 = new RobotMan();
        RobotMan nobot = new RobotMan ("Stanley", 255, "Silver", "Chili's");


        System.out.println(robot1.getName());
        System.out.println(robot1.getAge());
        robot1.setName("Marcus O' Really S");
        System.out.println(robot1.getName());
        System.out.println("*************");
        System.out.println(
            "Name :" + nobot.getName() +
            "Age : " + nobot.getAge());
        
        System.out.println("Total Bots: " + RobotMan.getNumofBots());
    }

}