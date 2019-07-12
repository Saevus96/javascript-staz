const translateToEN = {
    wordsPL: ["Ala", "Ma", "Kota","Kot","ma","ale"],
    wordsEN: ["Have","Be","Like","Dreaming","Rich"],
    translate(word){
        if(this.wordsPL.indexOf(word)!= -1){
            return this.wordsEN[this.wordsPL.indexOf(word)];
        }else{
            return "nieznane słowo";
        }
    }
}

console.log(translateToEN.translate("Ma"));


const translateToPL = Object.assign({},translateToEN);

translateToPL['translate'] = function(word){
    if(this.wordsEN.indexOf(word)!= -1){
        return this.wordsPL[this.wordsEN.indexOf(word)];
    }else{
        return "unkown word";
    }
}

console.log(translateToPL.translate("Dreaming"));