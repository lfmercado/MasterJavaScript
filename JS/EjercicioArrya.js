'use strict'

/**
 * hacer un programa que pida 6 numeros y los meta en un array
 * mostrar el array entero, todos sus elementos en el cuerpo de la pagina y en la consola
 * arreglar el vector y mostrarlo
 * invertir su orden y mostrarlo
 * mostrar cuantos elementos tiene el array
 * hacer una busqueda introducida por el usuario y nos diga si lo encuentra y su indice
 */

var array = [];
var i = 0;
 do{
var numero =  parseInt(prompt("Favor ingresar un valor numerico: ", 0));
if (isNaN(numero) == false) {
    array.push(numero);
    console.log(array[i]);
    console.log(numero);
    i++;
    console.log(i);
}
else{
    alert("No has ingresado un numero!! Favor ingresa un numero!");
} 
 }while(i < 6);
 console.log(array);
 document.write("Los numeros Agregados en el arreglo son : " + "<br>");
 array.forEach(element => {
   
    document.write(element  +"<br>");  
 });


 document.write("<br> <br> <br>");
 array.sort();
 document.write("Los numeros arrglados en el arreglo : "  +"<br>");
 array.forEach(element => {
   
    document.write(element  +"<br>");  
 });

 document.write("<br> <br> <br>");

 array.reverse();
 document.write("Los numeros invertidos en el arreglo son : "  +"<br>");
 array.forEach(element => {
   
    document.write(element  +"<br>");  
 });
document.write("<br> <br> <br>");

 document.write("Los cantidad de numeros en el arreglo es igual a : "  +"<br>");
 document.write(array.length);

 document.write("<br> <br> <br>");
 var buscar =parseInt(prompt("ingrese el numero que desea buscar : ", 0));
 var busqueda = array.find(array => array == buscar); //con esto sacamos el texto
 var index = array.findIndex(array => array == buscar);
 if (busqueda != null) {
     console.log("el numero si se encuentra!  " + busqueda)
     document.write("el numero si se encuentra!  " + busqueda +"<br>")

     console.log("el indice del numero es!  " + index)
     document.write("el indice del numero es!  " + index)
 }
 else{
     console.log("numero no se encuetra en el array :(" );
     console.log("el numero buscado fue: " + buscar);
     document.write("numero no se encuetra en el array :("+"<br>");
     document.write("el numero buscado fue: " + buscar);
 }