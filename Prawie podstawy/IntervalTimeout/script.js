let mojaFunkcja = function () {
    console.log("Jakis tekst");
}
setTimeout(mojaFunkcja, 1200);

console.log('Pierwszy tekst');
console.log('Drugi tekst');

const btn = document.querySelector('button');

btn.addEventListener('click' ,function(){
    this.disabled = true;
    let i = 0;

    const time = setInterval(function(){

        console.log(i);
        i++;

        if(i>=5){
            this.disabled = false;
            console.log( "uruchamiam button");
            clearInterval(time);
        }
    }.bind(this),1000)
})

let i = 0;
const time = setInterval(function () {
    i++;
    console.log("Po raz:   "+i);
    if(i>=5){

        clearInterval(time);
        console.log("I cyk koniec :) ");
    }
}, 1000);


