# Curso de TypeScript

Este repositório contém um curso prático de TypeScript da Udemy com o professor SujetioProgramador, com exemplos organizados por temas para facilitar o aprendizado dos principais conceitos da linguagem.

## Estrutura do Projeto

- **classes/**  
  Exemplos de classes, herança, mixins, generics e manipulação de banco de dados.
- **decorator/**  
  Exemplos de decorators em métodos, propriedades e validações.
- **interface/**  
  Exemplos de interfaces, tipos, readonly, opcionais e interseções.
- **projeto/**  
  Projeto exemplo integrando HTML e TypeScript.
- **tarefas/**  
  Exercícios e desafios práticos.
- **tipos/**  
  Exemplos de tipos do TypeScript, funções e manipulação de tipos.

Cada pasta possui subpastas `src` (código fonte TypeScript) e `build` (arquivos JavaScript compilados).

## Como Executar

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Instale o TypeScript (caso não tenha):**
   ```sh
   npm install -g typescript
   ```

3. **Entre na pasta desejada e compile os arquivos:**
   ```sh
   cd classes
   tsc
   ```

4. **Execute os arquivos JavaScript gerados:**
   ```sh
   node build/nome-do-arquivo.js
   ```

## Requisitos

- Node.js instalado
- TypeScript instalado globalmente (`npm install -g typescript`)