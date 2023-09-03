// Crie uma classe `Pessoa` com o atributo `nome` e `idade`

// Crie uma classe `Cidadao` com o atributo `cpf` e `rg`, ela deve extender da classe `Pessoa`

// Exemplo de entrada de dados: `new Pessoa("João Neto", 18)`

// Exemplo de entrada de dados: `new Cidadao("João Neto", 18, "12345678900", "1234567")`


class Pessoa{
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        
    }
}

class Cidadao extends Pessoa{
    constructor(nome, idade, cpf, rg) {
        super(nome,idade)
        this.cpf = cpf
        this.rg = rg
        
    }
}

let pessoa1 = new Pessoa("Joãozin",18)
console.log(pessoa1)
let cidadao = new Cidadao("Joao",18,"12345678900","12345678944")
console.log(cidadao)