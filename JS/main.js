'use strict'

alert("Hola Mundo Con JS");
/*
for (let numero = 0; numero <= 10; numero++) {
    console.log(numero);
    //debugger;
}*/

var resultado = confirm("¿Estas Seguro de continuar?");//mensaje de confirmacion de ingreso a la pagina
console.log(resultado);
/**if (resultado == true){
var respuesta = prompt("¿ingresar un numero par?", null);//la funcion promt era para poder solicitar datos al ingresar a la pagina
while (isNaN(respuesta)){//la funcios IsNan es para comprobar si los datos que se tienen son numericos
    
}
for (let index = 1; index <= 10; index++) {
   document.write(respuesta * index+"<br/>");
    
}
//console.log(respuesta);

}
else{
debugger;
}**/
/*
- Ejercicio De Calculadora
- Se deben pedir 2 numeros
- Si se ingresan datos diferentes a numeros de deben de pedir nuevamente
- Se mostraran los resultados de la operaciones basica ( +, -, *, /)
*/
var numero1 = parseInt(prompt("Ingresar el primer numero", null));
var numero2 = parseInt(prompt("Ingresar el segundo numero", null));

while(numero1<0 || numero2<0 || isNaN(numero1) || isNaN(numero2))
{
    numero1 = parseInt(prompt("Ingresar el primer numero", null));
    numero2 = parseInt(prompt("Ingresar el segundo numero", null));
}

var resultado = "La suma es igual a: " + (numero1+numero2) + "<br>"+
                "La resta es igual a: " + (numero1-numero2) + "<br>"+
                "La multiplicación es igual a: " + (numero1*numero2) + "<br>"+  
                "La division es igual a: " + (numero1/numero2) + "<br>";
