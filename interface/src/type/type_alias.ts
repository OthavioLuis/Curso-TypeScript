type Uuid = string | number | null;

function acessar(uuid: Uuid, nome: string) {
  console.log(`Acessando ${nome} com UUID: ${uuid}`);
}

function logUsuario(uuid: Uuid) {
  console.log(`Usuário logado com UUID: ${uuid}`);
}

// acessar("1234-5678", "João");
// acessar(1234, "Maria");

// logUsuario("abcd-efgh");

type Moedas = "BRL" | "USD" | "EUR";

function comprarItem(moeda: Moedas) {
  console.log(`Comprando item com moeda: ${moeda}`);
}

comprarItem("BRL")