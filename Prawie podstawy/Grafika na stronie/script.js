const img = document.querySelector(".img");
console.dir(img);
const obrazek = document.createElement('img');
obrazek.width = 200;
obrazek.height = 200;


img.addEventListener('mouseover', function () {
    this.src = "img-top.jpg";
    obrazek.src = this.src;
    document.querySelector('body').appendChild(obrazek);

});

img.addEventListener('mouseout', function () {
    this.src = "wietnam.jpg";
    obrazek.src = "img-top.jpg";
    document.querySelector('body').appendChild(obrazek);
});



