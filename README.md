# Paradigma Estructural
Es un paradigma de la programación que enfatiza el uso de construcciones de flujo estructurado, por ejemplo, secuencias, bucles, condicionales, para organizar y administrar el código. 

## Características del paradigma estructural en JavaScript:



**Diseño de arriba hacia abajo**


  -  Inicia con una visión general del programa.
  -  Divide el problema en módulos y submódulos más pequeños.


**Modularidad**


  -  Cada módulo tiene una función específica.
  -  Comunicación clara entre módulos mediante interfaces definidas.


**Flujo de control estructurado**


  -  Usa secuencias, decisiones (if, switch) y bucles (for, while).
  -  Evita estructuras de salto desordenadas.


**Entrada única, salida única (SESE)**


  -  Cada módulo o función tiene un solo punto de entrada y uno de salida.


**Evite las declaraciones GOTO**


  -  Se evita el uso de goto para mantener un flujo de código legible y predecible.


**Abstracción de datos**


  -  Encapsula datos en estructuras y accede a ellos mediante interfaces claras.
  -  Minimiza el uso de variables globales.


**Refinamiento escalonado**


  -  Detalla gradualmente cada módulo desde una visión general hacia aspectos específicos.


**Comentarios y documentación**


  -  Explica el propósito de funciones y estructuras.
  -  Documenta entradas, salidas y lógica general.


**Pruebas y depuración**


  -  Prueba cada módulo por separado antes de integrarlo.
  -  Depurar errores de forma localizada.


**Reutilización del código**


  -  Escribe módulos reutilizables para reducir redundancia y mejorar el mantenimiento.


**Lenguajes de programación estructurados**


  -  Lenguajes como JavaScript, Python, C o Java permiten aplicar este paradigma fácilmente.


**Diagramas de flujo y pseudocódigo**


  -  Usa diagramas de flujo o pseudocódigo antes de codificar.


**Legibilidad y estilo**


  -  Sigue convenciones claras y consistentes.
  -  Prioriza que el código sea fácil de entender.


**Refactorización**


  -  Mejora el código con revisiones periódicas.
  -  Elimina redundancias y mejora la claridad.



# Principios de la Programación Estructurada

Los principios fundamentales de la programación estructurada son reglas de diseño que buscan mejorar la claridad, calidad y mantenibilidad del código. Estos son los pilares esenciales:
1. **Principio de Secuencia**

Las instrucciones se ejecutan en orden, una después de otra, de arriba hacia abajo.

2. **Principio de Selección (Control de Flujo Condicional)**

Uso de estructuras como if, else, y switch para tomar decisiones.

3. **Principio de Iteración (Bucles)**

Repetición de bloques de código con estructuras como for, while, y do-while.


4. **Principio de Modularidad**

Dividir el programa en funciones o módulos pequeños, cada uno con una única responsabilidad.

5. **Principio de "Un Solo Punto de Salida"**

Cada función o bloque debe tener un único punto de salida (evitar múltiples return o break innecesarios).
 
6. **Principio de No Uso de Saltos Incondicionales (goto)**

Evitar saltos arbitrarios que rompan el flujo lineal del código.

7. **Principio de Legibilidad**

El código debe ser autoexplicativo, con nombres descriptivos y evitando anidaciones profundas.

8. **Principio de Evitar Efectos Secundarios**

Las funciones deben depender solo de sus parámetros y no modificar variables globales.

# Ejemplo - Programación Estructural

>  `Calcular el total de una lista de precios con descuentos y imprimir por consola el precio final`
> 
```javascript
// ❌ Versión poco estructurada
function sum(products) {
    let total = 0;
    let i = 0;
    while (i < products.length) {
        if (products[i].discount) {
            total += products[i].price * 0.9;
        } else {
            total += products[i].price;
        }
        i++;
        if (i === products.length) console.log("Total: $" + total);
    }
}
calculate([{ price: 10, discount: true }, { price: 20, discount: false }])
``` 
* **Problemas clave:**

**1. Modularidad**
 
 - El código hace demasiado en un solo bloque:
- Itera sobre un array
- Calcula descuentos
- Suma precios
- Imprime el resultado

**2. Un solo punto de salida**
El `console.log` está dentro del bucle, lo que significa que:
- La impresión ocurre en medio de la lógica de iteración
- No hay un único lugar donde se maneje la salida

**3. Legibilidad**
- Uso de un contador manual (`i`) en lugar de un `for..f`
- La condición `if (i === productos.length)` es redundante (el `while` ya controla el límite)
- El nombre de la funcion `sum()` no describe lo que realmente se esta haciendo 

```javascript
// ✅ Versión estructurada
function applyDiscount(price, hasDiscount) {
    return hasDiscount ? price * 0.9 : price;
}

function calculateTotalPrice(products) {
    let total = 0;
    for (const product of products) {
        total += applyDiscount(product.price, product.discount);
    }
    return total;
}

const total = calculateTotalPrice([{ price: 10, discount: true }, { price: 20, discount: false }]);
console.log("Total: $" + total);
``` 
# Ejercicio  - Programación Estructural
Se tiene una lista de animales y se pide crear un programa en JavaScript que convierta la edad humana en "años de mascota" para perros y gatos. Las reglas de conversión son las siguientes:
Perros: 1 año humano equivale a 7 años de perro.
Gatos: 1 año humano equivale a 5 años de gato.
El programa debe recibir la edad humana y el tipo de mascota ("perro" o "gato"), calcular la edad correspondiente de cada animal de la lista y mostrar el resultado por consola .

```
let list = [
  { name: 'Fido', age: 5, type: 'dog' },
  { name: 'Lulu', age: 10, type: 'cat' },
  { name: 'Max', age: 3, type: 'dog' },
  { name: 'Milo', age: 2, type: 'cat' },
  { name: 'Bella', age: 4, type: 'dog' },
  { name: 'Nina', age: 7, type: 'rabbit' }
];

```
