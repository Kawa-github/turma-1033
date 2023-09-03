// Escreve uma classe nomeada `Triangulo`, que receberá 3 parametros ex: `new Triangulo(1, 2, 3)`.

// Deve possuir um método `tipo` que retorna os tipos de triângulo se valores forem válidos.

// Um Triângulo válido possui 3 lados com medições maiores que zero, sendo que dois deles devem ser maiores que o terceiro lado.

// O retorno do método `tipo` deve ser um dos seguintes:

// -  `escaleno` - nenhum dos 3 lados é igual.
// -  `isosceles` - dois lados são iguais e um diferente.
// -  `equilatero` - possui todos os lados iguais.
// -  `invalido` - não possui lados que forme um triângulo


class Triangulo {
    constructor(lado1, lado2, lado3) {
      this.lado1 = lado1
      this.lado2 = lado2
      this.lado3 = lado3
    }
  
    tipo() {
      if (
        this.lado1 > 0 &&
        this.lado2 > 0 &&
        this.lado3 > 0 &&
        this.lado1 + this.lado2 > this.lado3 &&
        this.lado1 + this.lado3 > this.lado2 &&
        this.lado2 + this.lado3 > this.lado1
      ) {
        if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
          return 'equilatero'
        } else if (
          this.lado1 === this.lado2 ||
          this.lado1 === this.lado3 ||
          this.lado2 === this.lado3
        ) {
          return 'isosceles'
        } else {
          return 'escaleno'
        }
      } else {
        return 'invalido'
      }
    }
  }
  
  const triangulo1 = new Triangulo(1, 2, 3)
  console.log(triangulo1.tipo()) // Invalido
  
  const triangulo2 = new Triangulo(3, 3, 3)
  console.log(triangulo2.tipo()) // Equilatero
  
  const triangulo3 = new Triangulo(4, 4, 3)
  console.log(triangulo3.tipo()) // Isosceles
  
  const triangulo4 = new Triangulo(4, 5, 6)
  console.log(triangulo4.tipo()) // Escaleno
  