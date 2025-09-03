
class Pessoa {
  readonly id: string = "123"
  nome: string;
  idade: number;
  
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  mudarId() {
    console.log("Seu id é: ", this.id)
  }

}

const Ana = new Pessoa("Ana", 25);

Ana.mudarId();

console.log(Ana);