// Crie duas classes nomeadas `Categoria` e `Artigo` com os seguintes atributos:

// A classe Categoria: `nome`.

// A classe Artigo: `titulo` e `categoria`, `categoria` deve ser uma instância da classe `Categoria`.

// A classe Artigo deve possuir o método `setCategoria` que receberá o parâmetro do tipo `Categoria`.

// exemplo de uso

// ```js
// const categoria = new Categoria("Javascript");
// const artigo = new Artigo("Orientação a Objetos");

// artigo.setCategoria(categoria);
// categoria.nome; // Javascript
// artigo.categoria.nome; // Javascript
// artigo.titulo; // Orientação a Objetos
// ```


class Categoria {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  class Artigo {
    constructor(titulo, categoria) {
      this.titulo = titulo;
      this.categoria = categoria;
    }
  }
  
  const categoria = new Categoria("Javascript");
  const artigo = new Artigo("Orientação a Objetos", categoria);
  
  console.log(categoria.nome); // Javascript
  console.log(artigo.categoria.nome); // Javascript
  console.log(artigo.titulo); // Orientação a Objetos
  