// function Animal(name) {
//     this.type = "animal";
//     this.name = name;
// }

// Animal.prototype.eat = function () {
//     return " love food";
// }

// const animal1 = new Animal("Leszek");
// console.log(animal1.eat());

// function Bird(name) {
//     Animal.call(this);
//     this.type = "bird";
// }

// Bird.prototype = Object.create(Animal.prototype);

// Bird.constructor = Bird;

// Bird.prototype.eat = function () {
//     const text = Animal.prototype.eat.call(this);
//     return text + " - no dobra"
// }
// Bird.prototype.fly = function () {
//     return "I can fly";
// }
// const obBird = new Bird("ptak");

// //console.log(obBird.eat());
// //console.log(obBird.fly());


// //ES6 - klasy
// class Animal2 {
//     constructor(name) {
//         this.name = name;
//         this.type = "animal";
//     }
//     eat() {
//         console.log(this.name + " jem");
//     }
//     sleep() {
//         console.log(this.name + " spie");
//     }
// }

// const anim = new Animal2("Rysiu");

// console.log(anim.eat());
// console.log(anim.sleep());

// console.log(anim);

// class Bird2 extends Animal2 {
//     constructor(name) {
//         super(name);
//         this.type = "bird";
//     }
//     eat() {
//         const text = super.eat();
//         return text + "- exactly seed";
//     }
//     fly() {
//         return "I can fly";
//     }
// }

// const bird2 = new Bird2("ptaszek");

// console.log(bird2.eat());

// class Shape {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     area() {
//         return "no area";
//     }
// }

// class Rectangle extends Shape {
//     constructor(x, y, side) {
//         super(x, y);
//         this.side = side;
//     }
//     area() {
//         const text = super.area();
//         return "i made area but my parent ..." + text;
//     }
// }

// const rect = new Rectangle(1, 2, 3);

// console.log(rect.x, rect.y);

// console.log(rect.area());

class Brick {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.graphic = "";
        this.height = 0;
        this.width = 0;
        this.type = "brick";
        this.live = 0;
    }
    print() {
        console.log(`Xpos: ${this.x}, Ypos: ${this.y}, graphic: ${this.graphic},
        width: ${this.width}, height: ${this.height}, type: ${this.type}, live: ${this.live}`);
    }
    init() {
        console.log("dodano na plansze");
    }
}

class BrickRed extends Brick {
    constructor(x,y) {
        super(x,y);
        this.graphic = "blue.png";
        this.live = 10;
        
    }
}

class BrickBlue extends Brick {
    constructor(x,y) { 
        super(x,y);       
        this.graphic = "red.png";
        this.live = 15;
    }
}

class BrickGreen extends Brick {
    constructor(x,y) {   
        super(x,y);    
        this.graphic = "green.png";
        this.live = 20;
    }
}

class BrickAnim extends Brick {
    constructor(x,y) {
        super(x,y);
        this.speed = 1;
    }
    moveHorizontal() {
        console.log("poruszam sie z predkoscia... " + this.speed);
    }
}

const brick1 = new Brick(1,2);
brick1.print();
brick1.init();

const brick2 = new BrickRed(10,20);
brick2.print();
brick2.init();

const brick3 = new BrickBlue(32,11);
brick3.print();
brick3.init();

const brick4 = new BrickAnim(13,10);
brick4.print();
brick4.init();

