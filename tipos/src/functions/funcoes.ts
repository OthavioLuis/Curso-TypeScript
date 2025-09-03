

// function login(username: string | number): boolean {
//   console.log(`Usuário logado: ${username}`);

//   return true;
// }

// const usernameLogin = login("joao123");

// console.log(usernameLogin);

let n1: number = 10;
let n2: number = 15;

function soma(valor1: number, valor2: number): string {
  let soma  = valor1 + valor2;
  if (soma > 20) {
    return `A soma é maior que 20: ${soma}`;
  } else {
    return `A soma é menor ou igual a 20: ${soma}`;
  }
}

console.log(soma(n1, n2));