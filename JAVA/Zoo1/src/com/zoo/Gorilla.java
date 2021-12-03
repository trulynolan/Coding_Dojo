package com.zoo;

public class Gorilla extends Mammal {
	
	public Gorilla(int energyLevel) {
		super(energyLevel);
	}
	
	public int throwSomething() {
		System.out.println("Time to throw some doodooooo! ");
		return energyLevel -= 5;
	}
	
	public int eatBananas() {
		System.out.println("Dude...I'm so full... ");
		return energyLevel += 10;
	}
	
	public int climb() {
		System.out.println("Yo I'm up here loser! ");
		return energyLevel -= 10;
	}
}
