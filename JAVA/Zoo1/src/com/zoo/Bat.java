package com.zoo;

public class Bat extends Mammal{
	
	public Bat(int energyLevel) {
		super(energyLevel);
	}

public int fly() {
	System.out.println("WOOSH! ");
	return energyLevel -= 50;
}

public int eatHumans() {
	System.out.println("*CRUSH* *SCREAMS*");
	return energyLevel += 25;
}

public int attackTown() {
	System.out.println("Hey Mark! Oh hey Paul! Hey have you---AAAHHHHH!!!! *instant death*");
	return energyLevel -= 100;
}

}