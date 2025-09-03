// Assim é um exeplo de uma função que sabemos quantos valores vamos passar
// function totalVendas(valor1: number, valor2: number): number  {
//   let total = valor1 + valor2;

//   console.log(`O total das vendas é: ${total}`);

//   return total;
// }

// totalVendas(100, 200);

// Assim é um exemplo de uma função que não sabemos quantos valores vamos passar (rest)

// function totalVendas(...vendas: number[]): void {
//   const quantidadeVendas = vendas.length
//   console.log(`Quantidade de vendas: ${quantidadeVendas}`); 
// }

// totalVendas(10, 30, 10, 24)

// Outro exemplo de função com rest

function mostrarNomes(...nomes: string[]): string {
  console.log(`Quantidade de nomes: ${nomes.length}`)

  // nomes.map( nome => {
  //   console.log(`Nome: ${nome}`);
  // })

  return nomes.join(', ');
}

// mostrarNomes('João', 'Maria', 'Pedro', 'Ana');

let meusNomes = mostrarNomes('Carlos', 'Fernanda', 'Lucas');

console.log(`Meus nomes: ${meusNomes}`);
