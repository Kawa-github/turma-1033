// Observe a seguinte classe:

// ```js
// class Coelho extends Animal {
//   constructor() {
//     super();
//     this.name = "Coelho";
//   }
// } 
// ```
// Crie uma classe nomeada `Animal` que será extendida pela classe `Coelho`, a classe `Animal` deverá atender o seguinte exemplo:
// ```
// const coelho = new Coelho()
// coelho.corre(5);
// coelho.status(); // Coelho corre com velocidade 10
// coelho.pare();
// coelho.status(); // Coelho está parado
// ```


class Animal{
    constructor(nome){
        this.nome = nome
        this.velocidade
    }

    corre(velocidade){
        this.velocidade = velocidade
    }
    pare(){
        this.velocidade = 0
    }
    status() {
        if (this.velocidade > 0) {
          console.log(`${this.nome} corre com velocidade ${this.velocidade}`)
        } else {
          console.log(`${this.nome} está parado.`)
        }
    }
}

class Coelho extends Animal{
    constructor(nome) {
        super(nome)
        this.nome = "Coelho"
    }

}

const coelho = new Coelho()
coelho.corre(5);
coelho.status(); // Coelho corre com velocidade 10
coelho.pare();
coelho.status(); // Coelho está parado

