const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);
function mostraPalavrasChave() {
    const texto = document.querySelector("entrada-de-texto").value;
    const campoResultado = document.querySelector("#resulado-palavrachave");
    const palavra = processaTexto(texto);

    campoResultado.textContent = palavraschave.join(", ")
}

function processaTexto(texto) {
    let palavra = texto.split(/\P{L}+/u);
    return palavras;

}