// Crie uma classe nomeada `Newsletter` com o atributo `email`.

// O atributo `email` deve ser privado, no typescript é usado o modificador de acesso `private` no JS é usado o símbolo `#`.

// Adicione o método `inscrever(email)` para inscrever o email.

// Adicione o método `cancelar(email)` para cancelar o email.

// No caso do email não existir o retorno deverá ser: E-mail cadastrado com sucesso

// No caso do email já tiver sido cadastrado previamente o retorno deverá ser: E-mail já se encontra cadastrado

// No caso de cancelamento do email o retorno deverá ser: E-mail removido

// exemplo de uso

// ```js
// const js = new Newsletter();
// js.inscrever("javascripto@js.com"); // E-mail cadastrado com sucesso
// js.inscrever("javascripto@js.com"); // E-mail já se encontra cadastrado
// js.cancelar("javascripto@js.com"); // E-mail removido
// js.inscrever("javascripto@js.com"); // E-mail cadastrado com sucesso
// ```

// ---

// Nota: Utilize o `#` para esse exercício, exemplo simplificado de uso com #:

// ```js
//   #atributoPrivado;
//   ...
//   this.#atributoPrivado = valor;
// ```


class Newsletter {
    #emailsInscritos;
  
    constructor() {
      this.#emailsInscritos = new Set();
    }
  
    inscrever(email) {
      if (this.#emailsInscritos.has(email)) {
        return "E-mail já se encontra cadastrado";
      } else {
        this.#emailsInscritos.add(email);
        return "E-mail cadastrado com sucesso";
      }
    }
  
    cancelar(email) {
      if (this.#emailsInscritos.has(email)) {
        this.#emailsInscritos.delete(email);
        return "E-mail removido";
      } else {
        return "E-mail cadastrado com sucesso";
      }
    }
  }
  
  const js = new Newsletter();
  console.log(js.inscrever("javascripto@js.com")); // E-mail cadastrado com sucesso
  console.log(js.inscrever("javascripto@js.com")); // E-mail já se encontra cadastrado
  console.log(js.cancelar("javascripto@js.com")); // E-mail removido
  console.log(js.inscrever("javascripto@js.com")); // E-mail cadastrado com sucesso
  