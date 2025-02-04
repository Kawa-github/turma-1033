// Crie uma classe nomeada `Estoque` com os métodos `adicionar(nome, quantidade)`, `remover(nome, quantidade)` e `listar()`.

// - O método `adicionar` deverá aceitar dois parametros, o primeiro é o nome do item e o segundo sua quantidade a ser adicionado. Quando o produto não existir deverá retornar: Produto novo adicionado. Caso o produto já exista deverá retornar: X item(s) adicionado(s)

// ---

// - O método `remover` deverá aceitar dois parametros, o primeiro é o nome do item que será buscado na lista e o segundo quantidade a ser removida.
// - Quando o produto não existir ou possuir quantidade igual a zero, deverá retornar: Produto não encontrado.
// - Caso o produto exista e sua quantidade também deverá retornar: X item(s) removido(s).
// - Caso a quantidade do produto a ser removida seja maior que a quantidade em estoque deverá retornar: Não há quantidade suficiente para remoção

// ---

// - No caso do método `listar`, deverá retornar uma lista de objetos com a seguinte informação: [{ nome: "Uva", quantidade: 1 }]

// exemplo de uso:

// ```js
// const estoque = new Estoque();

// estoque.adicionar("Uva", 1); // Produto novo adicionado;
// estoque.adicionar("Uva", 2); // 2 item(s) foi adicionado;
// estoque.listar(); // ([{ nome: "Uva", quantidade: 3 }]);
// estoque.remover("Uva", 3); // 3 item(s) removido(s)
// estoque.listar(); // ([{ nome: "Uva", quantidade: 0 }]);
// estoque.remover("Uva", 1); // Não há quantidade suficiente para remoção
// estoque.remover("Laranja", 1); // Produto não encontrado
// ```



class Estoque {
    constructor() {
      this.produtos = [];
    }
  
    adicionar(nome, quantidade) {
      const produtoExistente = this.produtos.find((produto) => produto.nome === nome);
  
      if (produtoExistente) {
        produtoExistente.quantidade += quantidade;
        return `${quantidade} item(s) foi adicionado`;
      } else {
        this.produtos.push({ nome, quantidade });
        return "Produto novo adicionado";
      }
    }
  
    remover(nome, quantidade) {
      const produto = this.produtos.find((p) => p.nome === nome);
  
      if (!produto || produto.quantidade === 0) {
        return "Produto não encontrado";
      }
  
      if (quantidade > produto.quantidade) {
        return "Não há quantidade suficiente para remoção";
      }
  
      produto.quantidade -= quantidade;
      return `${quantidade} item(s) removido(s)`;
    }
  
    listar() {
      return this.produtos;
    }
  }
  
  const estoque = new Estoque();
  
  console.log(estoque.adicionar("Uva", 1)); // Produto novo adicionado
  console.log(estoque.adicionar("Uva", 2)); // 2 item(s) foi adicionado
  console.log(estoque.listar()); // [{ nome: "Uva", quantidade: 3 }]
  console.log(estoque.remover("Uva", 3)); // 3 item(s) removido(s)
  console.log(estoque.listar()); // [{ nome: "Uva", quantidade: 0 }]
  console.log(estoque.remover("Uva", 1)); // Não há quantidade suficiente para remoção
  console.log(estoque.remover("Laranja", 1)); // Produto não encontrado
  