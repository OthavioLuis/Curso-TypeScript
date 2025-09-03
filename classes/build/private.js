"use strict";
class Conta {
    constructor() {
        // Private: Ele não pode ser acessado ou modificado fora da classe
        this.limite = 450;
    }
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite += quantidade;
            console.log(`Limite aumentado para: ${this.limite}`);
        }
        else {
            console.log("Quantidade muito alta para aumentar o limite.");
        }
    }
    solicitarLimite(quantidade) {
        return this.aumentarLimite(quantidade);
    }
    solicitarAumento(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade);
        }
        else {
            return false;
        }
    }
}
class BancoAfiliado extends Conta {
    limiteAfiliado() {
        return this.solicitarLimite(1000);
    }
}
const fulano = new Conta();
// fulano.solicitarAumento(true, 500)
// console.log(fulano);
const joao = new BancoAfiliado();
joao.limiteAfiliado();
