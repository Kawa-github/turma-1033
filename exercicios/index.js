let id = 1

class Loja {
    constructor(produto, marca, preco, ativo = true){
        this.id = id++
        this.produto = produto
        this.marca = marca
        this.preco = preco
        this.ativo = ativo
    }

    comprarProduto(produto){
        if(typeof produto !== "string"){
            throw new Error("Produto inválido!")
        }

        if (produto != this.produto){
            throw new Error("Produto não existe!")
        }   

        if(this.ativo === false){
            throw new Error("Produto não está disponivel!")
        }

        this.ativo = !this.ativo

        return `Produto: (${this.produto}) comprado com sucesso!`
    }

    alterarPreco(preco){
        if(typeof this.preco !== "number"){
            throw new Error("Preço inválido!")
        }

        this.preco = preco

        return {
            produto: this.produto,
            novoPreco: this.preco
        }
    }
}


let produto1 = new Loja("Camiseta", "Nike", 21.99)
let produto2 = new Loja("Moletom", "Adidas", 50.99)

// console.log(produto1)
// console.log(produto2)

console.log(produto1.comprarProduto("Camiseta"))
// console.log(produto1.comprarProduto("Camiseta"))

// console.log(produto2.comprarProduto("Moletom"))
// console.log(produto2.comprarProduto("Moletom")) 

console.log(produto1.alterarPreco(25))
// console.log(produto2.alterarPreco(10.50))

