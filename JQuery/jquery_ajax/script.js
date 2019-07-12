const apiUrl = "https://jsonplaceholder.typicode.com";

const $list = $('.user-list');
//pobieranie danych
$('.test-ajax').on('click', function () {
    const $btn = $(this);

    $btn.addClass('loading');
    $btn.prop('disabled', true);

    $.ajax({
            url: apiUrl + '/users',
            dataType: 'json'
        })
        .done(res => {
            $list.empty();
            res.forEach(element => {
                $list.append(`<li>${element.name} : ${element.email}</li>`);
            });
        })
        .always(() => {
            $btn.removeClass('loading');
            $btn.prop('disabled', false);
        });
})

//wysylanie danych
const $form = $(".form");
const $inputTitle = $('#inpTitle');
const $inputBody = $('#inpBody');
const $submitBtn = $form.find(":submit");

$form.on("submit", function (e) {
    e.preventDefault();

    $submitBtn.addClass('loading');
    $submitBtn.prop('disabled', true);

    $.ajax({
        url: 'http://localhost:3000/users',
        method: 'POST',
        dataType: 'json',
        data: {
            userId: 1,
            title: $inputTitle.val(),
            body: $inputBody.val()
        }
    }).done(res => {
        console.log("Użytkownik dodany do bazy ", res);
    }).always(() => {
        $submitBtn.removeClass('loading');
        $submitBtn.prop('disabled', false);
    });
});

const $links = $('.tabs a');
$links.on("click", function(e) {
    e.preventDefault();
    //pobieram dokąd prowadzi link
    const href = $(this).attr('href');

    //wyłączam innym tabom klasę .tabs-el-active
    $(this).parent().siblings().removeClass('tabs-el-active');
    //i dodaję klikniętemu
    $(this).parent().addClass('tabs-el-active');

    //wczytuję treść
    $('.tabs-content').load(href + ' #content', function() {
        console.log("Wczytano treść");
    });
});
$links.eq(0).click(); //klikam na 1 link