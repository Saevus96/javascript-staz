$("#pierwszy").on('click', function () {
    $(this).animate({
        width: "300px",
        opacity: 0.9,
        fontSize: "3em",
        borderWidth: "10px"
    }, {
        duration: 1000, //czas animacji
        ease: 'linear', //typ animacji

    });
});
$('.module-toggle').on('click', function () {
    const $btn = $(this);

    $(this).prev().slideToggle(function () {
        //this tutaj wskazuje na element zwijany
        //sprawdzam czy tekst po zwinięciu/rozwinięciu jest widoczny
        if ($(this).is(':visible')) {
            $btn.text('Ukryj treść');
        } else {
            $btn.text('Pokaż treść');
        }
    });
})
const users = [{
    name: "Konrad",
    surname: "Chlewski"
}, {
    name: "Kamil",
    surname: "Kamilowski"
}]

const $userList = $("body");

$("#pierwszy").on('click', function () {
    users.forEach((user, i) => {
        const html = `<div class="user-cnt">
            <strong class="user-name-label">Nazwa użytkownika:</strong>
            <span class="user-name">${user.name} ${user.surname}</span>
        </div>`;

        const $cnt = $(html).hide();
        $userList.append($cnt);
        $cnt.delay(300 * i).slideDown();
    });
});
console.log("log");