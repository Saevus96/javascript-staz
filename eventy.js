document.addEventListener("DOMContentLoaded", function () {
    const buttonTest = document.querySelector("#buttonTest");
    const buttonTestAdd = document.querySelector("#buttonTestAdd");
    const buttonTestRemove = document.querySelector("#buttonTestRemove");
    const buttonTestClick = document.querySelector("#buttonTestClick")

    buttonTestAdd.addEventListener("click", addTestEvent);
    buttonTestRemove.addEventListener("click", removeTestEvent);
    buttonTestClick.addEventListener("click", buttonTestOnClick);
    buttonTestAdd.addEventListener("mouseover", mouseOnButton);
    buttonTestAdd.addEventListener('mousedown', showMe);
    buttonTestAdd.addEventListener('mouseup', showMe);
    buttonTestAdd.addEventListener('click', showMe);
});
let i = 0;

const body = document.querySelector("body");

function showAlert() {
    alert("Do śmiechu!");
}

function addTestEvent() {
    buttonTest.innerText = "Mozna kliknac";
    buttonTest.addEventListener('click', showAlert);
}

function removeTestEvent() {
    buttonTest.innerText = "Nie można kliknać";
    buttonTest.removeEventListener('click', showAlert);
}

function buttonTestOnClick() {
    buttonTest.click();
}

function mouseOnButton() {

    console.log("ha tfu " + i);
    i++;
}
// zabawa z eventem` dziala gdy klawisz jest wcisniety
document.addEventListener("keydown", event => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        console.log("wcisnales" + String.fromCharCode(event.keyCode));
    }

});

//lepsza wersja zabawy dziala tylko pojedynczo

document.addEventListener('keyup', function (e) {
    console.log("Key: " + e.key);
});

function showMe() {
    console.log(this);
}

body.addEventListener('mousemove', function (e) {
    const x = e.pageX;
    const y = e.pageY;

    console.log(x, y);
});



const menu = document.querySelector('.menu-context');

function rightButton(e) {
    e.preventDefault();

    if (e.button === 2) {
        e.stopPropagation();
        menu.style.left = e.pageX + 10 + 'px';
        menu.style.top = e.pageY + 10 + 'px';
    }
}

document.querySelector('#blockRightBtn').addEventListener('mousedown', rightButton);