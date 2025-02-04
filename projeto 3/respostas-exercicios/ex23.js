// Crie uma classe nomeada `Analisador` com os seguintes métodos `mesclar(names, emails)` e `listarMesclados()`

// O método `mesclar` deverá receber dois arrays de string, o primeiro com nomes e o segundo com e-mails e deverá retornar um array de objetos associados por seus respectivos índices

// O método `listarMesclados` deverá retorna um array de objetos com os nomes e e-mails.

// exemplo de uso

// ```js
// const names = ["João", "Mário"];
// const emails = ["joao@gmail.com", "mario@msn.com"];

// const analisador = new Analisador();
// analisador.mesclar(names, emails);
// analisador.listarMesclados(); // [ { email: "joao@gmail.com", name: "João" }, { email: "mario@msn.com", name: "Mário" }]
// ```


class Analisador {
    constructor() {
      this.lista = [];
    }
  
    mesclar(names, emails) {
      for (let i = 0; i < names.length; i++) {
        
        const name = names[i];
        const email = emails[i];
        this.lista.push({ email, name });
      }
    }
  
    listarMesclados() {
      return this.lista;
    }
  }
  
  const names = ["João", "Mário"];
  const emails = ["joao@gmail.com", "mario@msn.com"];
  
  const analisador = new Analisador();
  analisador.mesclar(names, emails);
  console.log(analisador.listarMesclados());
  
