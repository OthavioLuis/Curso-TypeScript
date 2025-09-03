
class Usuario {
  protected id: number; // Podemos chamar na classe usuario e nas classes filhas
  nome: string;
  email: string;

  constructor(id: number, nome:string, email: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }
}

class Admin extends Usuario {
  cargo: string;
  nivel: string;

  constructor(id: number, nome: string, email: string, cargo: string, nivel: string) {
    // Chamando o construtor da classe pai
    super(id, nome, email)

    this.cargo = cargo;
    this.nivel = nivel;
  }

  protected mudarCargo(cargo: string):void {
    console.log('Mudando de cargo...')
    console.log(`Cargo alterado para: ${cargo}`);
  }

  acessarAdmin() {
    this.mudarCargo("Designer")
  }

}

const Usuario1 = new Admin(1, "João", "joao@gmail.com", "Auxiliar", "Nível 3");

Usuario1.acessarAdmin();

// console.log(Usuario1);