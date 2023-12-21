const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

function generateResponse(req, resp) {
    const word = req.body.word; // Faz alguma coisa com oq recebe
    console.log(`essa eh a palavra ${word}`);

    const exemploDeResposta = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus ante a tortor aliquam porta. Suspendisse dapibus, lorem non cursus tristique, ligula leo dictum sem, nec fermentum dolor arcu at mauris. Suspendisse potenti. Morbi ac ligula a erat mollis dignissim. Donec accumsan condimentum augue, sit amet dictum ligula aliquam a. Pellentesque orci tellus, hendrerit et ultrices eu, luctus sed ligula. Nullam nec massa odio. Phasellus viverra nisl velit, in semper erat fermentum ac. Nunc non sollicitudin ligula, eu efficitur felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus ante a tortor aliquam porta. Suspendisse dapibus, lorem non cursus tristique, ligula leo dictum sem, nec fermentum dolor arcu at mauris. Suspendisse potenti. Morbi ac ligula a erat mollis dignissim. Donec accumsan condimentum augue, sit amet dictum ligula aliquam a. Pellentesque orci tellus, hendrerit et ultrices eu, luctus sed ligula. Nullam nec massa odio. Phasellus viverra nisl velit, in semper erat fermentum ac. Nunc non sollicitudin ligula, eu efficitur felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus ante a tortor aliquam porta. Suspendisse dapibus, lorem non cursus tristique, ligula leo dictum sem, nec fermentum dolor arcu at mauris. Suspendisse potenti. Morbi ac ligula a erat mollis dignissim. Donec accumsan condimentum augue, sit amet dictum ligula aliquam a. Pellentesque orci tellus, hendrerit et ultrices eu, luctus sed ligula. Nullam nec massa odio. Phasellus viverra nisl velit, in semper erat fermentum ac. Nunc non sollicitudin ligula, eu efficitur felis.",
        "Phasellus condimentum luctus est, ac iaculis magna lacinia et. Nunc eu ullamcorper nisi. Suspendisse gravida ligula ut pellentesque porttitor.",
        "Pellentesque ut neque condimentum, finibus erat vitae, ullamcorper sem. Sed imperdiet rutrum diam. Ut sed faucibus dui.",
        "- Aenean finibus dignissim ante-dui sed velit tempus porta-sollicitudin at urna et",
    ]

    const randomResponse = exemploDeResposta[Math.floor(Math.random() * exemploDeResposta.length)];

    setTimeout(() => {
        const response = {
            textResponse: randomResponse,
        };

        resp.json(response);
    }, 4000);
}

app.post('/response', generateResponse);

app.listen(2200, () => {
    console.log("Server running");
})