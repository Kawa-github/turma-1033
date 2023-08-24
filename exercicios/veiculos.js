class Veiculo {
    constructor(nome, marca, anoFabricacao) {
        this.nome = nome;
        this.marca = marca;
        this.anoFabricacao = anoFabricacao;
        this.ligado = false;
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            return `Você ligou o veículo ${this.nome}`;
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            return `Você desligou o veículo ${this.nome}`;
        }
    }
}

class Carro extends Veiculo {
    constructor(nome, marca, anoFabricacao) {
        super(nome, marca, anoFabricacao);
        this.turbo = true;
    }
}

class Moto extends Veiculo {
    constructor(nome, marca, anoFabricacao, tamanhoAro) {
        super(nome, marca, anoFabricacao);
        this.tamanhoAro = tamanhoAro;
    }
}

const carro = new Carro("Palio", 'Fiat', '2012');
console.log(carro)
console.log(carro.ligar());
console.log(carro.desligar());

const moto = new Moto("XJ6", 'Honda', '2015');
console.log(moto)
console.log(moto.ligar());
console.log(moto.desligar());