// Crie uma classe `Animal` com o método `sobre` e os atributo: `nome`, `som`, `onomatopeia`.

// Crie três classes nomeadas: `Vaca`, `Cavalo`, `Ovelha`, elas devem extender de Animal.

// A método `sobre` deve retornar o seguinte para cada animal:

// - O animal vaca faz o som de mugir e sua onomatopeia é muuuu
// - O animal cavalo faz o som de relinchar e sua onomatopeia é iiirrrrí
// - O animal ovelha faz o som de berrar e sua onomatopeia é méééé

class Animal {
    constructor(nome,som,onomatopeia){
        this.nome = nome
        this.som = som
        this.onomatopeia = onomatopeia
    }

    sobre(){
        return `O animal ${this.nome} faz o som de ${this.som} e sua onomatopeia é ${this.onomatopeia}`;
    }
  }

class Vaca extends Animal{
    constructor(nome,som,onomatopeia) {
        super(nome,som, onomatopeia)
        
        this.nome = "Vaca"
        this.som = "mugir"
        this.onomatopeia = "muuu"
    }

}


class Cavalo extends Animal{
    constructor(nome,som,onomatopeia) {
        super(nome,som, onomatopeia)
        
        this.nome = "Cavalo"
        this.som = "relinchar"
        this.onomatopeia = "irrraaaaa"
    }
    
}

class Ovelha extends Animal{
    constructor(nome,som,onomatopeia) {
        super(nome,som, onomatopeia)
        
        this.nome = "Ovelha"
        this.som = "berrar"
        this.onomatopeia = "mééé"
    }
}


let vaca = new Vaca()
let cavalo = new Cavalo()
let ovelha = new Ovelha()

console.log(vaca.sobre())
console.log(cavalo.sobre())
console.log(ovelha.sobre())