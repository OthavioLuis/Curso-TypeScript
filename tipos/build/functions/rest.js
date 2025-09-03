"use strict";
function mostrarNomes(...nomes) {
    console.log(`Quantidade de nomes: ${nomes.length}`);
    return nomes.join(', ');
}
let meusNomes = mostrarNomes('Carlos', 'Fernanda', 'Lucas');
console.log(`Meus nomes: ${meusNomes}`);
