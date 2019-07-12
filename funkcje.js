function fun1(text) {
    return "Liczba liter to :" + text.length;
}

console.log(fun1("Ala ma kota"));

function fun2(tab) {
    let sum = 0;
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    }
    return sum;
}

let arr = [1, 2, 3, 4, 5];
console.log(fun2(arr));


function fun3(text) {
    let mixedText = "";
    for (let i = 0; i < text.length; i++) {
        if (i % 2 == 0) {
            mixedText += text.charAt(i).toUpperCase();
        } else {
            mixedText += text.charAt(i).toLowerCase();
        }
    }
    return mixedText;
}

let txt = "Ala ma kota";
console.log("input ---> ", txt);
console.log("output ---> ", fun3(txt));

function fun4(nr1, nr2) {
    if (typeof nr1 !== "number" || typeof nr2 !== "number") {
        return false;
    } else {
        return nr1 * nr2;
    }
}


console.log(fun4(3, 2)); //6
console.log(fun4("Ala", 2)); //false

function fun5(name, month) {
    month = month.toLowerCase();
    if (month == "grudzień" || month == "styczeń" || month == "luty") {
        return name + " jeździ na sankach";
    } else if (month == "marzec" || month == "kwiecień" || month == "maj") {
        return name + " chodzi po kałurzach";
    } else if (month == "czerwiec" || month == "lipiec" || month == "sierpień") {
        return name + " się opala";
    } else if (month == "wrzesień" || month == "październik" || month == "listopad") {
        return name + " zbiera liście";
    } else {
        return name + " uczy sie javascript";
    }
}

console.log(fun5("Mahomet", "Styczeń"));

function fun6(string, char) {

    let tab = string.split(char);
    let finalText = "";
    tab.sort();
    for (let i = 0; i < tab.length; i++) {
        finalText += tab[i] + char;
    }
    return finalText;
}


const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
console.log(fun6(str, "|"));

let tab = [];

let min = 20;
let max = 90;

for (let i = 0; i <= 10; i++) {
    let var1 = Math.floor(Math.random() * (max - min + 1) + min);
    tab[i] = var1;
    console.log(tab[i]);
}

function fun7(tab) {
    let min = 10000;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] < min) {
            min = tab[i];
        }
    }
    return min;
}

console.log("_______________________________________");
console.log("_______________________________________");
console.log(fun7(tab));

let tab2 = ["Ania", "Marcin", "Bartek", "Piotr"];

function fun8a(tab) {
    for (let i = 0; i < tab.length; i++) {
        tab[i] = tab[i].toUpperCase();
    }
    return tab;
}

function fun8b(tab) {
    for (let i = 0; i < tab.length; i++) {
        tab[i] = fun3(tab[i]);
    }
    return tab;
}

console.log(fun8a(tab2));
console.log(fun8b(tab2));


function fun9(text, n) {

    if (typeof text !== 'string') {
        text = "";
    }
    if (typeof n !== 'number') {
        n = 2;
    }
    finalText = "";
    for (let i = 0; i < n; i++) {
        finalText += text;
    }
    return finalText;
}
console.log(fun9("x"));

function fun10() {
    let a = 0;
    return function () {
        return a++;
    }
}

const count = fun10();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());


function myAbs(nr) {
    if (nr < 0) {
        return -1 * nr;
    } else {
        return nr;
    }
}

function myPow(nr, pow) {
    let power = 1;
    for (let i = 0; i < pow; i++) {
        power = power * nr;
    }
    return power;
}

function myMax(nr1, nr2) {
    if (nr1 > nr2) {
        return nr1;
    } else {
        return nr2;
    }
}
console.log("_______________________________________");
console.log("_______________________________________");
console.log(myAbs(-5));
console.log(myPow(2, 32));

console.log(myMax(3,4));

