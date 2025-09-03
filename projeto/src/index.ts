const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;
const buttonSoma = document.getElementById('btnSomar') as HTMLButtonElement;
const buttonSub = document.getElementById('btnSubtrair') as HTMLButtonElement;

type Operacoes = "soma" | "subtrair";

interface Valores {
  tipo: Operacoes;
  a: number;
  b: number;
}

function operacao({tipo, a, b}: Valores): number{
  if(tipo === "soma") {
    return a + b;
  } else {
    return a - b;
  }
}

buttonSoma.addEventListener('click', () => {
  const resultado = operacao({
    tipo: "soma",
    a: Number(input1.value),
    b: Number(input2.value)
  });
  console.log('Soma: ', resultado);
})

buttonSub.addEventListener('click', () => {
  const resultado = operacao({
    tipo: "subtrair",
    a: Number(input1.value),
    b: Number(input2.value)
  });
  console.log('Subtração: ', resultado);
})