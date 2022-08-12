//es5 
function Animal (name, energy) {
    this.name = name;
    this.energy = energy;
}

Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eat`);
    this.energy +=this.energy
}

Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping`);
    his.energy -= length
} 

Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing`);
    his.energy -= length
}

const leo = new Animal('Leo', 7)


class Animal1 {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }
    eat(length) {
        console.log(`${this.name} is eat`);
        his.energy += length
    }

    sleep(length) {
        console.log(`${this.name} is sleeping`);
        his.energy -= length
    }

    play(length) {
        console.log(`${this.name} is playing`);
        his.energy -= length
    }
}

const leo1 = new Animal('Leo1', 7)
