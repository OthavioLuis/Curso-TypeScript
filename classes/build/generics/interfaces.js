"use strict";
// type NovoProduto<V extends number | string> = {
//   nome: string;
//   preco: V;
// }
const arroz = {
    nome: "Arroz Branco",
    preco: 36,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString('pt-BR', {
            style: "currency",
            currency: "BRL"
        });
        return valorFormatado;
    }
};
console.log(arroz);
console.log(arroz.formatar(15203));
