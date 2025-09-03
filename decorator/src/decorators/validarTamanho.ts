export function validaTamanho(tamanho: number) {
  // Target = construtor da nossa classe
  // Key = nome da propriedade
  return (target: any, key: string) => {
    let valor = target[key];

    const getter = () => valor;
    const setter = (value: string) => {
      if (value === "") {
        console.log("O nome não pode ser vazio");
      } else if (value.length < tamanho) {
        console.log(`O nome deve ter no mínimo ${tamanho} caracteres.`);
      } else {
        valor = value;
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    })

  }
}