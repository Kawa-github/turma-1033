// Crie uma classe nomeada `Usuario` com o um atributo privado `senhas` e um método `alterarSenha`.

// - Caso a nova senha seja igual as três últimas fornecidas o método `alterarSenha` deverá retornar: Senha não pode ser igual as três últimas utilizadas
// - Caso seja diferente deve retornar: Senha alterada com sucesso

// ---

// exemplo de uso:

// ```js
// const usuario = new Usuario("senha1");

// usuario.alterarSenha("senha2"); // Senha alterada com sucesso
// usuario.alterarSenha("senha2"); // Senha não pode ser igual as três últimas
// usuario.alterarSenha("senha3"); // Senha alterada com sucesso
// usuario.alterarSenha("senha1"); // Senha não pode ser igual as três últimas
// usuario.alterarSenha("senha4"); // Senha alterada com sucesso
// usuario.alterarSenha("senha1"); // Senha alterada com sucesso
// ```


class Usuario {
    #senhas;
  
    constructor(senhaInicial) {
      this.#senhas = [senhaInicial];
    }
  
    alterarSenha(novaSenha) {
      if (this.#senhas.slice(-3).includes(novaSenha)) {
        return "Senha não pode ser igual às três últimas utilizadas";
      } else {
        this.#senhas.push(novaSenha);
        return "Senha alterada com sucesso";
      }
    }
  }
  
  const usuario = new Usuario("senha1");
  
  console.log(usuario.alterarSenha("senha2")); // Senha alterada com sucesso
  console.log(usuario.alterarSenha("senha2")); // Senha não pode ser igual às três últimas
  console.log(usuario.alterarSenha("senha3")); // Senha alterada com sucesso
  console.log(usuario.alterarSenha("senha1")); // Senha não pode ser igual às três últimas
  console.log(usuario.alterarSenha("senha4")); // Senha alterada com sucesso
  console.log(usuario.alterarSenha("senha1")); // Senha alterada com sucesso
  