const primeiraPF = document.querySelector("#fq1");
const segundaPF = document.querySelector("#fq2");
const terceiraPF = document.querySelector("#fq3");

primeiraPF.addEventListener('click', acaoDePerguntaFrequente);
segundaPF.addEventListener('click', acaoDePerguntaFrequente);
terceiraPF.addEventListener('click', acaoDePerguntaFrequente);

function acaoDePerguntaFrequente(pf) {
    const p = pf.currentTarget.querySelector("p");
    var textoDaDiv = p.textContent;
    createChatElements(textoDaDiv);
}
