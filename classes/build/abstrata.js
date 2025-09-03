"use strict";
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log('==============');
        console.log(`Abrindo conta para pessoa física ${dados.nome}`);
        console.log('==============');
        return true;
    }
}
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log('==============');
        console.log(`Abrindo conta para pessoa jurídica ${dados.nome}`);
        console.log('==============');
        return true;
    }
}
const Joana = new PessoaFisica();
Joana.abrirConta({
    nome: "Joana Silva",
    numero: "222",
    endereco: "Rua das Flores, 123"
});
const Othavio = new PessoaJuridica();
Othavio.abrirConta({
    nome: "Othavio Ltda",
    numero: "333",
    endereco: "Avenida Central, 456"
});
