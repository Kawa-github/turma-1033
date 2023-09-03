// Crie uma classe nomeado `Roupa`, que contenha os seguintes atributo e valores `tamanho` e `cor`. O atributo `cor` deve ser opcional no construtor.

// Deve possuir um método nomeado `sobre` que retornará uma string com as variáveis `tamanho` e `cor` interpoladas. ex: `Camisa tamanho M tem a cor azul`

class Roupa {
    constructor(tamanho, cor = "black"){
        this.tamanho = tamanho
        this.cor = cor
    }

    sobre(){
        return `Camisa tamanho ${this.tamanho} tem a cor ${this.cor}`
    }
}

let camisa = new Roupa("M", "azul")
console.log(camisa.sobre())