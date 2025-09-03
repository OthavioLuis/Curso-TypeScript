
// let loja: object

// loja = {
//   nome: "BK",
//   endereco: "Rua A, 123",
//   status: true
// }

// Conjunto de dados (um padrão) para descrever a estrutura de um objeto.
interface LojaProps {
  nome: string;
  endereco: string;
  status: boolean;
}

const BurguerK: LojaProps = {
  nome: "Burguer K",
  endereco: "Rua A, 123",
  status: true
}

// console.log(BurguerK);

function novaLoja({nome, endereco, status}: LojaProps): void {
  console.log(`Loja ${nome} criada com sucesso!`);
  console.log(`Endereço: ${endereco}`);
  console.log(`Status: ${status}`);
}

novaLoja({nome: "Subway", endereco: "Rua B, 456", status: false});