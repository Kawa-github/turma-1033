// Observe a seguinte classe:

// ```js
// class Usuario {
//   usuarios = ["mario@luigi.com", "peach@apple.com"];

//   constructor(email) {
//     this.email = email;
//   }

//   esqueciSenha(email) {
//     if (this.usuarios.includes(email)) {
//       return EsqueciSenhaUtils.gerarToken(email);
//     } else {
//       return "E-mail não encontrado";
//     }
//   }

//   validarToken(email, token) {
//     return EsqueciSenhaUtils.validarToken(email, token);
//   }
// }
// ```

// ---

// Crie uma classe nomeada `EsqueciSenhaUtils` com os seguintes métodos `gerarToken`, `validarToken`.

// - `gerarToken(email)` deve retornar um `token` que foi associado ao `email`. O token pode ser do tipo `string` ou `number`, como por exemplo gerado pelo método `Math.random()`

// - `validarToken(email, token)` deve validar se o token gerado é o mesmo que foi associado anteriormente ao email


class EsqueciSenhaUtils {
    static tokens = {}
  
    static gerarToken(email) {
      const token = Math.random().toString(36).substring(2, 12) 
      this.tokens[email] = token
      return token
    }
  
    static validarToken(email, token) {
      const tokenAssociado = this.tokens[email]
      return token === tokenAssociado
    }
  }
  
  class Usuario {
    usuarios = ["mario@luigi.com", "peach@apple.com"]
  
    constructor(email) {
      this.email = email
    }
  
    esqueciSenha(email) {
      if (this.usuarios.includes(email)) {
        return EsqueciSenhaUtils.gerarToken(email)
      } else {
        return "E-mail não encontrado"
      }
    }
  
    validarToken(email, token) {
      return EsqueciSenhaUtils.validarToken(email, token)
    }
  }
  
  const usuario = new Usuario()
  const email = "mario@luigi.com"
  const token = usuario.esqueciSenha(email)
  console.log(`Token gerado: ${token}`)
  
  const isValidToken = usuario.validarToken(email, token)
  console.log(`Token é válido: ${isValidToken}`)
  