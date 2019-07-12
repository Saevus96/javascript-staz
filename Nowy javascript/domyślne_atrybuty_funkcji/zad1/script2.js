function printBig(...parm) {
    const tab = parm.map(el => el.toUpperCase());
    return tab.join(" + ");
}

console.log(printBig("Kot", "Pies", "Żyrafa", "Żaba", "Koń"));