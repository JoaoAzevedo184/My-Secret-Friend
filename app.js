//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let listaDePresentes = [];
let listaDeAmigosSecretos = [];


function adicionarCombo(){
    let amigo = document.getElementById('amigo').value.trim();
    let presente = document.getElementById('presente').value.trim();
    let amigoSecreto = document.getElementById('amigo-secreto').value.trim();
    
    if (amigo === '' || presente === ''|| amigoSecreto === '') {
        alert('Por favor, preencha todos os campos antes de adicionar.');
        return;
    }

    if (verificarNomeRepetido(amigo)) {
        alert('Este nome já foi adicionado! Escolha outro.');
        return;
    } else if(verificarNomeRepetido(amigoSecreto)){
        alert('Esta pessoa já foi escolhida! Escolha outro.');
        return;
    }

    adicionarAmigo(amigo);
    adicionarPresente(presente);
    adicionarAmigoSecreto(amigoSecreto);
    atualizarLista();
    document.getElementById('amigo').value = '';
    document.getElementById('presente').value = '';
    document.getElementById('amigo-secreto').value = '';
}

function verificarNomeRepetido(nome) {
    if(listaDeAmigos.includes(nome)){
        return true;
    }else if(listaDeAmigosSecretos.includes(nome)){
        return true;
    }
    return false;
}

function adicionarAmigo(amigo){
    listaDeAmigos.push(amigo);
}
function adicionarAmigoSecreto(amigoSecreto){
    listaDeAmigosSecretos.push(amigoSecreto);
}
function adicionarPresente(presente){
    listaDePresentes.push(presente);
}

function indiceAleatorio(){
    let indexAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    return indexAleatorio
}

function escolherAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }

    let indiceSorteado = indiceAleatorio();
    let amigoSorteado = listaDeAmigosSecretos[indiceSorteado];
    let presenteSorteado = listaDePresentes[indiceSorteado];
    let pessoaQuePresenteou = listaDeAmigos[indiceSorteado];

    let resultadoHTML = `<h2>Amigo Secreto Sorteado:</h2>
                         <p><strong>${amigoSorteado}</strong> ganhou <strong>${presenteSorteado}</strong> de <strong>${pessoaQuePresenteou}</strong>!</p>`;

    document.getElementById("resultado").innerHTML = resultadoHTML;
}

function atualizarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = `${listaDeAmigos[i]} - ${listaDePresentes[i]}`;
        listaHTML.appendChild(item);
    }
}
