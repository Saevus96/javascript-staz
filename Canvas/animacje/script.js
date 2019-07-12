function SuperStar(x, y, speed, canvasElem, ctx) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.stepX = this.speed;
    this.stepY = this.speed;

    //grafika gwiazdki
    this.image = new Image(24,24); //obrazek ma wymiary 24,24
    this.image.src = 'star.png';

    //funkcja rysująca
    this.drawStar = function() {
        ctx.drawImage(this.image, this.x, this.y);
    }

    //funkcja poruszająca
    this.moved = function() {
        if (this.x<0 || this.x > canvasElem.width - 24) {
            this.stepX = -this.stepX;
        }
        if (this.y<0 || this.y > canvasElem.height - 24) {
            this.stepY = -this.stepY;
        }
        this.x = this.x + this.stepX;
        this.y = this.y + this.stepY;

        this.drawStar();
    }
}

function draw() {
    ctx.fillStyle = "#CFEAFD";
    ctx.fillRect(0, 0, canvasElem.width, canvasElem.height);
    for (let i=0; i<stars.length; i++) {
        stars[i].moved();
    }
}

function FpsCtrl(fps, cb) {
    const delay = 1000 / fps;
    let time = null;
    let frame = -1;
    let req;
    let isPlaying = false;

    function loop(timestamp) {
        if (time === null) {
            time = timestamp;
        }
        let seg = Math.floor((timestamp - time) / delay);
        if (seg > frame) {
            frame = seg;

            cb({
                time: timestamp,
                frame: frame
            })
        }
        req = requestAnimationFrame(loop)
    }

    this.start = function() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            req = requestAnimationFrame(loop);
        }
    };

    this.pause = function() {
        if (this.isPlaying) {
            cancelAnimationFrame(req);
            this.isPlaying = false;
            time = null;
            frame = -1;
        }
    };
}

function draw() {
    ctx.fillStyle = "#CFEAFD";
    ctx.fillRect(0, 0, canvasElem.width, canvasElem.height);
    for (let i=0; i<stars.length; i++) {
        stars[i].moved();
    }
}

const canvasElem = document.querySelector('#canvas');
const ctx = canvasElem.getContext('2d');

const starsCount = 500; //liczba gwiazdek do animowania
const stars = []; //tablica przechowująca obiekty gwiazdki

//tworzymy nowe obiekty gwiazdki i wrzucamy je do tablicy
for (let i=0; i<starsCount; i++) {
    const x = 20 + Math.random()*160;
    const y = 20 + Math.random() * 60;
    const speed = Math.round(1 + Math.random()*2);

    const star = new SuperStar(x, y, speed, canvasElem, ctx);
    stars.push(star);
}
const animLoop = new FpsCtrl(60, draw);
animLoop.start();
