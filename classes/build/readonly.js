"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.id = "123";
        this.nome = nome;
        this.idade = idade;
    }
    mudarId() {
        console.log("Seu id é: ", this.id);
    }
}
const Ana = new Pessoa("Ana", 25);
Ana.mudarId();
console.log(Ana);
