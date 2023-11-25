const searchButton = document.querySelector(".search-button");
const frequentQuestions = document.querySelector(".frequent-questions");
const searchBar = document.querySelector(".search-input");
const chatArea = document.querySelector(".chat-area");

function createChatElements() {
    if (searchBar.value !== '') {
        frequentQuestions.style.display = "none";
        chatArea.style.height = "auto";
        chatArea.style.marginBottom = "120px";
        chatArea.style.marginTop = "20px";

        chatArea.appendChild(createUserChat(searchBar.value));
        chatArea.appendChild(createResponse());
        searchBar.value = "";
    }
}

function createChatElementsWithKey(event) {
    if (event.key == 'Enter' && searchBar.value !== '') {
        createChatElements();
    }
}

document.addEventListener('keyup', createChatElementsWithKey);
searchButton.addEventListener("click", createChatElements);

function createCircle() {
    const div = document.createElement("div");
    div.className = "user-picture";

    const icon = document.createElement("i");
    icon.className = "fas fa-user";

    div.appendChild(icon);
    return div;
}

function createUserChat(messageFromUser) {
    const div = document.createElement("div");
    div.className = "container-message-from-user";

    const userImage = createCircle();

    const message = document.createElement("p");
    message.className = "text-message"
    message.textContent = messageFromUser;

    div.appendChild(userImage);
    div.appendChild(message)
    return div;
}

function createResponse() {
    const div = document.createElement("div");
    div.className = "container-message-from-ia";

    const loadingElement = showLoading();
    div.appendChild(loadingElement);
    div.style.height = '40px';
    div.style.justifyContent = 'center';

    window.scrollTo(0, document.body.scrollHeight);
    setTimeout(() => {
        const message = document.createElement('p');
        message.className = 'text-message';
        message.textContent = exemploDeResposta[Math.floor(Math.random() * exemploDeResposta.length)];
        message.style.margin = '40px';
        div.style.height = 'auto';
        div.style.justifyContent = 'left';

        div.appendChild(message);

        div.removeChild(loadingElement);
        window.scrollTo(0, document.body.scrollHeight);
    }, 2000);
    return div;
}
