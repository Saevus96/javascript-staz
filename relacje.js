document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector('.module-list');
    const btn = list.querySelectorAll(':scope .module-btn');

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            console.log("clicked");
            const button = this;
            const module = button.parentElement.parentElement;
            const moduleBar = button.parentElement;
            const moduleBarText = button.previousElementSibling;
            const moduleContent = moduleBar.nextElementSibling;
            

            if (parseInt(module.dataset.show, 10) === 1) {
                moduleBarText.innerText = '(Niewidoczne)';
                moduleContent.classList.remove('show');
                module.dataset.show = 0;
                module.style.backgroundColor = 'red';
            } else {
                moduleBarText.innerText = '(Widoczne)';
                moduleContent.classList.add('show');
                module.dataset.show = 1;
                module.style.backgroundColor = 'white';
            }
        })
    }
});