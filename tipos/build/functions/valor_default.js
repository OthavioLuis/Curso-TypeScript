"use strict";
function cadastro(email, senha, nome) {
    let data = { email, senha, nome };
    console.log('Cadastro realizado com sucesso:', data);
}
function cadastroComPadrao(email, senha, nome = 'Usuário Padrão') {
    let data = { email, senha, nome };
    console.log('Cadastro realizado com sucesso:', data);
}
cadastroComPadrao('teste@gmail.com', 'senha456');
