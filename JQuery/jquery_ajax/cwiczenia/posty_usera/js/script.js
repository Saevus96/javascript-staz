const url = "https://jsonplaceholder.typicode.com";
const $list = $('.users-list');

function readData() {
    $.ajax({
            url: url + '/users',
            dataType: 'json'
        })
        .done(res => {
            console.log(res);
            res.forEach(user => {
                const $element = $(`<article class="user-cnt" data-id="${user.id}">
            <h2 class="user-name">${user.name}</h2>
            <div class="address">
                Phone: ${user.phone}<br>
                email: <a href="mailto: ${user.email}">${user.email}</a>
            </div>
            <button type="button" class="btn show-posts">Show posts</button>
            <div class="user-posts">
                <h2 class="user-posts-title">User posts:</h2>
                <div class="user-posts-list">
                </div>
            </div>
            </article> `);
                $list.append($element);
            });
        });
}


readData();

function togglePosts($btn) {
    const $cnt = $btn.closest('.user-cnt');
    const $postList = $cnt.find('.user-posts-list');
    const id = $cnt.attr('data-id');



    if (!$cnt.find('.user-posts').is(':visible')) {
        $btn.text('Hide posts');
        if (!$btn.data('loaded')) {
            $.ajax({
                    url: `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
                    method: 'get',
                    dataType: 'json'
                })
                .done(response => {
                    $postList.empty();
                    response.forEach(post => {
                        ;
                        const $post = $(`
                    <div class="post">
                        <h3 class="post-title">${post.title}</h3>
                        <div class="post-body">
                            ${post.body}
                        </div>
                    </div>
                `);
                        $postList.append($post);
                    });
                    $cnt.find('.user-posts').slideDown();
                });
        } else {
            $cnt.find('.user-posts').slideDown();
        }
    } else {
        $cnt.find('.user-posts').slideUp();
        $btn.text('Show posts');
    }
}
$list.on('click', '.show-posts', function () {
    togglePosts($(this));
    console.log("wyswietlam");
})