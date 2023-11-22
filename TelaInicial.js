const subBtns = document.querySelectorAll('.sub-btn');
const menuBtn = document.querySelector('.menu-btn');
const sideBar = document.querySelector('.side-bar');
const closeBtn = document.querySelector('.close-btn');
const searchButton = document.querySelector(".search-button");
const frequentQuestions = document.querySelector(".frequent-questions");
const searchBar = document.querySelector(".search-input");
const chatArea = document.querySelector(".chat-area");

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

searchButton.addEventListener("click", function () {
    frequentQuestions.style.display = "none";
    chatArea.style.height = "calc(100vh - 120px)";
    chatArea.style.marginBottom = "10px";
    chatArea.style.marginTop = "10px";
    
    chatArea.appendChild(createUserChat(searchBar.value))
    searchBar.value = "";
});

function createCircle() {
    const div = document.createElement("div");
    div.style.width = "32px";
    div.style.height = "32px";
    div.style.borderRadius = "50%";
    div.style.backgroundColor = "rgb(208, 208, 208)";

    const icon = document.createElement("i");
    icon.className = "fas fa-user";
    div.appendChild(icon);
    return div;
}

function createUserChat(messageFromUser) {
    const div = document.createElement("div");
    const userImage = createCircle();
    div.style.width = "100px";
    div.style.height = "40px";
    div.style.borderRadius = "16px";
    div.style.backgroundColor = "#5D676E";

    const message = document.createElement("p");
    message.style.color = "#FFF";
    message.style.fontFamily = "Poppins";
    message.style.fontSize = "16px";
    message.style.fontStyle = "normal";
    message.style.fontWeight = "400";
    message.style.lineHeight = "normal";
    message.textContent = messageFromUser;

    div.appendChild(createCircle);
    div.appendChild(message)
    return div;
}
