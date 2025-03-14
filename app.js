let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do Número Secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";

//função para verificar se está funcionando
function verificarChute() {
  console.log(numeroSecreto);
}

//a escrita do código abaixo é reescrita do que está acima, uma boa prática de declarar funções com parâmetro e sem parâmetros
//mesma função de maneira que a escrita fique extensa e com repetições de declarações.

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do Número Secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : tentativa;
    let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativas);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "o número secreto é menor...");
    } else {
      exibirTextoNaTela("p", "o número secreto é maior...");
    }
    //tentativas = tentativas +1;
    tentativas++;
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
