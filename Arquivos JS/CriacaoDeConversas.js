const searchButton = document.querySelector(".search-button");
const frequentQuestions = document.querySelector(".frequent-questions");
const searchBar = document.querySelector(".search-input");
const chatArea = document.querySelector(".chat-area");

searchButton.addEventListener("click", function () {
    frequentQuestions.style.display = "none";
    chatArea.style.height = "calc(100vh - 120px)";
    chatArea.style.marginBottom = "10px";
    chatArea.style.marginTop = "10px";

    console.log(searchBar.value);
    chatArea.appendChild(createUserChat(searchBar.value))

    searchBar.value = "";
});

function createCircle() {
    const div = document.createElement("div");
    div.style.width = "32px";
    div.style.height = "32px";
    div.style.borderRadius = "50%";
    div.style.backgroundColor = "rgb(208, 208, 208)";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";


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

    div.appendChild(userImage);
    div.appendChild(message)
    return div;
}
