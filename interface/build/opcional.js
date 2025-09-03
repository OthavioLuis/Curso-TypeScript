"use strict";
const usuario = {
    // Não precisamos fornecer o campo nome, pois ele é opcional
    email: "Teste@gmail.com",
    status: true
};
// console.log(usuario);
function novoUser(usuario) {
    console.log(usuario.nome);
}
novoUser({ nome: "João", email: "ana@gmail.com", status: true });
