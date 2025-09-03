"use strict";
// function mostraPromocao(preco: number): void {
//   console.log(`O preço promocional é: R$ ${preco}`);
// }
const novoCurso = {
    id: '1',
    nome: 'Curso de TypeScript',
    preco: 100,
    promocao: (preco) => {
        console.log(`O preço promocional é: R$ ${preco}`);
    }
};
let somaNumeros = (valor1, valor2) => {
    console.log(`A soma é: ${valor1 + valor2}`);
    return valor1 + valor2;
};
const resultado = somaNumeros(10, 20);
console.log(resultado);
