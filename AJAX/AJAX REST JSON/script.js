const ob = {
    name: "Konrad",
    surname: "Chlewski"
}

const ob2 = {
    name: "Piotr",
    surname: "Nowak",
    car: {
        brand: "Fiat",
        color: "red"
    }
}
//zamian obiektu na tekst
const obStr = JSON.stringify(ob);
//console.log(obStr);

//zamiana tekstu na obiekt
console.log(JSON.parse(obStr));

const element = document.querySelector(".test");

//przyklad z dataset 
element.dataset.info = ob2;
console.log(element.dataset.info);
element.dataset.info = JSON.stringify(ob2); //nie zrobiliśmy konwersji
console.log(JSON.parse(element.dataset.info));

//pobieranie z mojego serwera lokalnego
fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })

//pobieranie XMLHttpRequest
let xhr = new XMLHttpRequest();
console.log(xhr);
const body = document.querySelector("body");
function insertPosts(user) {
    user.forEach(element => {   

        const el = document.createElement("div");
        el.id = "myDiv";
        el.innerText = element.id+ ' '+ element.title;
        el.setAttribute("title", "to jest jakiś tekst w dymku");
        

        console.groupCollapsed(element.id + ' ' + element.title);
        console.log(element);
        console.groupEnd();
        body.appendChild(el);
    });
}
//pobieranie danych za pomoca XMLHttpRequest
document.querySelector("#button").addEventListener('click', function () {
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    console.log(xhr.response);

    xhr.addEventListener('load', function () {
        console.log("Wynik połaczenia: ");
        console.log(this);
    })
    xhr.addEventListener('readystatechange', function () {

        if (this.readyState === 4 && this.status === 200) {
            console.groupCollapsed("Treść odpowiedzi");
            console.log(this.responseText);
            console.groupEnd();
            const json = JSON.parse(this.responseText);
            console.log(json);
            insertPosts(json);
        }
    })
   xhr.send();
});