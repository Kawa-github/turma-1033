// Escreve uma classe nomeada `Pessoa`, que receberá 2 parametros `nome` e `sobrenome` ex: `new Pessoa("João", "Ninguém")`.

// Deve possuir um método nomeado `nomeCompleto` que retornará a o `nome` e `sobrenome` concatenado, ex: "João Ninguém"

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    nomeCompleto(){
        return `Nome completo: ${this.nome} ${this.sobrenome}`
    }
}

let nome1 = new Pessoa("João","Ninguém")
console.log(nome1.nomeCompleto())