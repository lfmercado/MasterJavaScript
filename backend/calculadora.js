'use strict'

console.log("hola mundo desde nodeJS");

//Por medio de este comando obtenemos los parametros que se ingresan por pantalla
                                //elegimos que nos muestre desde el segundo (2) parametro que son los que introduce el usuario
                                //ya que el primero nos incluye la ruta donde se encuentra el archivo
var params =  process.argv.slice(2);
console.log(params);
//se capturan los datos y se ingresan en un array 

//para realizar una operacion con los parametros que se ingresan se hace de la siguiene manera
var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);
var numero3 = parseFloat(params[2]);
var numero4 = parseFloat(params[3]);

//se puede mostrar como un HTML
var operacion =`
        La suma de los numeros es igual a : ${numero1 + numero2+ numero3 +numero4}    
        La resta de los numeros es igual a : ${numero1 - numero2- numero3 -numero4} 
        La Multiplicacion de los numeros es igual a : ${numero1 * numero2* numero3 *numero4} 
        La division de los numeros es igual a : ${numero1 / numero2/ numero3 /numero4} 
`



console.log(operacion);
