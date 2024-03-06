/*const nombre = "pedrito";

nombre= "jhon";
console.log(nombre);*/

/*function saludar(nombre){
    let saludo = "const";
    saludo = nombre;
    console.log("hola" ,$,{nombre});
}
saludar("Pedrito");*/


function contraseña_valida(input){
    return input == "2F" || input == "3f"
}
console.log(contraseña_valida("3f"))

/*Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos.
Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.*/



function calcular_impuestos(edad,ingresos){
    if(edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.40;
    } else {
        return 0;
    }
}
console.log(calcular_impuestos(20,5000))



// funcion declarativa
function contraseña_valida(input){
    return input == "2F" || input == "3f"
}
console.log("contraseña_valida",contraseña_valida("3f"))


// funcion anonima
let contraseñavalida2 = function (input) {
    return input == "2F" || input == "3f"
}
console.log("contraseñavalida2",contraseñavalida2("3f"))

// funcion de flecha
let contra = (input) => {
    return input == "2F" || input == "3f"
}
console.log("contra", contra("FF"))

let validar_mujeres = (mujer)=>{
    const mujeres=["Danna","Darly","Salome"];
    return mujeres.find(muj => muj.toLowerCase() == mujer.toLowerCase());
}

console.log(validar_mujeres("Danna"))

let splitfun = (nombres) =>{
    const nombre = nombres.split("-")[0];
    const apellidos = nombres.split("-")[1];
    const edad = nombres.split("-")[2];
    console.log(
        `mi nombre es: ${nombre} ${apellidos} y tengo ${edad}`
    )
}

splitfun("amilkar-hernandez-32")

const array = [{
    Name:  'danna',
    lastname: 'florez',
    age: 23
},{
    Name:  'daniel',
    lastname: 'ribio',
    age: 19
}];

let funcionObjeto = (arrayObjetos) => {
    //arrayObjetos.array.forEach((object) => console.log(object.Name))
    arrayObjetos.array.map((object) => {
        object.Name == 'danna' ? object.Name = 'Farid' : null;
        console.log(`Nombres: ${object.age}`)})
}



/*Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string.*/

function likes(number) {
    if (number < 1000) {
        return number.toString();
    } else if (number < 1000000) {
        return (number / 1000).toFixed(0) + "K";
    } else {
        return (number / 1000000).toFixed(0) + "M";
    }
}

console.log(likes(1400));
console.log(likes(34567));
console.log(likes(7456345));
console.log(likes(999));
console.log(likes(8765432456789));