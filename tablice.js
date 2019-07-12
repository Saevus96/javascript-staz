let tab = ["Ala", "ma", "kota", "kot", "ma"];
tab.unshift("alicja")
tab.push("koniec");
console.log(tab, tab.length);

for (let i = 0; i < tab.length; i++) {
    console.log(tab[i], tab[i].length);
}
console.log("______________________________________");
tab.forEach(element => {
    console.log(element, element.length);
});
console.log("______________________________________");
console.log("______________________________________");
for (const element of tab) {
    console.log(element, element.length);
}

console.log("______________________________________");
console.log("______________________________________");

let tab2 = [];
let min = 1;
let max = 10;

for (let i = 0; i < 10; i++) {
    let var1 = Math.floor(Math.random() * (max - min + 1) + min);
    tab2[i] = var1;
    console.log(tab2[i]);
}

tab2.sort(function (a, b) {
    return a - b;
})

//console.log(tab2);

//console.log("Najmniejsza to: ",tab2[0]," Największa to: ", tab2[tab2.length-1]);

const tabUsers = [{
        name: "Marcin",
        age: 14
    },
    {
        name: "Piotr",
        age: 18
    },
    {
        name: "Agnieszka",
        age: 13
    },
    {
        name: "Weronika",
        age: 20
    }
]
console.log("______________________________________");
console.log("______________________________________");

console.log(tabUsers.filter(function (user) {
    return user.age >= 18;
}))