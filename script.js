const  botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave(){
    const texto = document.querySelector("entrada-de-texto").value;
    const campoResultado = document.querySelector("#resulado-palavrachave");
    const palavra = texto.split(" ");

    campoResultado.textContent= palavra.join(", ")
}