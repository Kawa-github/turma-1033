// Crie uma classe nomeado `ListaDeMembros`.

// Deve possuir um método nomeado `adicionar` que aceite como parâmetro os seguintes atributo `nome`. ex: `adicionar(nome)`

// Deve possuir um método `contar` que irá retornar a quantidade nomes adicionados.

let lista = []
let contador = 0
class ListaDeMembros{
    constructor() {
        
    }

    adicionar(nome){
        lista.push(nome)
        console.log(lista)
        this.contar()
        return lista
    }

    contar(){
        console.log(++contador)
    }
}


let nome1 = new ListaDeMembros().adicionar("Kawã")
let nome2 = new ListaDeMembros().adicionar("Joao")
let nome3 = new ListaDeMembros().adicionar("rafael")