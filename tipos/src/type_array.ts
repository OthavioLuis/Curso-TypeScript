let numeros: number[] = [1, 2, 3, 4, 5];
// Conseguimos declarar o array assim também: Array<number>

// Caso queira mais de um tipo, podemos usar o Union Type
// let numeros: (number | string)[] = [1, 2, 3, '4', '5'];

console.log(numeros);

numeros.push(6);

console.log('Array atualizado: ', numeros);