let text = "Jestem Twoim tekstem";
console.log(text + "a moja dlugość to text : " + text.length);

const text2 = "Bardzo lubię jeść marchewkę";

const words = text2.split(" ");
console.log(words.length);
console.log(words);

let name = "konrad";

console.log(name.charAt(0).toUpperCase() + name.slice(1));

const email = "loremimpsumgmail.com";
if (email.indexOf("@") > -1) {
    console.log("email zawiera znak @");
} else {
    console.log("email nie zawiera znaku @");
}

let text3 = "Uczę się stringów w C++";

console.log(text3.slice(0, text3.indexOf('C++')) + "javascript");
text3 = text3.slice(0, text3.indexOf('C++')) + "javascript";


let url = "http://mojastrona.pl";

url = url + "?text=" + encodeURI(text3);

console.log(url);

const text4 = "ALA ma kota";

console.log(text4.toLowerCase());
console.log(text4.toUpperCase());

let finalText = "";
for (let i = 0; i < text4.length; i++) {
    if (i % 2 == 0) {
        finalText += text4.charAt(i).toUpperCase();
    } else {
        finalText += text4.charAt(i).toLowerCase();
    }
}

console.log(finalText);
let text5 = text4.replace("ALA", "OLA");
console.log(text5);