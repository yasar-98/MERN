class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`You ninja name is ${ this.constructor.name } `);
    }
    showState() {
        console.log(`You ninja name is ${ this.constructor.name }, his health is ${ this.constructor.health }, and his speed is ${ this.speed } and his strength is ${ this.strength }`);
    }
    drinkSake() {
        this.health += 10;
    }

}
class Sensei extends Ninja {
    constructor(name) {
        super(name, 200);
        super.speed=10;
        super.strength=10;
        this.wisdom= 10;
    }
    // simple function in the child class
    speakWisdom() {
        // by using super, we can call the parent method
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."

