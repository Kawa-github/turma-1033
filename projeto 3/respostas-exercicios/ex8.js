// Crie uma classe `Pessoa` com o método `saudacao` que retornará a string: `Olá pessoa!`

// Crie uma classe `Trabalhador` que extenda de `Pessoa` e sobrescreva o método `saudacao` de `Pessoa` para retornar: `Olá trabalhador!`

// Crie uma classe `Aluno` que extenda de `Pessoa` e sobrescreva o método `saudacao` de `Pessoa` para retornar: `Olá aluno!`

class Pessoa {
    saudacao() {
      return "Olá pessoa!"
    }
  }
  
  class Trabalhador extends Pessoa {
    saudacao() {
      return "Olá trabalhador!"
    }
  }
  
  class Aluno extends Pessoa {
    saudacao() {
      return "Olá aluno!"
    }
  }
  
  let pessoa = new Pessoa()
  console.log(pessoa.saudacao()) 
  
  let trabalhador = new Trabalhador()
  console.log(trabalhador.saudacao()) 
  
  let aluno = new Aluno()
  console.log(aluno.saudacao()) 
  