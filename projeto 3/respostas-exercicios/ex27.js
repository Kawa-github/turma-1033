// Crie duas classes nomeadas `Post` e `Blog` com os seguintes atributos:

// A classe Post: `titulo` e `dataPublicacao`

// A classe Blog: `posts`, deve ser uma instância da classe `Post`

// A classe Blog deve possuir os métodos `publicar`, `antigos` e `novos`

// O método `publicar` receberá um parâmetro do tipo `Posto`.

// Os método `antigos` e `novos` retornará uma lista de títulos dos posts ordenados pelo mais antigo/novos

// exemplo de uso

// ```js
// const post1 = new Post("Como aprender mais rápido!", new Date(1988, 11, 24));
// const post2 = new Post("Como desaprender mais rápido!", new Date(2006, 1, 4));
// const blog = new Blog();

// blog.publicar(post1);
// blog.publicar(post2);

// expect(blog.antigos())
// // [
// //   "Como aprender mais rápido!",
// //   "Como desaprender mais rápido!",
// // ]
// expect(blog.novos())
// // [
// //   "Como desaprender mais rápido!",
// //   "Como aprender mais rápido!",
// // ]
// ```

class Post{
    constructor(titulo, dataPublicacao) {
        this.titulo = titulo
        this.dataPublicacao = dataPublicacao
    }
}

class Blog{
    constructor() {
        this.lista = []
        this.post = new Post()
    }
    publicar(post){
        this.post = post
        this.lista.push(this.post)
        // console.log(this.lista)
    }
    antigos(){
      const postAntigos = this.lista
      .sort((a, b) => a.dataPublicacao - b.dataPublicacao)
      .map(item => item.titulo);
      ;
      console.log(postAntigos)
    }
    novos(){
      const postNovos = this.lista
      .sort((a, b) => b.dataPublicacao - a.dataPublicacao)
      .map(item => item.titulo);
      console.log(postNovos)
    }
}


const post1 = new Post("Como aprender mais rápido!", new Date(1988, 11, 24));
const post2 = new Post("Como desaprender mais rápido!", new Date(2006, 1, 4));
const blog = new Blog();

blog.publicar(post1);
blog.publicar(post2);

blog.antigos()
blog.novos()


// expect(blog.antigos
// // [
// //   "Como aprender mais rápido!",
// //   "Como desaprender mais rápido!",
// // ]
// expect(blog.novos())
// // [
// //   "Como desaprender mais rápido!",
// //   "Como aprender mais rápido!",
// // ]
// ```