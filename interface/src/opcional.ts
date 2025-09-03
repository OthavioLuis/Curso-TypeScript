
interface CadastroProps {
  nome?: string; // Aqui estamos usando o operador de interrogação para indicar que o campo é opcional
  email: string;
  status: boolean;  
}

const usuario: CadastroProps = {
  // Não precisamos fornecer o campo nome, pois ele é opcional
  email: "Teste@gmail.com",
  status: true
}

// console.log(usuario);

function novoUser(usuario: CadastroProps) {
  console.log(usuario.nome);
}

novoUser({ nome: "João", email: "ana@gmail.com", status: true });