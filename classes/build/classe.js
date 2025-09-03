"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "aberto") {
            console.log(`Loja ${this.nome} está aberta!`);
        }
        else {
            console.log(`Loja ${this.nome} está fechada!`);
        }
    }
}
const redBurguer = new Loja("Red Burguer", "Fast Food");
// console.log(redBurguer.categoria)
// redBurguer.criarLoja()
// const retornoLoja = redBurguer.emitirPedido(30, "X-Burguer", "Batata Frita", "Refrigerante");
redBurguer.mudarStatus("fechado");
// console.log(retornoLoja);
