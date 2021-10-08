// const Dice = function(sides=6){
//     this.sides = sides;
//     this.roll = function() {
//         return Math.floor(this.sides * Math.random() + 1)
//     }
// }

class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }

    static description() {
        return 'A way of choosing random numbers'
    }
}

const redDice = new Dice();

const blueDice = new Dice(20);

console.log('Red Dice Role:', redDice.roll());
console.log('Blue Dice Role:', blueDice.roll());
// console.log('Red Dice description: ', redDice.description()); This does not work

class Turtle {
    constructor(name, color) {
        this.name = name;
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    swim() {
        return `${this.name} paddles in the water`;
    }
}

class NinjaTurtle extends Turtle {
    constructor(name, color) {
        super(name);
        this.weapon = 'hands';
        let _color = color;
        this.setColor = (color) => {
            if(typeof color === 'string'){
                return _color = color;
                } else {
                    throw new Error('Color must be a string');
                }
            }
        this.getColor = () => _color;
    }
    attack() { return `Feel the power of my ${this.weapon}!` } 
}

const leo = new NinjaTurtle('Leonardo');

console.log('Turtle Name:', leo.name);
console.log(leo.sayHi());

Turtle.prototype.weapon = 'Hands';

const raph = new NinjaTurtle('Raphael', 'Red');

console.log('Turtle Name:', raph.name);
console.log(raph.sayHi());
console.log('Turtle Weapon:',raph.weapon);
console.log(raph.attack());

const don = new NinjaTurtle('Donatello');

console.log('Turtle Weapon:', don.weapon);

leo.weapon = 'Katana Blades';
console.log('Leo new weapon:', leo.weapon)

raph.weapon = 'Sai';
console.log('Raph new weapon:', raph.weapon);

don.weapon = 'Bo Staff';
console.log('Don new weapon:', don.weapon);

console.log(leo);

const mike = new NinjaTurtle('Michelangelo');

mike.food = 'Pizza';

NinjaTurtle.prototype.eat = function() {
    return 'Mmm, this ${this.food} tastes great!';
}

console.log(mike.eat());
