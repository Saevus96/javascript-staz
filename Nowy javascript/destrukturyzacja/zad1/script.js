const obj = {
    name: "Marcin",
    surname: "Kowalski",
    age: 20
}

const {
    name,
    surname,
    age
} = obj;
console.groupCollapsed(name);
console.log(surname);
console.log(age);
console.groupEnd();

///zad 2 

const tab = [1, 2, 3, 4, 5];

[a, b, , c] = tab;

console.log(a, b, c);