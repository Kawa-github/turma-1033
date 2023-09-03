// Crie uma classe nomeada `Usuario` com os seguintes atributos `name`, `username`, `password`.

// O atributo `password` deve ser privado, no typescript é usado o modificador de acesso `private`, no JS é usado o símbolo `#`.
// Adicione o método `login(username, password)` para autenticar o usuário

// No caso do usuário e senha forem iguais aos cadastrados o retorno deverá ser: Login realizado com sucesso
// No caso do usuário e senha forem diferentes aos cadastrados o retorno deverá ser: Falha na autenticação
// exemplo de uso

// ```js
// const js = new Usuario("JavaScript", "js", "myPassw0rd!");
// js.login("js", "myPassw0rd!"); // Login realizado com sucesso
// ```

// ---

// Nota: Utilize o `#` para esse exercício, exemplo simplificado de uso com #:

// ```js
//   #atributoPrivado;
//   ...
//   this.#atributoPrivado = valor;
// ```


class Usuario{
    #password
    constructor(name, username, password) {
        this.name = name 
        this.username = username
        this.#password = password    
    }

    login(username, password){
        if(username == this.username && password == this.#password){
            console.log("Login realizado com sucesso!")
        }else{
            throw new Error("Falha na autenticação.")
        }
    }
}

let user = new Usuario("Kawã", "kawa", 123456)
user.login("kawa",123456)


let user2 = new Usuario("João", "jao", "jaojao")
user.login("jao","jaaaao")