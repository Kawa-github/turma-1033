// Crie uma classe nomeada `Usuario` com o seguinte método `login(email, password)` para autenticar o usuário.

// - No caso do e-mail e senha forem iguais aos cadastrados o retorno deverá ser: Login realizado com sucesso
// - No caso do e-mail e senha forem diferentes aos cadastrados o retorno deverá ser: Falha na autenticação
// - No caso da senha ser incorreta para a mesma entrada de e-mail por 3 vezes ou mais deve retornar: Conta bloqueada, contate o suporte"

// exemplo de uso

// ```js
// const js = new Usuario("j@vascript.com", "123ABC");
// js.login("j@vascript.com", "123ABC"); // Login realizado com sucesso
// js.login("j@vascript.com", "123"); // Falha na autenticação
// js.login("j@vascript.com", "123"); // Falha na autenticação
// js.login("j@vascript.com", "123"); // Conta bloqueada, contate o suporte
// ```



class Usuario{
    #password
    #contador = 0
    constructor(email, password){
        this.email = email
        this.#password = password
        this.#contador
    }

    login(email,password){
        if(this.email == email && this.#password == password){
            console.log("Login realizado com sucesso!")
        }

        else if(this.email != email || this.#password != password){
            console.log("Falha na autenticação!")
        }

        if(this.email == email && password != this.#password ){
            ++this.#contador
            // console.log(this.#contador)
            if(this.#contador == 3){
                throw new Error("Conta bloqueada, contate o suporte.")
            }
        }
    }
}

let js = new Usuario("j@vascript.com", "123ABC");
js.login("j@vascript.com", "123ABC"); // Login realizado com sucesso
js.login("j@vascript.com", "123"); // Falha na autenticação
js.login("j@vascript.com", "123"); // Falha na autenticação
js.login("j@vascript.com", "123"); // Conta bloqueada, contate o suporte