//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {

    let campo = document.querySelector('input');
    let nome = campo.value.trim();
    
    if (nome === '') {
        alert('Por favor, insira seu nome.');
        return;
    } 

    amigos.push(nome);
    atualizarListaAmigos();
    
    limparCampo();
}

function atualizarListaAmigos() {

    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo, index) => {
        const lista = document.createElement('li');
        lista.textContent = amigo;
        lista.classList.add('name-item');
        listaAmigos.appendChild(lista);
    });
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert('Selecione ao menos um amigo.');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML= `<li>Amigo sorteado: ${amigoSorteado}</li>`;

    indiceAleatorio.forEach((amigo, index) => {
        const lista = document.createElement('li');
        const proximo = indiceAleatorio[(index + 1) % indiceAleatorio.length];
        lista.textContent = `${amigo} vai ao ${proximo}`;
        lista.classList.add('result-item');
        resultado.appendChild(li);
    });
}

function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

