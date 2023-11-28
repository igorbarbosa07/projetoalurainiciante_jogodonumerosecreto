//nesta primeira parte estamos adicionando conteúdos dentro das
//tagas do HTML, no HTML não é interessante que tenha mudanças de conteúdos, 
//estas mudanças podem ser feitas no JavaScript. 

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto:'

//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 a 10';

//Criando uma função
// Neste caso iremos adicionar a função no botão Chutar que está na linha 27 do HTML. 

//será mostrado uma forma de evitar a repetição de linhas de códigos como no código
//acima que só muda os texos e a seleção da tag. 

//utilizando uma função: 

//armazena o número secreto que foi gerado pela função gerarNum... e armazena na variável
//numeroSecreto, abaixo tem um return na função por ter declado ela antes do cálculo ser feito.

let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

//função para exibir conteúdos na tela pegando tags do HTML
//exibirTextoNaTela é o nome da função, tag é o primeiro parametro, texto é o segundo. 
//após, tem a opção de pegar o valor da tag no HTML e abaixo é a opção de atribuir um texto nesta
//tag selecionada. Por fim, chama a função com o nome da função, a tag do HTML e o atribuito de texto
// que vai ser adicionado na tag. 

/* Função criada para reiniciar o jogo quando clica no botão de novo jogo 
nesta função traz todas as outras para que as mesma funcionalidades sejam repetidas.*/

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo ();
    tentativas = 1;
    exibirMensagemInicial ();
    document.getElementById ('reiniciar').setAttribute('disabled', false);
    //este último atributo foi colocado para desativar o botão novo jogo quando ainda
    //não foi acertado o número secreto. 
}

/* Esta função tem a responsabilidade de trazer os testos na tela
para que não seja repetida linhas de código.
 */

function exibirTextoNaTela (tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak (texto, 'Brazilian Portuguese Female', {rate:1.2});

}

function exibirMensagemInicial () {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Digite um número entre 0 e 10');
}

exibirMensagemInicial ();

/*
Nesta função ao clicarmos no botão de chute, o campo input será limpo.
*/

function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

//atribuindo no botão do HTML a função de gerar um número secreto

function verificarChute () {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Incrível! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}. Parabéns`;
        exibirTextoNaTela ('p', `${mensagemTentativas}!`);
        

        /* ativamos o botão novo jogo quando conseguimos acertar o número secreto.
        */
        
        document.getElementById('reiniciar').removeAttribute('disabled');
        

    } else {
        if (chute < numeroSecreto) {

        exibirTextoNaTela ('h1', 'O número é maior!')   
        exibirTextoNaTela ('p','Tente novamente,');

        } else {

        exibirTextoNaTela ('h1', 'O número é menor!')
        exibirTextoNaTela ('p','Tente novamente...');

        }
    }

    tentativas++;

    /*
    Vamos agora criar uma função para que o campo onde colocamos o
    o número seja limpo.

    */

    limparCampo();

}




//é uma função para fazer o cálculo e gerar o número aleatório
//includes é para verificar se o número aleatório já está na lista
//este código foi reforçado para que o número sorteado não seja repetido.

function gerarNumeroAleatorio () {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosDaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeElementosDaLista == numeroLimite) {
        listaDeNumeroSorteados = [];
    }


   if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
   } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log (listaDeNumeroSorteados);
        return numeroEscolhido;
   }
}

