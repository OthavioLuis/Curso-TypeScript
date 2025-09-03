"use strict";
function acessar(uuid, nome) {
    console.log(`Acessando ${nome} com UUID: ${uuid}`);
}
function logUsuario(uuid) {
    console.log(`Usuário logado com UUID: ${uuid}`);
}
function comprarItem(moeda) {
    console.log(`Comprando item com moeda: ${moeda}`);
}
comprarItem("BRL");
