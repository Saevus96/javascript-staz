const currentDate = new Date();

console.log("HH:: "+currentDate.getHours() +" ::MM:: "+ currentDate.getMinutes());

const el = document.querySelector(".divek");

el.innerHTML = currentDate;

