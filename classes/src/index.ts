
// Buscar o meu arquivo que conecta com banco de dados.

import { connection, statusConexao } from "./database/connection";
import defaultTeste, { semDefault } from "./database/aplicativo"

function acessarSistema() {
  connection({ip: "192.168.7.38", name: "MySQL"})
  statusConexao()
}

defaultTeste()

semDefault()

// acessarSistema()