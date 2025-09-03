
interface ProdutoProps {
  readonly id: string;
  nome: string;
  descricao: string;
}

let produto1: ProdutoProps = {
  id: "1",
  nome: "Camiseta",
  descricao: "Camiseta de algodão"
}

// produto1.id = "2"; aqui daria erro, pois id é readonly

console.log(produto1);