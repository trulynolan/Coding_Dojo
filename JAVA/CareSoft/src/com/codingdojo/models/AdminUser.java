package com.codingdojo.models;

import java.util.ArrayList;
import java.util.Date;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin{
public AdminUser(Integer id, String role) {
		super(id);
		this.role=role;
		this.securityIncidents = new ArrayList<String>();
		// TODO Auto-generated constructor stub
	}
//... imports class definition...
    
    // Inside class:
    private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents;
    
    // TO DO: Implement a constructor that takes an ID and a role
    
    // TO DO: Implement HIPAACompliantUser!
    
    // TO DO: Implement HIPAACompliantAdmin!
    
    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }
   
	public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }
	@Override
	public ArrayList<String> reportSecurityIncidents() {
		// TODO Auto-generated method stub
		return this.securityIncidents;
	}
	
	
	@Override
	public boolean assignPin(int pin) {
		int pinLength = String.valueOf(pin).length();
		if (pinLength >= 6) {
			this.pin = pin;
			return true;
		} else {	
			return false;
		}
	}
	
	
	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		
		if (this.id == confirmedAuthID) {
			return true;
		}
		else {
			authIncident();
			return false;
		}
	
		// TODO Auto-generated method stub
	}
    
    // TO DO: Setters & Getters

}
