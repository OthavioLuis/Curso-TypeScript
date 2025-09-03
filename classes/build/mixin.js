"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_1 = require("./mixin/applyMixin");
class Automovel {
    ligar() {
        console.log("O automóvel está ligado.");
    }
    desligar() {
        console.log("O automóvel está desligado.");
    }
}
class Especificacao {
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixin_1.applyMixin)(Carro, [Automovel, Especificacao]);
const gol = new Carro("Gol");
gol.ligar();
gol.descricao = "Carro compacto e econômico";
console.log(gol);
gol.desligar();
