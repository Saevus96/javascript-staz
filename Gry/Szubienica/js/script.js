const game = {
    currentSentence: null,
    currentSentenceLetters: null,
    attempts: 10,
    elemBoardElem: document.querySelector('.game-board'),
    elemSentence: document.querySelector('.game-sentence'),
    elemAttempts: document.querySelector('.game-attempts'),
    elemLetters: document.querySelector('.game-letters'),
    sentences: [
        "ALA MA KOTA",
        "RYBA",
        "SAD",
        "OKRUTNIK",
        "ARCANOID",
        "ABECADŁO",
        "BATMAN",
        "KOBITKA",
        "JAŁMUŻNA",
        "ELEGIA"
    ],

    generateLetterButtons: function () {
        const alphabet = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'q', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ź', 'ż'];
        alphabet.forEach(function (letter) {
            const button = document.createElement('button');
            button.classList.add('game-letter');
            button.type = 'button';
            button.dataset.letter = letter;
            button.innerText = letter;
            this.elemLetters.appendChild(button);
        }.bind(this))

    },
    initBoard: function () {
        this.generateLetterButtons();
        this.disabledLetters();
    },
    bindEvents: function () {
        this.elemLetters.addEventListener('click', function (e) {
            if (e.target.nodeName.toUpperCase() === "BUTTON" &&
                e.target.classList.contains('game-letter')) {
                const letter = e.target.dataset.letter;
                this.checkLettersInSentention(letter.toUpperCase());
                console.log(letter);
                e.target.disabled = true;
            }
        }.bind(this));
    },
    startGame: function () {
        this.attempts = 10;
        this.randomSentence();
        this.showAttempts();
        this.enableLetters();
    },
    enableLetters: function () {
        const letters = this.elemLetters.querySelectorAll('.game-letter');
        [].forEach.call(letters, function (letter) {
            letter.disabled = false;
        });
    },
    disabledLetters: function () {
        const letters = this.elemLetters.querySelectorAll('.game-letter');
        [].forEach.call(letters, function (letter) {
            letter.disabled = true;
        });
    },
    showAttempts: function () {
        this.elemAttempts.innerHTML = this.attempts;
    },
    randomSentence: function () {
        const max = this.sentences.length - 1;
        const min = 0;
        const rand = Math.floor(Math.random() * (max - min + 1) + min);

        this.currentSentence = this.sentences[rand].toUpperCase();
        this.currentSentenceLetters = this.currentSentence.replace(/ /g, '');
        this.elemSentence.innerHTML = '';
        const letters = this.currentSentence.split('');
        for (let i = 0; i < letters.length; i++) {
            const div = document.createElement('div');
            div.classList.add('game-sentence-box');
            if (letters[i] === ' ') {
                div.classList.add('game-sentence-box-space');
            }
            this.elemSentence.appendChild(div);
        }
    },
    isLetterExists: function () {
        return this.currentSentenceLetters.length;
    },
    gameComplete: function () {
        alert('brawo wygrana');
        this.disableLetters();
    },
    gameOver: function () {
        alert("Niestety nie udało ci się odgadnąć hasła. Ps: brzmi ono: \n\n" + this.currentSentence);
        this.disableLetters();
    },
    checkLettersInSentention: function (letter) {
        if (this.currentSentence.indexOf(letter) !== -1) {
            for (let i = 0; i < this.currentSentence.length; i++) {
                if (this.currentSentence[i] === letter) {
                    this.elemSentence.querySelectorAll(".game-sentence-box")[i].innerHTML = letter;
                }
            }
        }
        this.currentSentenceLetters = this.currentSentenceLetters.replace(new RegExp(letter, 'g'), '');
        if (!this.isLetterExists()) {
            this.gameComplete();
        } else {
            this.attempts--;
            this.showAttempts();

            if (this.attempts <= 0) {
                this.gameOver();
            }
        }
    }
}


game.initBoard();
game.bindEvents();
document.querySelector('.game-start').addEventListener('click', function () {
    game.startGame();
});