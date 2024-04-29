//2. Escribe un programa que genere la tabla de multiplicar de un número dado.

function tablasDeMultiplicar() {
    let numero = parseInt(prompt("ingrese el numero el cual requiere su tabla de multiplicar"))

    for(let i = 1; i<=10; i++){
        multi= numero * i;
       document.write(`${numero} x ${i} = ${multi} <br>`) 
    }
}

tablasDeMultiplicar()