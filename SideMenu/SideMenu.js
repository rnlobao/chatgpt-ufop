const subBtns = document.querySelectorAll('.sub-btn');
const menuBtn = document.querySelector('.menu-btn');
const sideBar = document.querySelector('.side-bar');
const closeBtn = document.querySelector('.close-btn');
const subItems = document.querySelectorAll('.sub-item');

subBtns.forEach(function (subBtn) {
    subBtn.addEventListener('click', function () {
        var subMenu = this.nextElementSibling;
        subMenu.style.display = subMenu.style.display === 'none' ? 'block' : 'none';

        var dropdown = this.querySelector('.dropdown');
        dropdown.classList.toggle('rotate');
    });
});

menuBtn.addEventListener('click', function () {
    sideBar.classList.add('active');
    menuBtn.style.visibility = 'hidden';
});

closeBtn.addEventListener('click', function () {
    sideBar.classList.remove('active');
    menuBtn.style.visibility = 'visible';
});

subItems.forEach((subItem) => {
    subItem.addEventListener('click', (event) => {
        window.scrollTo(0, document.body.scrollHeight);
        var textoDaDiv = subItem.textContent;
        createChatElements(textoDaDiv);
        window.scrollTo(0, document.body.scrollHeight);
    });
});

