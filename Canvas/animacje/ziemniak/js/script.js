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

function AnimatedObj(x, y, speed, image, framesCount, ctx) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.stepX = this.speed;
    this.stepY = this.speed;
    this.ctx = ctx
    this.image = image;

    this.frameNr = 1;
    this.framesCount = framesCount;
    this.frameWidth = this.image.width / this.framesCount;
    this.frameHeight = this.image.height;

    this.draw = function() {
        this.frameNr++;
        if (this.frameNr > this.framesCount) {
            this.frameNr = 1;
        }
        const frameXpos = (this.frameNr-1)*this.frameWidth;
        this.ctx.drawImage(this.image, frameXpos, 0, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth, this.frameHeight);
    }

    this.move = function() {
        this.x = this.x + this.stepX;
        this.y = this.y + this.stepY;
        this.draw();
    }
}

function drawAnim() {
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvasElem.width, canvasElem.height);

    for (let i=0; i<housesSmallCount; i++) {
        housesSmall[i][1] = housesSmall[i][1] - housesSmall[i][0];
        ctx.drawImage(houseS, housesSmall[i][1], 20);
        if (housesSmall[i][1] < -houseS.width) {
            housesSmall[i][1] = canvasElem.width;
            housesSmall[i][0] = 1 + Math.random();
        }
    }

    for (let j=0; j<housesBigCount; j++) {
        housesBig[j][1] = housesBig[j][1] - housesBig[j][0];
        ctx.drawImage(houseB, housesBig[j][1], 20);
        if (housesBig[j][1] < -houseB.width) {
            housesBig[j][1] = canvasElem.width;
            housesBig[j][0] = 2 + Math.random()
        }
    }

    fantomas.draw();

    if (Math.random() > 0.9) {
        ctx.drawImage(fire, 174, 43);
    }
}

const canvasElem = document.querySelector('#canvasFanthom')
const ctx = canvasElem.getContext('2d');

const houseB = new Image(66, 85);
houseB.src = '../assets/domB.png';

const houseS = new Image(60, 90);
houseS.src = '../assets/domD.png';

const fire = new Image(135, 41);
fire.src = "../assets/fire.png";

const fantom = new Image(240, 66);
fantom.src = '../assets/fantom.png';

const fantomas = new AnimatedObj(120, 35, 0, fantom, 3, ctx);

const housesBigCount = 3;
const housesSmallCount = 5;

const housesBig = [];
const housesSmall = [];

for (let i=0; i<housesBigCount; i++) {
    housesBig.push([2+Math.random() , Math.random()*canvasElem.width])
}

for (let i=0; i<housesSmallCount; i++) {
    housesSmall.push([1+Math.random() , Math.random()*canvasElem.width])
}

fantom.addEventListener('load', function(){
    const animLoop = new FpsCtrl(24, drawAnim);
    animLoop.start();
});