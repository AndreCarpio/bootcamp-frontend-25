# Paradigma Estructural
Es un paradigma de la programación que enfatiza el uso de construcciones de flujo estructurado, por ejemplo, secuencias, bucles, condicionales, para organizar y administrar el código. 

## Características del paradigma estructural en JavaScript:

**Diseño de arriba hacia abajo**
  -  Inicia con una visión general del programa.
  -  Divide el problema en módulos y submódulos más pequeños.
**Modularidad**
**Flujo de control estructurado**
**Entrada única, salida única (SESE)**
**Evite las declaraciones GOTO**
**Abstracción de datos**
**Refinamiento escalonado**
**Comentarios y documentación**
**Pruebas y depuración**
**Reutilización del código**
**Lenguajes de programación estructurados**
**Diagramas de flujo y pseudocódigo**
**Legibilidad y estilo**
**Refactorización**

Ejemplo - Programación Estructural

function sumar(a, b) {
  return a + b;
}

let resultado = sumar(5, 3);
console.log(resultado);



Ejercicio - Programación Estructural


Verificar número par o impar
Escribe un programa en JavaScript que:
Pida al usuario un número entero.


Determine si el número es par o impar.


Muestre el resultado en consola.


Solucion:


function esPar(numero) {
   numero = parseInt(numero)
if (isNaN(numero)) {
    console.log("Entrada no válida.");
} else if ( numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}

}

let numero = esPar(5);
