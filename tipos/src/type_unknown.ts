// Tipo desconhecido, quando você não sabe o tipo de dado que será recebido

let idPedido: any = 123;
let totalPedido: unknown = 123;

let entregador: number = idPedido; // Isso funciona, pois idPedido é do tipo any

// let totalEntregador: number = totalPedido; // Isso não funciona, pois totalPedido é do tipo unknown

//Valor do tipo unknown só podem ser atribuídos a variáveis do tipo any ou unknown