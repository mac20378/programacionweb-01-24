/* 1. Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a 
"2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.*/

let contrasenaValida = (str) => {
    return str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9";
};

console.log(contrasenaValida("2Fj(jjbFsuj")); //true
console.log(contrasenaValida("eoZiugBf&g9")); 
console.log(contrasenaValida("hola")); // false

/* 2. El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula: peso / altura^2
Escribir una función llamada BMI que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:
"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30*/

let BMI = (peso, altura) => {
    const bmicalculo = peso / (altura * altura);
    if (bmicalculo < 18.5) {
      return "Bajo de peso";
    } else if (bmicalculo >= 18.5 && bmicalculo <= 24.9) {
      return "Normal";
    } else if (bmicalculo >= 25 && bmicalculo <= 29.9) {
      return "Sobrepeso";
    } else {
      return "Obeso";
    }
  };

console.log(BMI(65, 1.8)); // "Normal"
console.log(BMI(72, 1.6)); // "Sobrepeso"
console.log(BMI(52, 1.75)); //  "Bajo de peso"
console.log(BMI(135, 1.7)); // "Obeso"

/* 3. Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:
"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.*/
 
let fizzBuzz = (numero) => {
    if (numero % 3 === 0 && numero % 5 === 0) {
      return "fizzbuzz";
    } else if (numero % 3 === 0) {
      return "fizz";
    } else if (numero % 5 === 0) {
      return "buzz";
    } else {
      return numero;
    }
};

console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8

/* 4. Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):
Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.*/

let contarRango = (inicio, fin) => {
    let contador = 0;
    for (let i = inicio + 1; i < fin; i++) {
      contador++;
    }
    return contador;
};

console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0

/* 5. Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final.
La función debe retornar la suma de los números en ese rango (incluyéndolos).
Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.*/

let sumarRango = (inicio, fin) => {
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
      suma += i;
    }
    return suma;
};

console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 0

/* 6. Escribir una función llamada numeroDeAes que reciba un string
y retorne el número de veces que aparece la letra "a":*/

let numeroDeAes = (str) => {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "a") {
        contador++;
      }
    }
    return contador;
};

console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0

/* 7. Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter).
La función debe retornar el número de veces que aparece el caracter en el string.*/

let numeroDeCaracteres = (str, char) => {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        contador++;
      }
    }
    return contador;
};

console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4

/* 8. Escribir una función llamada sumarArreglo que reciba un arreglo de números 
y retorne la suma de todos los elementos.*/

let sumarArreglo = (arreglo) => {
    let suma = 0;
    arreglo.forEach(numero => {
      suma += numero;
    });
    return suma

}
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0

/* 9. Escribir una función llamada multiplicarArreglo que reciba un arreglo de números 
y retorne la multiplicación de todos los elementos.*/

let multiplicarArreglo = (arreglo) => {
    if (arreglo.length === 0) {
      return 1;
    }
    return arreglo.reduce((total, numero) => total * numero);
};
  
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1

/* 10. Escribir una función llamada removerCeros que reciba un arreglo de números 
y retorne un nuevo arreglo excluyendo los ceros (0).*/

let removerCeros = (arreglo) => {
    return arreglo.filter(numero => numero !== 0);
};

console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []



