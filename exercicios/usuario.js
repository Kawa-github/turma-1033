class Usuario {
    constructor(email, senha) {
        this.email = email
        this.senha = senha
    }

    isAdmin(tipoUsuario) {
        if(tipoUsuario instanceof Admin){
            return true
        }else{
            return false
        }
    }
}

class Admin extends Usuario {
    constructor() {
        super()
        this.admin = true
    }
}

const User1 = new Usuario('email@teste.com', 'senha123')
const Adm1 = new Admin('email@teste.com', 'senha123')

console.log(User1.isAdmin(User1))  // Saída: false
console.log(Adm1.isAdmin(Adm1))   // Saída: true
