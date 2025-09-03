import { verificaPessoa } from "./decorators/verificaPessoa";

class Pessoa {
  nome: string;

  constructor(nome:string) {
    this.nome = nome
  }

  @verificaPessoa(16)
  cadastrarPessoa() {
    console.log(`Pessoa ${this.nome} cadastrada com sucesso!`);
  }
}

const pessoa1 = new Pessoa("João")

pessoa1.cadastrarPessoa()