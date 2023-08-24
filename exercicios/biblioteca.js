// Crie um sistema de gerenciamento de uma biblioteca. Crie classes para representar Livros, Autores e Leitores. 
// Um livro deve ter um título, um autor (que é uma instância da classe Autor) e um status de disponibilidade. 
// Um autor deve ter um nome e uma lista de livros escritos. Um leitor deve ter um nome e uma lista de livros emprestados. 
// Implemente métodos para empréstimo e devolução de livros, e também para exibir informações sobre os livros, autores e leitores.

class Livro{
    constructor(titulo, autor) {
        this.titulo = titulo
        this.autor = new Autor(autor)
        this.disponivel = true
        
    }
}

class Autor{
    constructor(nome) {
        this.nome = nome
        this.livrosEscritos = []
        
        console.log(this.livrosEscritos)
 
    }
}

const autor = new Autor("JK")
const livro = new Livro("Harry Potter", autor)
console.log(livro)



// let teste = new Map;
// teste.set("chave", "valor")
// console.log(teste)
