// 5. Escribe un programa que realice las operaciones básicas de suma, resta, multiplicación y división. El programa debe solicitar al usuario dos números y la operación que desea realizar.

let numero1 = parseInt(prompt("ingrese el primer valor"));
 let numero2 = parseInt(prompt("ingrese el segundo valor "));
 let operación=prompt("que operacion quiere hacer");
 let resultado;

 switch(operación){
     case "+":
         resultado= numero1 + numero2;
         document.write(resultado);
         break
    
     case "-":
         resultado= numero1 - numero2;
         document.write(resultado);
         break

     case "*":
         resultado= numero1 * numero2;
         document.write(resultado);
         break

     case "/":
         resultado= numero1 / numero2;
         document.write(resultado);
         break
 }
 
