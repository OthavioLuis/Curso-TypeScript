"use strict";
/*
  Alguns padrões que vamos encontrar em alguns códigos:
  S => State;
  T => Type;
  K => key;
  V => Value;
  E => Element

*/
function repositorio() {
    let dados;
    function getDados() {
        return dados;
    }
    function setDados(novoDado) {
        dados = novoDado;
    }
    return { getDados, setDados };
}
const repo1 = repositorio();
repo1.setDados(15);
repo1.setDados('15');
console.log(repo1.getDados());
