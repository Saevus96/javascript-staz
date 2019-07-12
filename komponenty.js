document.addEventListener("DOMContentLoaded", function () {

    /*Wypisz w konsoli pierwszy (jeden) element o klasie .module
    Wypisz w konsoli kolekcję elementów o klasie .module
    Wypisz w konsoli ostatni element o klasie .module
    Wypisz w konsoli wszystkie li w liście o klasie .list
    Wypisz w konsoli środkowe li w liście o klasie .list
    Wypisz w konsoli wszystkie buttony typu button
    Wypisz w konsoli jeden button typu submit
    Wypisz w konsoli kolekcję wszystkich elementów w body*/
    element = document.querySelector('.module');
    console.log(element);
    element2 = document.querySelectorAll('.module');

    console.log(element2[element2.length - 1]);

    const li = document.querySelectorAll(".list li");
    console.log(li[li.length / 2]);
    console.log(li);

    console.log(document.querySelectorAll("button[type='button']"));
    console.log(document.querySelector("button[type='submit']"));
    console.log(document.querySelectorAll("body *"));

    //Atrybuty//

    const btn = document.querySelector('.button');
    btn.innerHTML = "<span>Nje klikajesz mjenja!</span>"

    btn.addEventListener('click', function () {
        console.log("klikniety!");
        let html = '';
        html += '<div>';
        html += '<div><strong>To jest tekst dynamiczny</strong></div>';
        html += '<button class="button">Klik!</button>'
        html += '   <button class="button">Inny klik!</button>';
        html += '<div>';
        document.querySelector('.test-cnt').innerHTML = html;
        console.log(btn.tagName);
    })


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
        const status = el.querySelector(".status");
        status.style.background = color;
        status.innerHTML = dataStatus;
    }
})