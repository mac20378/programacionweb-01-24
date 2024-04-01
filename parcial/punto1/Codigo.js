function sumarCuadros(arrayNumeros) {
    let total = 0;
    let matriz = "";
    let matriz_total ="";
    for (let i = 0; i < arrayNumeros.length; i++) {
      const sum = arrayNumeros[i];
      total += sum;
      const result = "+"+"-".repeat(String(sum).length)+"+";
      matriz += `\n${result}\n|${sum}|\n${result}\n`;
      console.log(matriz);

    }
    const result = "+"+"=".repeat(String(total).length)+"+";
    matriz_total += `\n${result}\n|${total}|\n${result}\n`;
    return console.log(matriz_total);

}
  
const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
  
console.log(sumarCuadros(arrayNumeros));
