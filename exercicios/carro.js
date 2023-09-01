class Oficina {
    constructor(turbo){
        this.turbo = turbo
        this.carro = new Carro()


        
    }  
    
    aplicarModificacao(){
        console.log("")
    }
}


class Carro {
    constructor(carro, marca, anoFab) {
        if (typeof Carro.proximoId === 'undefined') {
            Carro.proximoId = 1
        }

        this.id = Carro.proximoId++
        this.carro = carro
        this.marca = marca
        this.anoFab = anoFab
    }
}


let carro1 = new Carro("Uno","Fiat",2015)
let carro2 = new Carro("Palio","Fiat",2010)

console.log(carro1)
console.log(carro2)