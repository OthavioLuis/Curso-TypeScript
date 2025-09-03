export function verificaPessoa(idade: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    // console.log("Target: ", target);
    // console.log("Key: ", key);
    // console.log("Descriptor: ", descriptor);

    const metodoOriginal = descriptor.value;

    // Reescrevendo o método original
    descriptor.value = function () {
      if (idade < 18) {
        console.log("Estamos cadastrando como menor de idade.");
      } else {
        console.log("Maior de idade.");
      }
      // Aqui retornamos o método original para ser executado
      return metodoOriginal.apply(this);
    }
  }
}