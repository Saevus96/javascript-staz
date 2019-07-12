// ----------------------------------
// tutaj pisz skrypty
// ----------------------------------
// Powyżej znajdziesz listę. Pobierz ją pod zmienną, a następnie:
// a) Dodaj jej klasę .preety
// b) pierwszemu LI w tym ul dodaj klasę .first
// c) ostatniemu LI w tym ul dodaj klasę .last
// d) trzeciemu LI w tym ul ustaw klasę .active
// d) trzeciemu LI w tym ul ustaw za pomocą JS kolor tekstu na #ffffff
// e) każdemu linkowi w tym menu ustaw atrybut title="Przejdź na stronę ..." gdzie ... pobierzesz z środka linka
// f) za pomocą JS każdemu linkowi w tym ul ustaw atrybut href na #. Po co to robimy? Czy jest alternatywna metoda?

document.addEventListener("DOMContentLoad", function () {
    const list = document.querySelector(".listy");
    const li = list.querySelectorAll("li");

    list.classList.add("pretty");

    li[0].classList.add("first");
    li[li.length - 1].classList.add("last");
    li[2].classList.add("active");
    li[2].style.color = '#fff';

    const link = list.querySelectorAll("a");
    for(const element of link){
        element.setAttribute("title", "Przejdź na stronę "+ element.innerText);
        element.href = "#";
    }
});