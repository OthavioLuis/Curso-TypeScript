"use strict";
let n1 = 10;
let n2 = 15;
function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    if (soma > 20) {
        return `A soma é maior que 20: ${soma}`;
    }
    else {
        return `A soma é menor ou igual a 20: ${soma}`;
    }
}
console.log(soma(n1, n2));
