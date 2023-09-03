// Crie um objeto nomeado `pessoa`, que contenha os seguintes atributo e valores `name` e `age`

// Deve possuir um método nomeado `sobre` que retornará uma string com as variáveis `name` e `age` interpoladas. ex: `João tem 18 anos`

let nome
let age

let pessoa = {
    name: nome,
    age: age,

    sobre: function(nome,age){
        return `${nome} tem ${age} anos`
    }
}

console.log(pessoa.sobre("João", "18"))
console.log(pessoa.sobre("Kawã", "32"))