const image = new Image(400, 300);
image.src = "wietnam.jpg";
document.querySelector('body').appendChild(image);

image.addEventListener("click", function () {
    this.src = 'img-top.jpg';
});