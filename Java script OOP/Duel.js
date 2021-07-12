class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost; 
    }

}

class Unit extends Card{
    
constructor(name,cost,power, reseliance){
    super(name, cost);
    this.power = power;
    this.reseliance = reseliance;
} 
attack(target){
    target.reseliance = target.reseliance - this.power; 
} 
}

class effect extends Card{
    constructor(name,cost,text, stat, magnitude){
    super(name,cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;

 }


 HardAlgo(target){
    if( target instanceof Unit ) {
        target.reseliance = target.reseliance + 3;
    } else {
        throw new Error( "Target must be a unit!" );
    }
     
 }


 UnhandledPromise(target){
if( target instanceof Unit ) {
         target.reseliance = target.reseliance - 2;
    } else {
        throw new Error( "Target must be a unit!" );
    }
     
 }

 PairProgramming(target){
if( target instanceof Unit ) {
        target.power = target.power + 2; 
    } else {
        throw new Error( "Target must be a unit!" );
    }
     
 }


}

const RedNinja = new Unit("Red Belt Ninja",3,3,4);

const HardAlgo = new effect("Hard Algorithm",	2	, "increase target's resilience by 3	resilience", 3);

HardAlgo.HardAlgo(RedNinja);

const BlackBeltNinja = new Unit("Black Belt Ninja",	4,	5,	4);

const UnhandledPromiseRejection = new effect("Unhandled Promise Rejection", 1 ,"reduce target's resilience by 2 resilience", 2);
UnhandledPromiseRejection.UnhandledPromise(RedNinja);

const PairProgramming = new effect("Pair Programming	" , 3 ,	"increase target's power by 2	power",2);
PairProgramming.PairProgramming(RedNinja);

RedNinja.attack(BlackBeltNinja); 