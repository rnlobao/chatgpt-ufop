const searchButton = document.querySelector(".search-button");
const frequentQuestions = document.querySelector(".frequent-questions");
const searchBar = document.querySelector(".search-input");
const chatArea = document.querySelector(".chat-area");
var possoPerguntar = true;

function createChatElements(message) {
    if (message !== '' && possoPerguntar === true) {
        frequentQuestions.style.display = "none";
        chatArea.style.height = "auto";
        chatArea.style.marginBottom = "120px";
        chatArea.style.marginTop = "20px";

        chatArea.appendChild(createUserChat(message));
        chatArea.appendChild(createResponse());
        window.scrollTo(0, document.body.scrollHeight);
        searchBar.value = "";
    }
}

function createChatElementsWithKey(event) {
    if (event.key == 'Enter' && searchBar.value !== '') {
        createChatElements(searchBar.value);
    }
}

document.addEventListener('keyup', createChatElementsWithKey);
searchButton.addEventListener("click", function() {
    createChatElements(searchBar.value);
});

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

function createServerBadResponse(div) {
    div.style.border = ""
}

function createResponse() {
    const div = document.createElement("div");
    div.className = "container-message-from-ia";

    const loadingElement = showLoading();
    div.appendChild(loadingElement);
    div.style.height = '40px';
    div.style.justifyContent = 'center';

    possoPerguntar = false;
    window.scrollTo(0, document.body.scrollHeight);

    setTimeout(() => {
        const message = document.createElement('p');
        message.className = 'text-message';
        const respostaAleatorio = exemploDeResposta[Math.floor(Math.random() * exemploDeResposta.length)];

        if (respostaAleatorio === "Erro") {
            message.textContent = "Ocorreu um erro inesperado, tente novamente mais tarde.";
            div.style.border = "1px solid red"
            div.style.backgroundColor = "rgb(69, 50, 65)"
            message.style.margin = '30px';
            message.style.textAlign = "center";
        } else {
            message.textContent = respostaAleatorio;
            div.style.justifyContent = 'left';
            message.style.margin = '40px';
        }

        div.style.height = 'auto';
        div.appendChild(message);
        div.removeChild(loadingElement);
        window.scrollTo(0, document.body.scrollHeight);
        possoPerguntar = true;
    }, 1000);
    return div;
}
