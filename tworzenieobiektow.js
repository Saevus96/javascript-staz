const button = document.querySelector(".button");
const button3 = document.querySelector(".button3");

let buttonStatus = 1;
let counter = 0;
//button creator
const buttonCreator = document.querySelector(".beforeTest");
buttonCreator.addEventListener("click", function () {
    insertBefore();
    removeParagraph();
});

button3.addEventListener("click", function(){
    removeFromDiv();
});
//uposledzony gradient 
button.addEventListener("click", function () {
    for (let i = 0; i < 9; i++) {
        const el = document.createElement("div");
        el.id = "myDiv";
        el.innerText = "Tekst w div " + i;
        el.setAttribute("title", "to jest jakiś tekst w dymku");
        el.classList.add("module");
        el.style.setProperty("background-color", "#3F" + i);

        const div = document.querySelector(".test-first"); //pobieramy miejsce docelowe
        div.appendChild(el); //wstawiamy element do drzewa dokumentu
    }

})

//dorzucanie kolejnych elementow przed button 
function insertBefore() {
    counter++;
    const strong = buttonCreator.firstElementChild; //pobieramy pierwsze dziecko p czyli element <strong>
    const newNode = document.createElement("button"); //tworzymy nowy nod z tekstem
    newNode.innerText = "Inny element " + counter;
    buttonCreator.insertBefore(newNode, strong);
}

//usuwanie z diva cwiczenie 

function removeFromDiv() {
    const div = document.querySelector(".div-test-remove")
    const span = div.querySelector("span");
    
    div.removeChild(span);
    
}

//usuwanie elementow ze strony
function removeParagraph() {

    const body = document.querySelector("body");
    const p = body.querySelector("#paragraf")
    const strong = p.querySelector("strong");

    //3 opcje 
    //usuniecie strong z paragrafu
    p.removeChild(strong);

    //usuniecie calego paragrafu
    // body.removeChild(p);
    /*
    strong.parentNode.removeChild(strong);
    strong.remove();
    */
}