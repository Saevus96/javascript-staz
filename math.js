let min = 20;
let max = 90;
let var1 = Math.floor(Math.random() * (max - min + 1) + min);
let var2 = Math.floor(Math.random() * (max - min + 1) + min);

if (var1 > var2) {
    console.log("var1: " + var1 + " jest większa od var2: " + var2);
} else if (var2 > var1) {
    console.log("var2: " + var2 + " jest większa od var1: " + var1);
} else {
    console.log("var1: " + var1 + " i var2: " + var2 + " są sobie równe");
}

const nr1 = Math.random()*10+1;
const nr2 = Math.random()*10+1;

console.log(nr1, Math.ceil(nr1), Math.floor(nr1));
console.log(nr2, Math.ceil(nr2), Math.floor(nr2));