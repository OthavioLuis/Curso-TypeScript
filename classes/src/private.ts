
class Conta {
  // Private: Ele não pode ser acessado ou modificado fora da classe
  private limite: number = 450;

  private aumentarLimite(quantidade: number) {
    if(quantidade < 1000) {
      this.limite += quantidade;
      console.log(`Limite aumentado para: ${this.limite}`);
    } else {
      console.log("Quantidade muito alta para aumentar o limite.");
    }
  }

  protected solicitarLimite(quantidade: number) {
    return this.aumentarLimite(quantidade)
  }

  solicitarAumento(estaAutenticado: boolean, quantidade: number): void | boolean {
    if(estaAutenticado) {
      this.aumentarLimite(quantidade)
    } else {
      return false
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

const joao  = new BancoAfiliado();
joao.limiteAfiliado();
