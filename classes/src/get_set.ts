
// Caso de uso de um JOGO

class Jogo {
  private servidor: string;
  private id: string = "12345";

  constructor(servidor: string) {
    this.servidor = servidor
  }

  // Método Get = Para pegar o valor ao inves de acessar diretamente a propriedade
  get getServidorIP() {
    console.log("Pegando o IP do servidor...")
    return this.servidor;
  }

  // Método Set = Para alterar o valor ao inves de acessar diretamente a propriedade
  set setServidorIP(novoIP: string) {
    if(this.servidor === novoIP) {
      throw new Error("O novo IP é o mesmo que o atual.");
    }

    this.servidor = novoIP;
  }

}

const GTA5 = new Jogo("192.168.3.2")

// try {
//   GTA5.setServidorIP = "192.168.23.8"
// } catch(error) {
//   console.log("ERROR: ", error.message);
// }

console.log(GTA5.getServidorIP);