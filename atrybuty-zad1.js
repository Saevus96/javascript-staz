document.addEventListener("DOMContentLoaded", function () {    
    const attr = document.querySelector(".list");
    const li = attr.querySelectorAll("li");

    for (const element of li) {
        let dataStatus = "";
        let color = "";

        if (element.dataset.status === "up") {
            dataStatus = "wzrost";
            color = "Limegreen";
        }
        if (element.dataset.status === "down") {
            dataStatus = "spadek";
            color = "orangered";
        }
        if (element.dataset.status === "no-change") {
            dataStatus = "bez zmian";
            color = "mediumuslateblue";
        }
        const status = element.querySelector(".status");
        status.style.background = color;
        status.innerHTML = dataStatus;
    }
})