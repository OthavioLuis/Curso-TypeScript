/*
  Alguns padrões que vamos encontrar em alguns códigos:
  S => State;
  T => Type;
  K => key;
  V => Value;
  E => Element

*/


function repositorio<T extends number | string>() {

  let dados: T;

  function getDados() {
    return dados;
  }

  function setDados(novoDado: T) {
    dados = novoDado
  }

  return { getDados, setDados }

}

const repo1 = repositorio<string | number>();

repo1.setDados(15)
repo1.setDados('15')
console.log(repo1.getDados())