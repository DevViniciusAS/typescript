interface endereco {
    cidade: string,
    estado: string
}

interface pessoa {
    nome: string,
    idade: number,
    cidade: string
}

let pessoa = {
    nome: 'Vinícius',
    idade: 31,
    endereco: {
        cidade: 'Campos',
        estado: 'RJ'
    }
}