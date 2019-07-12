//tablica w której chcemy zliczyć występowanie danych elementów
const tab = [
    "Ala ma kota",
    3,
    "Ania lubi czekoladki",
    "Ala ma kota",
    2,
    "Piesek Rysiek",
    "Piesek Rysiek",
    2,
    "Ania lubi czekoladki",
    "Ania lubi czekoladki"
];

const ob = {}
tab.forEach(function (element) {
    if (!ob.hasOwnProperty(element)) {
        ob[element] = 0;
    }
    ob[element]++;
});

console.log(ob);

console.log(ob["2"], ob["2"].length);

function Car(brand, color) {
    this.age = 0;
    this.brand = brand;
    this.color = color;

    this.print = function () {
        console.log(this.brand + ' koloru ' + this.color);
    }
}

const car1 = new Car("Mercedes", "Green");
car1.print();
const car2 = new Car("BMW", "Black");
car2.print();

function Truck(name, age, speed) {
    this.name = name;
    this.age = age;

    var risk = "small";

    if (age > 8 && age <= 15) {
        risk = "average";
    } else if (age > 15){
        risk = "big";
    }
    this.status = risk;
}

const truck1 = new Truck("Truck1", 22, 120);

console.log(truck1);