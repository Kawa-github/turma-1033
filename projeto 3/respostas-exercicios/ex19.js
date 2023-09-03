// Crie uma classe nomeada `Imposto` com o seguinte método `consultarImposto`.

// - `consultarImposto(salario)` deve retornar a porcentagem de acordo com a tabela de imposto cobrado em cima do salário base, utilizando a tabela a seguir

// ---

// - de 0,00 até 1.903,98 = 0%
// - de 1.903,99 até 2.826,65 = 7.5%
// - de 2.826,66 até 3.751,05 = 15%
// - de 3.751,06 até 4.664,68 = 22.5%
// - acima de 4.664,68 = 27.5%

// ---

// exemplo de uso:

// ```js
// const imposto = new Imposto();
// imposto.consultarPorcentagem(1900); // 0
// imposto.consultarPorcentagem(1903.99); //7.5;
// ```

class Imposto{
    constructor(){

    }

    consultarImposto(salario){
        if(salario > 0 && salario <= 1903.98){
            console.log("0%")
        }else if(salario >= 1903.99 && salario <= 2826.65){
            console.log("7.5%")
        }
        else if(salario >= 2826.66 && salario <= 3751.05){
            console.log("15%")
        }
        else if(salario >= 3751.06 && salario <= 4664.68){
            console.log("22.5%")
        }
        else if(salario >= 4664.69){
            console.log("27.5%")
        }
    }
}


const imposto = new Imposto();
imposto.consultarImposto(1900); // 0
imposto.consultarImposto(1903.99); //7.5;