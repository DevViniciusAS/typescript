//const qualquer: number | string | boolean= true 

interface ocupacao {
    trabalho: string,
    local?: string
}

interface pessoa {
    name: string,
    idade: number,
    cidade: string
}

type dados = ocupacao & pessoa

const pessoa: dados = {
    name: 'Vinícius',
    idade: 31,
    cidade: 'CamposRJ',
    trabalho: 'Programador',
    local: 'Remoto'
}