/*const canvasElement = document.getElementById('can');
const ctx = canvasElement.getContext('2d');*/

/*ctx.fillRect(25, 25, 100, 100);
ctx.clearRect(45, 45, 50, 50);

ctx.font = "italic bold 30px Arial";
ctx.textBaseline = "middle";
ctx.fillText('Ala ma kota', 0, 200);

ctx.font = "italic bold 20px Arial";
ctx.textBaseline = "bottom";
ctx.strokeText('Ala ma kota', 30, 250);

ctx.font = "normal 10px Arial";
ctx.textBaseline = "top";
ctx.strokeText('Ala ma kota', 130, 300);*/

/*ctx.beginPath();
ctx.moveTo(35, 10);
ctx.lineTo(60, 40);
ctx.lineTo(10, 40);
ctx.lineTo(35, 10);
ctx.stroke();
ctx.fillText('a', 30, 60);
ctx.fillText('c', 64, 30);
ctx.fillText('b', 10, 25);*/

/*const canvasElem = document.getElementById('can');
const data = [30,30,40,100,30,20,50,10,5,7,3,15,20,60,28,15,10,20,10,70];
const stepSize = parseInt(400 / data.length);
const ctx = canvasElem.getContext('2d');

ctx.beginPath();
//górne ramie
ctx.moveTo(0, 150-data[0]);
ctx.fillText(data[0], 0, 150-data[0]-10);
let bottomI = 0;

for (let i=1; i<data.length; i++) {
    ctx.lineTo(i*stepSize, 150-data[i]);
    ctx.fillText(data[i], i*stepSize, 150-data[i]-10);
    bottomI = i;
}

//zamykamy kształt od dołu
ctx.lineTo(bottomI*stepSize, 150);
ctx.lineTo(0, 150);
ctx.closePath();

//obrysowujemy
ctx.fill();*/


// function radianAngle(angle) {
//     return radians = (Math.PI / 180) * angle;
// }

// const canvasElem = document.getElementById('can');
// const ctx = canvasElem.getContext('2d');
// for (let i = 0; i < 4; i++) {
//     ctx.beginPath();
//     ctx.arc(300, 200, 60 + (i * 10), radianAngle(180), radianAngle(0), false);
//     ctx.stroke();
// }


// function roundedRect(canvas, x, y, width, height, radius) {
//     ctx.beginPath();
//     ctx.moveTo(x, y + radius);
//     ctx.lineTo(x, y + height - radius);
//     ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
//     ctx.lineTo(x + width - radius, y + height);
//     ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
//     ctx.lineTo(x + width, y + radius);
//     ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
//     ctx.lineTo(x + radius, y);
//     ctx.quadraticCurveTo(x, y, x, y + radius);
//     ctx.stroke();
// }

// const canvasElem = document.getElementById('can');
// const ctx = canvasElem.getContext('2d');
// roundedRect(ctx, 10, 10, 130, 130, 20);

/*function roundedRect(canvas, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.stroke();
}*/

/*const canvasElem = document.getElementById('can');
const ctx = canvasElem.getContext('2d');
roundedRect(ctx, 10, 10, 130, 130, 20);*/



// const canvasElem = document.querySelector('#can');
// const ctx = canvasElem.getContext('2d');
// const grad = ctx.createLinearGradient(0, 0, 100, 50);

// grad.addColorStop(0, '#00ABEB');
// grad.addColorStop(0.5, '#fff');
// grad.addColorStop(1, '#D14F2E');
// ctx.fillStyle = grad;
// ctx.fillRect(10, 10, 180, 80);

/*const canvasElem = document.querySelector('#can')
const ctx = canvasElem.getContext('2d');*/

/*ctx.fillRect(0,0,150,150);
ctx.save(); //Zapisuje domyślny stan

ctx.fillStyle = '#09F'; //Robimy zmiany w ustawieniach
ctx.fillRect(15,15,120,120);

ctx.save(); //Zapisuje aktualny stan
ctx.fillStyle = '#FFF'
ctx.globalAlpha = 0.5;
ctx.fillRect(30,30,90,90);

ctx.restore(); //Przywraca poprzedni stan (zapisany w linijce 9)
ctx.fillRect(45,45,60,60);

ctx.restore(); //Przywraca domyślny stan (zapisany w linijce 4)
ctx.fillRect(60,60,30,30);*/

// const image = new Image();
// image.addEventListener('load', function () {
//     ctx.drawImage(image,0,0,262,256);
//     //tworzymy na grafice tekst "Fanthomas"
//     ctx.font = "italic bold 30px Arial";
//     ctx.textBaseline = "middle";
//     ctx.textAlign = "center";
//     ctx.fillStyle = "#4F3A73";
//     ctx.strokeStyle = "#fff";
//     ctx.lineWidth = 1;
//     ctx.fillText('audiola', 262/2, 256-20);
//     ctx.strokeText('audiola', 262/2, 256-20);

// });

// image.src = 'audi.jpg';

// const canvasElem = document.querySelector('#can')
// const ctx = canvasElem.getContext('2d');

/*
const img = new Image();

img.addEventListener('load', function() {
    //ctx.drawImage(img,0,0,262,256);
    //[1,2,5,6]
    ctx.drawImage(img, 300, 300, 100, 100,        0, 0, 100, 100);
    //[3,4,7,8]
    ctx.drawImage(img, 200, 0, 200, 200,      165, 0, 160, 160);
    //[9,10,13,14]
    ctx.drawImage(img, 0, 200, 200, 200,      330, 0, 160, 160);
    //[11,12,15,16]
    ctx.drawImage(img, 200, 200, 200, 200,    495, 0, 160, 160);
});
img.src = 'canvas-cut.jpg';*/

const canvasElem = document.querySelector('#can');
const ctx = canvasElem.getContext('2d');
const img = new Image();

img.addEventListener('load', function() {
    //rysujemy kwiatek na płótnie
    ctx.drawImage(img, 0, 0);

    //pobieramy dane z płótna
    const myImgData = ctx.getImageData(0, 0, canvasElem.width, canvasElem.height);

    //zmieniamy kolor listków kwiatka
    for (let i=0; i<myImgData.data.length; i+=4) {
        if (myImgData.data[i] === 0) {
            myImgData.data[i] = 105;
        }
        if (myImgData.data[i+1] === 255) {
            myImgData.data[i+1] = 5;
        }
        if (myImgData.data[i+2] === 0) {
            myImgData.data[i+2] = 100;
        }
        // i+3 to alpha koloru
    }

    //rysujemy na płótnie nasz zmieniony obraz
    //ctx.putImageData(myImgData, 220, 0);
});

img.src = 'canvas.png';