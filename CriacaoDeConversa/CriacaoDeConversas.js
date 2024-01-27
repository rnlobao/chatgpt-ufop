const searchButton = document.querySelector(".search-button");
const frequentQuestions = document.querySelector(".frequent-questions");
const searchBar = document.querySelector(".search-input");
const searchContainer = document.querySelector(".search-container");
const chatArea = document.querySelector(".chat-area");
const promptArea = document.querySelector('#prompt-area');
const promptInitialHeight = promptArea.clientHeight;
let possoPerguntar = true;

searchBar.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});

async function createChatElements(message) {
    if (message !== '' && possoPerguntar === true) {
        promptArea.style.height = promptInitialHeight + "px";

        if (window.matchMedia("(max-width: 767px)").matches) {
            let heightDoInputComMargin = searchContainer.clientHeight + 15;
            let heightPrevista = heightDoInputComMargin + "px";
            chatArea.style.marginBottom = heightPrevista;
        } else {
            chatArea.style.marginBottom = "120px";
        }

        chatArea.style.height = "auto";
        frequentQuestions.style.display = "none";
        chatArea.style.marginTop = "20px";

        chatArea.appendChild(createUserChat(message));
        searchBar.value = "";

        const div = document.createElement("div");
        div.className = "container-message-from-ia";

        div.style.height = '40px';
        div.style.justifyContent = 'center';

        const loadingElement = showLoading();
        div.appendChild(loadingElement);
        chatArea.appendChild(div);

        chatArea.appendChild(createResponse(message));
        window.scrollTo(0, document.body.scrollHeight);
        chatArea.removeChild(div);
    }
}

async function createChatElementsWithKey(event) {
    if (event.key == 'Enter' && searchBar.value !== '') {
        await createChatElements(searchBar.value);
    }
}

document.addEventListener('keyup', async function(event) {
    await createChatElementsWithKey(event);
});

searchButton.addEventListener("click", async function() {
    await createChatElements(searchBar.value);
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

function createResponse(userQuestion) {
    const div = document.createElement("div");
    div.className = "container-message-from-ia";

    possoPerguntar = false;
    window.scrollTo(0, document.body.scrollHeight);

    setTimeout(() => {
        const message = document.createElement('p');
        message.className = 'text-message';
        message.textContent = exemploDeResposta[Math.floor(Math.random() * exemploDeResposta.length)];
        message.style.margin = '40px';
        div.style.height = 'auto';
        div.style.justifyContent = 'left';

        div.appendChild(message);

        window.scrollTo(0, document.body.scrollHeight);
    }, 2000);

    div.style.height = 'auto';
    div.appendChild(message);

    window.scrollTo(0, document.body.scrollHeight);
    possoPerguntar = true;

    return div;
}