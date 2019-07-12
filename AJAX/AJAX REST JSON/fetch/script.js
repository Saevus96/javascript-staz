const btn = document.querySelector("button");

btn.addEventListener("click", function () {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(resp => resp.json())
                .then(resp => {

                    console.log(resp);

                    resp.forEach(element => {
                        console.groupCollapsed(`Użytkownik ${element.id}`);
                        console.log(`Nazwa usera ${element.name}`);
                        console.log(`Użytkownik ${element.username}`);
                        console.groupEnd();
                    });

                });

            const ob = {
                title: "Nazwa posta",
                body: "Lorem ipsum",
                userId: 1
            }
            fetch("http://localhost:3000/users", {
                    method: "post",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify(ob)
                })
                .then(resp => resp.json())
                .then(resp => {
                    console.groupCollapsed("Dodano jsona");
                    console.log(resp);
                    console.groupEnd();
                });

            const formData = new FormData();
            formData.append("title", "Lorem ipsum");
            formData.append("body", "Lorem ipsum dolor sit amet consectetur...");
            formData.append("userId", 1);

            fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "post",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify(formData)
                }
                .then(res => res.json())
                .then(res => {
                    console.log("Dodałem użytkownika:");
                    console.log(res);
                })
            });