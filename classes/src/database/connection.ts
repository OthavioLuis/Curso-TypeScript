type Connection = {
  ip: string;
  name: string;
}

export function connection(info: Connection): boolean {
  console.log("Conexão realizada com sucesso: ", info.ip)
  return true;
}

export function statusConexao(): void {
  console.log("Servidor funcionando na porta 80")
}