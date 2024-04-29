//3. Escribe una función que tome un string como entrada y devuelva la misma cadena con las letras en orden inverso (sin usar funciones de JavaScript).

function inverso() {
    let cadena = prompt("ingrese una palabra:");
    let cadenaVacia ="";
    i= cadena.length -1;

    while(i >= 0){ // este bucle recorre la cadena de atras hacia adelante 
        cadenaVacia = cadenaVacia + cadena [i];
        i = i -1;
    }

    document.write(cadenaVacia);
    
}
inverso();