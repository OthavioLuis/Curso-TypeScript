"use strict";
// let loja: object
const BurguerK = {
    nome: "Burguer K",
    endereco: "Rua A, 123",
    status: true
};
// console.log(BurguerK);
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço: ${endereco}`);
    console.log(`Status: ${status}`);
}
novaLoja({ nome: "Subway", endereco: "Rua B, 456", status: false });
