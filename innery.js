function Animal(name, age) {
    this.name = name;
    this.age = age;
    this.type = 'animal';
}

Animal.prototype.eat = function() {
    return this.name + " właśnie je";
}

function Dog(name, age) {
    Animal.call(this, name, age);
    this.name = name;
    this.type = "dog";
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.eat = function() {
    const text = Animal.prototype.eat.call(this); //tamta funkcja nie ma parametrów
    return text + " kości";
}

Dog.prototype.bark = function() {
    return "Wof! Wof!";
}

const dog = new Dog("dog", 8);
const animal = new Animal("Animal", 10);

const ob = {
    name : "Marcin"
}

console.log(dog instanceof Dog); //true
console.log(dog instanceof Animal); //true
console.log(dog instanceof Object); //true
console.log(animal instanceof Animal); //true
console.log(animal instanceof Object); //true

console.log(ob instanceof Dog); //false
console.log(ob instanceof Animal); //false

console.log(dog.constructor === Dog);