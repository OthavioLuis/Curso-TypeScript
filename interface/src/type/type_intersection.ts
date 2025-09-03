
// Com o type Alias conseguimos criar tipos mais poderosos, com mais informações do que tipos primitivos

type Info = {
  id: number;
  nome: string;
  descricao?: string;
}

// const produtoInfo: Info = {
//   id: 1,
//   nome: "Produto Exemplo",
//   descricao: "Descrição do produto exemplo"
// }

type Categoria = {
  slug: string;
  quantidadeProdutos: number;
}

// const categoria1: Categoria = {
//   slug: "eletronicos",
//   quantidadeProdutos: 100
// }

type produtoInfo = Info & Categoria; // ProdutoInfo agora tem as propriedades de Info e Categoria

const novoProduto: produtoInfo = {
  id: 2,
  nome: "Teclado RGB",
  descricao: "Teclado mecânico com iluminação RGB",
  slug: "teclados",
  quantidadeProdutos: 50
}

console.log(novoProduto);