function clickOnDiv() {
    console.log("Kliknięto na div");
}
const div = document.querySelector("div");
const bp = "(min-width: 500px)";
const media = matchMedia(bp);
if (media.matches) {
    div.addEventListener("click", clickOnDiv);
    div.style.background = "red";
} else {
    div.removeEventListener("click", clickOnDiv); 
    div.style.background = "blue";
}