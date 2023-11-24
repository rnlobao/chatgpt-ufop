const searchButton = document.querySelector(".search-button");
const frequentQuestions = document.querySelector(".frequent-questions");
const searchBar = document.querySelector(".search-input");
const chatArea = document.querySelector(".chat-area");

searchButton.addEventListener("click", function () {
    frequentQuestions.style.display = "none";
    chatArea.style.height = "auto";
    chatArea.style.marginBottom = "120px";
    chatArea.style.marginTop = "20px";

    chatArea.appendChild(createUserChat(searchBar.value));
    chatArea.appendChild(createResponse());
    searchBar.value = "";
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

const resposta = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus ante a tortor aliquam porta. Suspendisse dapibus, lorem non cursus tristique, ligula leo dictum sem, nec fermentum dolor arcu at mauris. Suspendisse potenti. Morbi ac ligula a erat mollis dignissim. Donec accumsan condimentum augue, sit amet dictum ligula aliquam a. Pellentesque orci tellus, hendrerit et ultrices eu, luctus sed ligula. Nullam nec massa odio. Phasellus viverra nisl velit, in semper erat fermentum ac. Nunc non sollicitudin ligula, eu efficitur felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus ante a tortor aliquam porta. Suspendisse dapibus, lorem non cursus tristique, ligula leo dictum sem, nec fermentum dolor arcu at mauris. Suspendisse potenti. Morbi ac ligula a erat mollis dignissim. Donec accumsan condimentum augue, sit amet dictum ligula aliquam a. Pellentesque orci tellus, hendrerit et ultrices eu, luctus sed ligula. Nullam nec massa odio. Phasellus viverra nisl velit, in semper erat fermentum ac. Nunc non sollicitudin ligula, eu efficitur felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus ante a tortor aliquam porta. Suspendisse dapibus, lorem non cursus tristique, ligula leo dictum sem, nec fermentum dolor arcu at mauris. Suspendisse potenti. Morbi ac ligula a erat mollis dignissim. Donec accumsan condimentum augue, sit amet dictum ligula aliquam a. Pellentesque orci tellus, hendrerit et ultrices eu, luctus sed ligula. Nullam nec massa odio. Phasellus viverra nisl velit, in semper erat fermentum ac. Nunc non sollicitudin ligula, eu efficitur felis.";

function createResponse() {
    const div = document.createElement("div");
    div.className = "container-message-from-ia";

    const message = document.createElement("p");
    message.className = "text-message"
    message.textContent = resposta;
    message.style.margin = "40px";

    div.appendChild(message)
    return div;
}
