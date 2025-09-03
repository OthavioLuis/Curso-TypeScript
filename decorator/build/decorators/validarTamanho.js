"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validaTamanho = validaTamanho;
function validaTamanho(tamanho) {
    // Target = construtor da nossa classe
    // Key = nome da propriedade
    return (target, key) => {
        let valor = target[key];
        const getter = () => valor;
        const setter = (value) => {
            if (value === "") {
                console.log("O nome não pode ser vazio");
            }
            else if (value.length < tamanho) {
                console.log(`O nome deve ter no mínimo ${tamanho} caracteres.`);
            }
            else {
                valor = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
