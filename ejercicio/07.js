// 7. Escribe un programa que tome un string como entrada y cuente el número de vocales que contiene.

let string = prompt("escribe una palabra")
let vocales= [a ,e ,i ,o ,u]
let cont = 0; // lleva la cuenta del numero de las vocales encontradas en el string

//indexoF : esta funcion ayuda  a encontra la ubicacion de un elemento especifico dentro de un arreglo de lo contrario si el elemnto no esta en el arrglo la funcion devolvera menos1;

function contadorVocales(string){
    for(let i=0; i< string.length; i++){
        if(vocales.indexOf(string[i])!== -1) // en cada iteracion , se verifica si el caracarter actual en la posi i esta presente en el array vocales 
        cont ++;
    

    }
    return cont
}

console.log (contadorVocales(string));