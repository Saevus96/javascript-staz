const fan = (var1, ...var2) => {
    let i = 0;
    return var1.reduce((el,
        val) => `${el}${val}${var2.length ? `[${var2.shift()}]`:' '}`);
}

let name = "Konrad";
let height = 190;
let age = 23;

const text = fan `Nazywam się ${name} Moj wzrost to ${height} Mam ${age} lat`;

console.log(text);