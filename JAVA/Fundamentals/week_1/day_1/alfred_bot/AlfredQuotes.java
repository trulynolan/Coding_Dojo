import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting(){
        return "Hello, lovely to see you. How are you?";
    }
    public String guestGreeting(String name){
        return "Hello, " + name + " lovely to see you. How are you?" ;
    }
    public String dateAnnouncement(){
        Date date = new Date();
        return "It is currently " + date;
    }
    public String respondBeforeAlexis(String conversation){
        if(conversation.contains("Alexis")){
            return conversation;
        }
        else if (conversation.contains("Alfred")){
            return conversation;
        }
        else {
            return conversation;
        }
    }
}
