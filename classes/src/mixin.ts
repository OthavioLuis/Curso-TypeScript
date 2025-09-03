import { applyMixin } from './mixin/applyMixin'

class Automovel {
  ligar(): void {
    console.log("O automóvel está ligado.");
  }

  desligar(): void {
    console.log("O automóvel está desligado.");
  }
}

class Especificacao {
  descricao: string;

  constructor(descricao: string) {
    this.descricao = descricao;
  }

}

class Carro {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

}

interface Carro extends Automovel, Especificacao { }

applyMixin(Carro, [Automovel, Especificacao]);

const gol = new Carro("Gol");

gol.ligar();
gol.descricao = "Carro compacto e econômico";

console.log(gol);

gol.desligar();