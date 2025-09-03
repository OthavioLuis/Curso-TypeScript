"use strict";
let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');
let listaSalva = localStorage.getItem("@listagem");
let tarefas = listaSalva !== null ? JSON.parse(listaSalva) : [];
;
function listarTarefas() {
    listElement.innerHTML = '';
    tarefas.map(item => {
        let tarefaElement = document.createElement('li');
        let tarefaText = document.createTextNode(item);
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        let posicao = tarefas.indexOf(item);
        linkElement.setAttribute('onclick', `deletarTarefa(${posicao})`);
        linkElement.style.marginLeft = '10px';
        let linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        tarefaElement.appendChild(tarefaText);
        tarefaElement.appendChild(linkElement);
        listElement.appendChild(tarefaElement);
    });
}
listarTarefas();
function adicionarTarefa() {
    if (inputElement.value === '') {
        alert('Por favor, insira uma tarefa.');
        return false;
    }
    else {
        let tarefaDigitada = inputElement.value;
        tarefas.push(tarefaDigitada);
        inputElement.value = '';
        listarTarefas();
        salvarDados();
    }
}
buttonElement.onclick = adicionarTarefa;
function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);
    listarTarefas();
    salvarDados();
}
function salvarDados() {
    localStorage.setItem("@listagem", JSON.stringify(tarefas));
}
