const searchButton = document.querySelector(".search-button");
const frequentQuestions = document.querySelector(".frequent-questions");
const searchBar = document.querySelector(".search-input");
const chatArea = document.querySelector(".chat-area");
var possoPerguntar = true;

async function createChatElements(message) {
    if (message !== '' && possoPerguntar === true) {
        frequentQuestions.style.display = "none";
        chatArea.style.height = "auto";
        chatArea.style.marginBottom = "120px";
        chatArea.style.marginTop = "20px";

        chatArea.appendChild(createUserChat(message));
        searchBar.value = "";

        const div = document.createElement("div");
        div.className = "container-message-from-ia";

        div.style.height = '40px';
        div.style.justifyContent = 'center';

        const loadingElement = showLoading();
        div.appendChild(loadingElement)
        chatArea.appendChild(div);

        try {
            const resposta = await createResponse(message);
            chatArea.appendChild(resposta);
            window.scrollTo(0, document.body.scrollHeight);
            chatArea.removeChild(div);
        } catch (error) {
            console.error('Erro ao criar resposta:', error);
        }
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

async function createResponse(userQuestion) {
    const div = document.createElement("div");
    div.className = "container-message-from-ia";

    possoPerguntar = false;
    window.scrollTo(0, document.body.scrollHeight);

    const message = document.createElement('p');
    message.className = 'text-message';

    try {
        const result = await fetch('http://localhost:2200/response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ word: userQuestion }),
        });

        const text = await result.json();
        message.textContent = text.textResponse;
        div.style.justifyContent = 'left';
        message.style.margin = '40px';
    } catch (error) {
        message.textContent = "Ocorreu um erro inesperado, tente novamente mais tarde.";
        div.style.border = "1px solid red"
        div.style.backgroundColor = "rgb(69, 50, 65)"
        message.style.margin = '30px';
        message.style.textAlign = "center";
    } finally {
    }

    div.style.height = 'auto';
    div.appendChild(message);

    window.scrollTo(0, document.body.scrollHeight);
    possoPerguntar = true;

    return div;
}