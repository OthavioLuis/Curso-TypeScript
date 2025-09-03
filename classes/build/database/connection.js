"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = connection;
exports.statusConexao = statusConexao;
function connection(info) {
    console.log("Conexão realizada com sucesso: ", info.ip);
    return true;
}
function statusConexao() {
    console.log("Servidor funcionando na porta 80");
}
