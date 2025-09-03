
// interface TecnologiaProps {
//   id: string;
//   nome: string;
//   slug: string[];
// }

// let tecnologia1: TecnologiaProps = {
//   id: "1",
//   nome: "TypeScript",
//   slug: ["typescript", "javascript", "programacao"]
// }

interface TecnologiaProps {
  id: string;
  nome: string;
  descricao?: string;
}

interface NomesProps {
  tecnologia: TecnologiaProps[];
}

let frontend: NomesProps = {
  tecnologia: [
    {
      id: "1",
      nome: "TypeScript",
    },
    {
      id: "2",
      nome: "JavaScript",
      descricao: "Linguagem de programação para web"
    }
  ]
}

console.log(frontend.tecnologia);