// Crie uma classe nomeada `Analisador` com os seguintes métodos `adicionar(name, email)` e `converterParaObjeto()`

// O método `converterParaObjeto` irá retornar um objeto com o `name` e `email` que foi adicionado.

// exemplo de uso

// ```js
// const analisador = new Analisador();
// analisador.adicionar("João", "joao@email.com");
// analisador.converterParaObjeto(); // { email: "joao@email.com", name: "João" }
// ```


class Analisador{
    constructor(){
        this.lista = new Map();
        this.name;
        this.email;
    }

    adicionar(name,email){
        this.name = name
        this.email = email
    }
    
    converterParaObjeto(){
        let result = this.lista.set(this.name,this.email)
        console.log(result)
        
    }
}

let analisador = new Analisador()
analisador.adicionar("kawa","kawa@gmail.com")
analisador.converterParaObjeto()