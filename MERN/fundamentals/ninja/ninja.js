class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`Yo my name is ${this.name}`);
    }
    showStats(){
        console.log(`Yo here are the attributes and stuff: ${this.name}, ${this.health}, ${this.speed}, ${this.strength}`)
    }
    drinkSake(){
        this.sake += 10;
        console.log(`Hey here's some health holmes.`)
    }
}

const ninja1 = new Ninja("PapaGeorgio", 10);
ninja1.sayName();
ninja1.showStats();

// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10)
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log(`${this.name} says "GHAT DANG that jank is HEAVY. Hit me again, Kevin!"`)
    }
}

const senseiDad = new Sensei("Jimmothy");
senseiDad.showStats();
senseiDad.speakWisdom();

