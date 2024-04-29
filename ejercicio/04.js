// 4.Escribe un programa que calcule el factorial de un número.

let numero = parseInt(prompt("ingrse el numero al cual le quiere sacar el factorial"))
let resultado =1;
for(let i = 1; i<=numero; i++){
    resultado=resultado * i ;

}
document.write(resultado);