//const nome: string ='Vinícius'

//const idade: number = 31

//const verdadeiroFalso: boolean = true

//array

const nome: Array<string> = ['Vinícius', 'Flávia', 'Laura', 'Rebeca']

const idade: Array<number> = [31, 33, 8, 11]

//tuple

const dados: [string, number, boolean]= ['Vinícius', 31, true]

//null e undefined

//Objects

type pessoa = {
    nome: string,
    idade: number,
    cidade: string
}

const pessoa = {
    nome: 'Vinícius',
    idade: 31,
    cidade: 'CamposRJ'
}

// enum

enum cores {
    WHITE = '#FFF',
    BLACK = '#000',
    GRAY = '#2F2F2'
}

cores.GRAY

// any - não aconselhavél

//let nomme: any = 'Vinicius'

//nomme = 31

// void - serve pra tipar uma função que não tem retorno