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