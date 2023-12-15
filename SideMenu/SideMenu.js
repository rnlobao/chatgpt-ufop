const menuBtn = document.querySelector('.menu-btn');
const sideBar = document.querySelector('.side-bar');
const closeBtn = document.querySelector('.close-btn');
const subItems = document.querySelectorAll('.sub-item');

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
        event.preventDefault();
        var textoDaDiv = subItem.textContent;
        createChatElements(textoDaDiv);
    });
});

