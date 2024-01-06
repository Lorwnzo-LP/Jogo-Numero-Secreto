// Jogo do Número Secreto
let listaNumerosSorteados = [];
let tentativas = 1;
let numeroLimite = 50;

exibirMensagemComeço()

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = (texto);
}

function exibirMensagemComeço(){
    exibirTextoNaTela("h1","Bem vindo ao jogo do número secreto!");
    exibirTextoNaTela("p",`Escreva um número de 1 a 50:`);
}

let numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if (quantidadeElementosLista == numeroLimite){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function verificarChute(){
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);
    if(numeroSecreto == chute){
        let quantidadeDeTentativas = tentativas >= 1 ? "tentativa" : "tentativas";
        exibirTextoNaTela("h1",`Acertou, Você descobriu o número secreto em ${tentativas} ${quantidadeDeTentativas}!!`)
        exibirTextoNaTela("p"," ")
        document.getElementById("reiniciar").removeAttribute("disabled")
    }else{
        if(chute >= numeroSecreto){
            exibirTextoNaTela("p","O número secreto é menor:");
        }else{
            exibirTextoNaTela("p","O número secreto é maior");
        }
        }
    limparCampo();
    tentativas ++;
    if (tentativas == 10){
        exibirTextoNaTela("h1","infelizmente suas tentativas acabaram");
    }
}

function limparCampo(){
    let chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo (){
    limparCampo();
    exibirMensagemComeço();
    tentativas = 1
    numeroSecreto = gerarNumeroAleatorio()
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
