
type Status = "aberto" | "fechado";

class Loja {
  // Aqui dentro vamos declarar os atributos da classe Loja
  nome: string;
  categoria: string;

  constructor(nome: string, categoria: string) {
    this.nome = nome;
    this.categoria = categoria;
  }

  criarLoja() {
    console.log(`Loja ${this.nome}, categoria: ${this.categoria}`)
  }

  emitirPedido(mesa: number, ...pedidos: string[]): string {
    pedidos.map((pedido) =>  {
      console.log(`Saindo novo pedido: ${pedido}`)
    })

    return `Pedido na mesa: ${mesa}`
  }

  mudarStatus(status: Status): void {
    if (status === "aberto") {
      console.log(`Loja ${this.nome} está aberta!`);
    } else {
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