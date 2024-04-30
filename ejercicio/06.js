//6.Escribe un programa que tome como entrada tus nombres y apellidos completos y cuente cuantos caracteres tiene, sin tener en cuenta los espacios.



// let cantidadCarateres = nombrecompleto(nombre);
// console.log("la cantidad de carcateres en tu nombre es de "+ cantidadCarateres);

function contarCaracteres(nombreCompleto) {
    var numCaracteres = 0;
    // Recorrer cada caracter del nombre completo
    for (let i = 0; i < nombreCompleto.length; i++) {
        // Si el caracter actual no es un espacio en blanco, incrementar el contador
        if (nombreCompleto[i] !== ' ') {
            numCaracteres++; //Si el caracter actual no es un espacio en blanco, incrementa 
        }
    }
    return numCaracteres;
}


var nombreCompleto = prompt("Ingresa tus nombres y apellidos completos:");
var cantidadCaracteres = contarCaracteres(nombreCompleto);
console.log("La cantidad de caracteres en tu nombre completo es: " + cantidadCaracteres);

