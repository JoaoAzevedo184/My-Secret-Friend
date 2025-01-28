//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let listaDePresentes = [];
let amigoSecreto = escolherAmigo();

function adicionarCombo(amigo,presente){
    let amigo = document.getElementById('amigo').value.trim();
    let presente = document.getElementById('presente').value.trim();
    
    if (amigo === '' || presente === '') {
        alert('Por favor, preencha todos os campos antes de adicionar.');
        return;
    }

    adicionarAmigo(amigo);
    adicionarPresente(presente);
    document.getElementById('amigo').value = '';
    document.getElementById('presente').value = '';
}

function adicionarAmigo(amigo){
    listaDeAmigos.push(amigo);
}

function adicionarPresente(presente){
    listaDePresentes.push(presente);
}

function indiceAleatorio(){
    let indexAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    return indexAleatorio
}

function escolherAmigo() {
    let valor = indiceAleatorio();
    let amigoSecreto = listaDeAmigos[valor];
    let presenteDoAmigo = listaDePresentes[valor];

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}
