const body = document.querySelector("body");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp);

        resp.forEach(user => {
            console.groupCollapsed(`Użytkownik ${user.id}`)
            console.log(`Nazwa: ${user.name}`);
            console.log(`Nazwa użytkownika: ${user.username}`);
            console.log(`Email: ${user.email}`);
            console.log(`Adres: ${user.address.city} ${user.address.street} ${user.address.zipcode}`);
            console.log(`WWW: ${user.website}`);
            console.groupEnd();
        })
    })
    

fetch("https://www.googleapis.com/books/v1/volumes?q=wiedźmin&maxResults=40")
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp);

        resp.items.forEach(book => {
            const div = document.createElement("div");
            div.style.marginBottom = "80px";
            
        
            div.id = "myDiv";

            const titleDiv = document.createElement("div");
            titleDiv.classList.add("title");
            titleDiv.innerText = `Tytuł: ${book.volumeInfo.title}`;
            div.appendChild(titleDiv);

            const authorDiv = document.createElement("div");
            authorDiv.classList.add("author");
            authorDiv.innerText = `author: ${book.volumeInfo.authors}`;
            div.appendChild(authorDiv);

            const pagesDiv = document.createElement("div");
            pagesDiv.classList.add("pages");
            pagesDiv.innerText = `ilość stron: ${book.volumeInfo.pageCount}`;
            div.appendChild(pagesDiv);

            const linkDiv = document.createElement("div");
            linkDiv.innerText = `Link: ${book.volumeInfo.infoLink}`;
            linkDiv.classList.add("link");
            div.appendChild(linkDiv);

            const pdfDiv = document.createElement("div");
            pdfDiv.classList.add("pdf");
            pdfDiv.innerText = `Czy pdf?: ${book.accessInfo.pdf.isAvailable}`;
            div.appendChild(pdfDiv);

            body.appendChild(div);
        })
    })