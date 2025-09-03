/* >> Decorators <<

  Class
  Propriedade
  Métodos
  Parâmetros - bem pouco usado
  Acessores (getters e setters) - bem pouco usado

*/
// target = receber o construtor da classe
// function logInfo(target: any) {
//   console.log("Sistema está sendo carregado...");
// }

// >>> Padrao factory (Fabrica) | Função que vai retornar a criação do decorator
// function logInfo(mensagem: string) {
//   return (target: any) => {
//     console.log(`${mensagem}, ${target}`)
//   }
// }

function setIpServidor(novoPi: string) {
  return (target: any) => { // target é o constructor da classe
    return class extends target {
      ip = novoPi
    }
  }
}


@setIpServidor("192.168.32.9")
class Servidor {

}

const servidor1 = new Servidor()

console.log(servidor1);