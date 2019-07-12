let i = 0;
const inter = setInterval(function () {
    console.log(i)
    i++;
    if (i > 20) {
        clearInterval(inter);
    }
}, 1000 / 5);


const div = document.querySelector("div");

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

let min = 20;
let max = 90;

const styler = setInterval(function () {
    div.style.background = randomColor();
    div.style.width = Math.floor(Math.random() * (max - min + 1) + min) + "px";
    div.style.height = Math.floor(Math.random() * (max - min + 1) + min) + "px";
}, 1000);


const btn = document.querySelector("button");

const button = document.querySelector("button");
button.addEventListener("click", function () {
    if (!this.classList.contains("active")) {
        this.disabled = true;
        this.classList.add("active");
        const div = document.createElement("div");
        div.innerText = "Kliknięto przycisk";
        this.parentNode.insertBefore(div, this.nextSibling);
        setTimeout(function () {
            div.remove();
            this.classList.remove("active");
            this.disabled = false;
        }.bind(this), 2000);
    }
});

const checkboxy = document.querySelectorAll("input");

let j = 0;
const inter2 = setInterval(function () {

    checkboxy[j].checked = true;
    j++;

    if (j >= checkboxy.length) {
        console.log("wyzeruj");
        for (let i = 0; i < checkboxy.length; i++) {
            checkboxy[i].checked = false;
        }
        j = 0;
    }
}, 1000 / 10);