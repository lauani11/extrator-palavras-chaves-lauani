const  botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChaves);

function mostraPalavrasChaves(){
    const texto = document.querySelector("entrada-de-texto").value;
    const campoResultado = document.querySelector("#resulado-palavrachave")
    const palavra = texto.split(" ");

    campoResultado.textContent= palavra.join(", ")
}