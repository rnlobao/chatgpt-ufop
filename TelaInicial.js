document.addEventListener('DOMContentLoaded', function () {
    var subBtns = document.querySelectorAll('.sub-btn');

    subBtns.forEach(function (subBtn) {
        subBtn.addEventListener('click', function () {
            var subMenu = this.nextElementSibling;
            subMenu.style.display = subMenu.style.display === 'none' ? 'block' : 'none';

            var dropdown = this.querySelector('.dropdown');
            dropdown.classList.toggle('rotate');
        });
    });

    var menuBtn = document.querySelector('.menu-btn');
    var sideBar = document.querySelector('.side-bar');
    var closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener('click', function () {
        sideBar.classList.add('active');
        menuBtn.style.visibility = 'hidden';
    });

    closeBtn.addEventListener('click', function () {
        sideBar.classList.remove('active');
        menuBtn.style.visibility = 'visible';
    });
});
