let varNum = 10;
let varBool = false;
let varStr = "string";
let varNull = null;
let varSym;

const varObj = new String("OBJECT");
let array1 = [1, 2, 3, 4, 5];
let array2 = array1.slice();

let varSum = varNum + varBool + varNull + varStr + varObj + array1 + array2.push(6);
let varSum2 = varNum - varBool - varNull - varStr - varObj - array1 - array2.push(6);
let varSum3 = varNum * varBool * varNull * varStr * varObj * array1 * array2.push(6);
let varSum4 = varNum / varBool / varNull / varStr / varObj / array1 / array2.push(6);
console.log(varSum);
console.log(varSum2);
console.log(varSum3);
console.log(varSum4);

let width = "20px";

width = parseInt(width) + 30;
console.log("width: " + width);

if (typeof age === "undefined") {
    console.log("Zmienna age, nie istnieje tworze zmienna...");
    let age = 24;
    console.log(age);
}

console.log("______________________________________________________________ ");
console.log("______________________________________________________________ ");
console.log("______________________________________________________________ ");
console.log("______________________________________________________________ ");
console.log("");
console.log("");
console.log("");

var myVar1 = 10;
var myVar2 = 20;

console.log(myVar1 + myVar2);
console.log(myVar1 / myVar2);
console.log(myVar1 * myVar2);
console.log(myVar1 - myVar2);

console.log(typeof myVar1);
console.log(typeof myVar2);

var CVAR1 = 30;
var CVAR2 = 50;

console.log(CVAR1);
console.log(CVAR2);
CVAR1 = CVAR2 + 4;
CVAR2 = CVAR1 + 40;
console.log(CVAR1);
console.log(CVAR2);

console.log(text);
var text = "przykladowy text";


/*const CONST1 = 30;
const CONST2 = 50;

CONST1 += CONST2;
CONST2 += CONST1;*/

/*console.log(text2);
let text2 = "jakis tekst";*/

let var1 = 20;
let var2 = 33;
let var3 = "20";

var1++;
var2++;

console.log(var1 + "+" + var2 + "=" + (var1 + var2));

let a = 20;
let b = "20";

if (a === b) {
    console.log("zmienne " + a + " i " + b + "są takie same");
} else {
    console.log("zmienne " + a + " i " + b + " są różne");
}

let text3 = "ALA MA KOTA";
text3 += "kot ma ale";
text3 += "no jeszcze ostatnia linia";
text3 += "OSTATNIA LINIA!";
console.log(text3);