
interface CursoPoros{
  id: string;
  nome: string;
  preco: number;
  
  // Definir apenas a função e o que ela deve esperar e retornar
  promocao: (preco: number) => void;
}

// function mostraPromocao(preco: number): void {
//   console.log(`O preço promocional é: R$ ${preco}`);
// }

const novoCurso: CursoPoros = {
  id:'1',
  nome: 'Curso de TypeScript',
  preco: 100,
  promocao: (preco: number): void => {
    console.log(`O preço promocional é: R$ ${preco}`);
  }
}

// console.log(novoCurso);

// console.log(novoCurso.promocao(50));


interface somaProps {
  (valor1: number, valor2: number): number;
}

let somaNumeros: somaProps = (valor1: number, valor2: number): number => {
  console.log(`A soma é: ${valor1 + valor2}`);
  return valor1 + valor2;
}

const resultado = somaNumeros(10, 20);

console.log(resultado);