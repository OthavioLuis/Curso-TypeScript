
function cadastro(email: string, senha: string, nome?: string): void {

  let data = {email, senha, nome};
  console.log('Cadastro realizado com sucesso:', data);

}

// cadastro('teste@teste.com', 'senha123', 'João da Silva');

// Passando um valor padrão para o parâmetro opcional
function cadastroComPadrao(email: string, senha: string, nome: string = 'Usuário Padrão'): void {
  let data = {email, senha, nome};
  console.log('Cadastro realizado com sucesso:', data); 
}

cadastroComPadrao('teste@gmail.com', 'senha456');