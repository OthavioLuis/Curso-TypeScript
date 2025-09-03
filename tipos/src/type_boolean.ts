let estaAutenticado: boolean = true

let codeStatus:string = ''

// Tudo que for diferente de vazio, 0, null, undefined, false, NaN é considerado true
estaAutenticado = Boolean(codeStatus)

console.log(estaAutenticado);