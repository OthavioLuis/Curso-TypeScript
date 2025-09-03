"use strict";
// Propriedade Decorator.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const validarTamanho_1 = require("./decorators/validarTamanho");
class Jogo {
    constructor(nome) {
        this.nome = nome;
    }
}
__decorate([
    (0, validarTamanho_1.validaTamanho)(4)
], Jogo.prototype, "nome", void 0);
const jogo1 = new Jogo("GTA 5");
console.log(jogo1.nome);
