/*Napisz konstruktor "HTMLInfo" który będzie miał 2 początkowe właściwości:
- selector - string podawany przy tworzeniu instancji. Oznacza selektor użyty do pobrania elementów np. ".btn"
- elements - pseudo tablica elementów pobranych ze strony przy wykorzystaniu powyższego selektora
np. document.querySelectorAll(this.selector)
Załóżmy, że zawsze pobieramy wiele elementów - nawet jak wiemy, że będzie tylko jeden.

Niech konstruktor ma dodatkowe wspólne dla wszystkich instancji metody:
- showElements() - wypisuje w konsoli wszystkie elementy "elements"
- showTags() - wypisuje w konsoli tagi elementów "elements"
- showCount() - wypisuje liczbę elementów "elements"
- showClass() - wypisuje klasy wszystkich elementów "elements"
- showHtml() - wypisuje html z wszystkich elementów "elements"
- showData() - wypisuje wszystkie atrybuty data- z wszystkich elementów "elements"*/


function HTMLInfo(selector) {
    this.selector = selector;    
    this.elements = document.querySelectorAll(this.selector);

    
}

HTMLInfo.prototype.showElements = function () {
    for (const el of this.elements) {
        console.log(el);
    }
}

HTMLInfo.prototype.showTags = function () {    
    for(const el of this.elements){
        console.log(el.tagName);
    }

}

HTMLInfo.prototype.showCount = function () {
    console.log(this.elements.length);
}
HTMLInfo.prototype.showClass = function () {
    for(const el of this.elements){
        console.log(el.className);
    }
}
HTMLInfo.prototype.showHtml = function () {
    for(const el of this.elements){
        console.log(el.innerHTML);
    }
}
HTMLInfo.prototype.showData = function () {
    for(const el of this.elements){
        console.log(el.dataset);
    }
}

const first = new HTMLInfo(".list");

first.showElements();
first.showCount();
first.showTags();
first.showClass();
first.showData();