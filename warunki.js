let a = 2;
let b = 3;
let c = 4;

if (a > b && a > c) {
    console.log("a jest najwieksze");
} else {
    if (b > c) {
        console.log("b jest najwieksze")
    } else {
        console.log("c jest najwieksze");
    }
}

//podpinamy się pod wysyłanie formularza
document.querySelector('#myForm').addEventListener('submit', function (e) {
    e.preventDefault();

    //pobieramy wartość pola #formAge
    const age = document.querySelector('#formAge').value;
    const age2 = Number(age, 10);

    if (!isNaN(age2) && age2 >= 18) {
        console.log("Wszystko wporząsiu");
    } else {
        console.log("UPS! COŚ POSZŁO NIE TAK...")
    }
})

