// Observer a seguinte classe:

// ```js
class Empresa {
  listaDeEmpregados = [
    {
      nome: "João Silva",
      salario: 1500,
    },
    {
      nome: "Maria José",
      salario: 2500,
    },
    {
      nome: "Simplício Simplório",
      salario: 2400,
    },
    {
      nome: "Mario João",
      salario: 2100,
    },
  ];

  mediaSalarial() {
    return Relatorio.mediaSalarial(this.listaDeEmpregados);
  }

  menorSalario() {
    return Relatorio.menorSalario(this.listaDeEmpregados);
  }
  maiorSalario() {
    return Relatorio.maiorSalario(this.listaDeEmpregados);
  }
}

class Relatorio {
    static mediaSalarial(lista) {
      const totalSalarios = lista.reduce((acc, empregado) => acc + empregado.salario, 0)
      return totalSalarios / lista.length
    }
  
    static menorSalario(lista) {
      return lista.reduce((min, empregado) => (empregado.salario < min.salario ? empregado : min))
    }
  
    static maiorSalario(lista) {
      return lista.reduce((max, empregado) => (empregado.salario > max.salario ? empregado : max))
    }
  }
  
  const empresa = new Empresa()
  
  console.log("Média Salarial:", empresa.mediaSalarial()) 
  console.log("Menor Salário:", empresa.menorSalario()) 
  console.log("Maior Salário:", empresa.maiorSalario()) 
