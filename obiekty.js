const obj1 = {
    name: "aaaa",
    price: 33,
    weight: 45.5
}
const obj2 = {
    name: "bbbb",
    price: 60,
    weight: 120.5
}

console.log("Produktu numer 1 to: ", obj1.name);
console.log("Produktu numer 2 to: ", obj2.name);
console.log("Produkty kosztuja razem: ", obj1.price + obj2.price);
console.log("Produkty waza razem: ", obj1.weight + obj2.weight);

const currentUser = {
    name: "User",
    surname: "Userowski",
    email: "user@user.com",
    www: "www.user.user.org.pl",
    userType: "Admin",
    show: function show() {
        console.log(this.name, this.surname, this.email, this.www, this.userType);
    }
}
currentUser.show();


const book = {
    title: "W pustyni i w puszczy",
    author: "Jaś mela",
    pageCount: 3563424,
    publisher: "Punisher",
    showDetails: function showDetails() {
        for (const i in this) {
            if (typeof this[i] !== "function") {
                console.log("Klucz: " + i);
                console.log("Wartosc: " + this[i]);
            }
        }
    }

}
book.showDetails();


const users = [
    //id name surname email age value
    [1, "Shauna", "Bradnocke", "sbradnocke0@altervista.org", 20, 108.28],
    [2, "Mela", "Redman", "mredman1@nps.gov", 24, 267.37],
    [3, "Othelia", "Lemon", "olemon2@slashdot.org", 15, 748.06],
    [4, "Meier", "Cockell", "mcockell3@icio.us", 32, 1951.64],
    [5, "Shellysheldon", "Gronowe", "sgronowe4@cnbc.com", 16, 1040.54],
    [6, "Francisca", "Tofanini", "ftofanini5@gnu.org", 21, 1544.08],
    [7, "Cliff", "Underwood", "cunderwood6@addtoany.com", 10, 451.21],
    [8, "Caron", "Falshaw", "cfalshaw7@hugedomains.com", 27, 1968.72],
    [9, "Anitra", "Warters", "awarters8@intel.com", 12, 380.68],
    [10, "Caitrin", "Baudrey", "cbaudrey9@ihg.com", 13, 1385.44]
]

function fixData() {
    let tab = [];
    for (const element of users) {
        const user = {
            id: element[0],
            name: element[1],
            surname: element[2],
            email: element[3],
            age: element[4],
            money: element[5]
        }
        tab.push(user);
    }
    return tab;
}
console.log(fixData());
let tabFixed = fixData();

let money = 0;
let age = 0;

for (const el of tabFixed) {
    money += el.money;
    age += el.age;
}


const summary = {
    money: money,
    age: age,
    averageAge: age / tabFixed.length
}
console.log(summary);

function Car(brand, color) {
    this.brand = brand;
    this.color = color;

}

Car.prototype.print = function () {
    console.log(this.brand + ' koloru ' + this.color);
}

let car = new Car("Fiat", "red");

car.print();
console.dir(car);
console.dir(car);

Car.prototype.speed = "spid";

console.dir(car);

const car1 = new Object();

car1.__proto__ = Car.prototype;
Car.call(car1);
car1.brand = "Merol";
car1.color = "gold";


function Car2(name, brand, engine, mile, age) {
    this.name = name;
    this.brand = brand;
    this.engine = engine;
    this.mile = mile;
    this.age = age;
}

Car2.prototype.printDetails = function () {
    console.log(this.name + "   " + this.brand);
}

car4 = new Car2("car1", "car1", "1.8T", 3333, 5);

console.log(car4)


function Enemy(name, speed, attack, posX) {
    this.name = name;
    this.live = 5;
    this.speed = speed;
    this.attack = attack;
    this.posX = posX;
}

Enemy.prototype.move = function () {
    this.posX = this.posX - this.speed;
    console.log("Jestem: " + this.name + " znajduję się na pozycji: " + this.posX);
}

Enemy.prototype.attackEnemy = function () {
    console.log("Jestem: " + this.name + "Atakuję gracza z pozycji: " + this.posX + " z siłą: " + this.attack);
}

Enemy.prototype.hit = function () {
    this.live = this.live - 1;
    console.log("Jestem : " + this.name + " Mam teraz życia: " + this.live);
}

enemy1 = new Enemy("Bulbasaur", 2, 3, 30);
enemy2 = new Enemy("Pikachu", 6, 16, 40);

enemy1.move();
enemy1.move();
enemy1.move();
enemy2.move();
enemy2.move();
enemy1.attackEnemy();
enemy1.attackEnemy();
enemy1.attackEnemy();
enemy2.attackEnemy();
enemy2.attackEnemy();
enemy2.attackEnemy();
enemy1.hit();
enemy1.hit();

String.prototype.sortText = function (chr) {
    const tab = this.split(chr);
    tab.sort();
    const newStr = tab.join(chr);
    return newStr;
}

console.log("ALA,MA,KOTA,I,PSA,BLA,BLAB,DKJA,DJAA".sortText(","));

const obiekt = {
    pets: ["słoń,", "krowa", "dzik"],
    time: 2000,
    print: function () {
        setTimeout(function () {
            for (const pet of this.pets) {
                console.log(pet.toUpperCase());
            }
        }.bind(this), this.time);
    }
}

obiekt.print();



function Animal(name, age) {
    this.name = name;
    this.age = age;
    this.type = "animal";
    sound = function () {
        return "Hau Hau";
    }
}

Animal.prototype.eat = function () {
    return this.name + ": Jem nie przeszkadzaj!";
}

function Dog(name, age) {
    this.name = name;
    this.type = "dog";
    Animal.call(this, name, age);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.sound = function () {
    return "hau hau!";
}
const dog = new Dog("Szarik", 8);

const animal = new Animal("Pingwin");



Dog.prototype.eat = function () {
    const text = Animal.prototype.eat.call(this);
    return text + "kości";
}
console.log(dog.eat());
console.log(dog.sound());