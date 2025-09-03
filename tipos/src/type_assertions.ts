// Afirmando algum tipo de dado

let statusAtual: unknown = 1;

let mudaStatus: number = 0;

mudaStatus = statusAtual as number; // Afirmando que statusAtual é do tipo number

// Outra maneira de afirmar o tipo de dado
mudaStatus = <number>statusAtual; // Usando a sintaxe de "cast" do TypeScript

console.log(mudaStatus);

let query: unknown = 'pizza';

let busca: string = query as string; // Afirmando que query é do tipo string

console.log("Termo achado: ", busca);