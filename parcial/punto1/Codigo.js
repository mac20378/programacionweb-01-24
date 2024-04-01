function sumarCuadros(arrayNumeros) {
  let sum = 0;
    let total = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
      sum = arrayNumeros[i];
      total += sum;
      console.log(`+${sum}+`);

    }
    return console.log(`+${total}+`);

}
  
const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
  
console.log(sumarCuadros(arrayNumeros));
