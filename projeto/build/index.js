"use strict";
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const buttonSoma = document.getElementById('btnSomar');
const buttonSub = document.getElementById('btnSubtrair');
function operacao({ tipo, a, b }) {
    if (tipo === "soma") {
        return a + b;
    }
    else {
        return a - b;
    }
}
buttonSoma.addEventListener('click', () => {
    const resultado = operacao({
        tipo: "soma",
        a: Number(input1.value),
        b: Number(input2.value)
    });
    console.log('Soma: ', resultado);
});
buttonSub.addEventListener('click', () => {
    const resultado = operacao({
        tipo: "subtrair",
        a: Number(input1.value),
        b: Number(input2.value)
    });
    console.log('Subtração: ', resultado);
});
