"use strict";
class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    constructor(id, nome, email, cargo, nivel) {
        // Chamando o construtor da classe pai
        super(id, nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo(cargo) {
        console.log('Mudando de cargo...');
        console.log(`Cargo alterado para: ${cargo}`);
    }
    acessarAdmin() {
        this.mudarCargo("Designer");
    }
}
const Usuario1 = new Admin(1, "João", "joao@gmail.com", "Auxiliar", "Nível 3");
Usuario1.acessarAdmin();
// console.log(Usuario1);
