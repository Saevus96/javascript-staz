const button = document.querySelector(".button");

button.addEventListener('click', function () {
    this.style.backgroundColor = "#4BA2EA";
    this.style.fontSize = "1.6rem";
    this.style.borderRadius = "3rem";
    this.style.color = "#F7F781";
})

const button2 = document.querySelector(".module-button");

const textCnt = document.querySelector(".module-content");
const textCnt2 = button2.previousElementSibling;


button2.addEventListener("click", function () {
    const styleComputed = getComputedStyle(textCnt);
    if (styleComputed.display == "none"){
        textCnt.style.display = "block";
    }else{
        textCnt.style.display = "none";
    }
});