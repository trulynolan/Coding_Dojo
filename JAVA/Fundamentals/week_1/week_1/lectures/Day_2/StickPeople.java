public class StickPeople {

    private String name;
    private int arms = 2;
    private int legs = 2;
    private String petName;
    private Boolean faxNoPrint;


    public StickPeople (){}

    public void intro(StickPeople StickPeople){
        System.out.println(
            "Hello, my name is " + stickpeople.name +
            " and my pet is " + stickpeople.petName + "."
        );
    }

    public void comparePet (StickPeople stickPeople){
        System.out.println(
            this.name + " says that " + this.petName +
            "is so much cooler than " + stickPeople.petName + "!"
        );
    }

    public StickPeople(String name, String petName){
        this.name = name;
        this.petName = petName;
    }

    public String getName(){
        return name;
    }

    public String getPetName(){
        return petName;
    }


    public void Adelle() {
        System.out.println("Hello fromt he other siiidee!");

    }


}