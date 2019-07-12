const ob = {
    favouriteColors: ['red', 'blue', 'green', 'grey', 'black'],
    bind(el) {
        el.addEventListener("click", () => {
            this.favouriteColors.forEach(el =>{
                const newDiv = document.createElement("div");
                const body = document.querySelector("body");
                newDiv.classList.add("newDiv");
                newDiv.style.border = "1px solid #333";
                newDiv.style.width = "100px";
                newDiv.style.height = "100px";
                newDiv.style.display = "inline-block";
                newDiv.style.backgroundColor = el;
                body.appendChild(newDiv);
            });
            const newDiv = document.createElement("div");
            const body = document.querySelector("body");
            newDiv.classList.add("newDiv");
            newDiv.style.border = "1px solid #333";
            newDiv.style.width = "100px";
            newDiv.style.height = "100px";
            newDiv.style.display = "inline-block";
            newDiv.style.backgroundColor = this.favouriteColors[Math.floor(Math.random() * (4 - 0 + 1) + 0)];
            body.appendChild(newDiv);
        });
    }
}

const btn = document.querySelector(".btn");
ob.bind(btn);