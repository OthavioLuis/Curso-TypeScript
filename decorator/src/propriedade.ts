// Propriedade Decorator.

import { validaTamanho } from "./decorators/validarTamanho";

class Jogo {
  @validaTamanho(4)
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

const jogo1 = new Jogo("GTA 5");

console.log(jogo1.nome);