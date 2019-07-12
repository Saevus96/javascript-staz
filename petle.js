let text = "";
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        text += "*";
    }
    text += "\n";
}
console.log(text);
text = "";
for (let i = 1; i <= 10; i++) {
    text += i;
}
console.log(text);

let consol = "";
consol += "╔";
text = "Ala ma kota";
for (let i = 0; i < text.length; i++) {
    consol += "=";
}
consol += "╗\n"
consol += "║" + text + "║\n";
consol += "╚";
for (let i = 0; i < text.length; i++) {
    consol += "=";
}
consol += "╝";
console.log(consol);