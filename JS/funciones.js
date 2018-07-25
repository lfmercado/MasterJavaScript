'use strict'


//parametros de tipo SPREAD
/**
 * los parametros de tipo spread son cuando se tienen uno o varios arrays y se ingresan a la funcion de la siguiente manera
 */
//Este es el array del ejemplo

var array = [4,5,6,7];
calculadora(...array, 2, 3);//como en la funcion se ha declarado que los primeros 2 numeros sean asignados a numero1 y numero2 los numero 4 y 5 estaran en esas variables
                            //el resto de numeros estaran dentro del array
//parametros de tipo REST
//calculadora(3, 3, 4, 5,6, 12,2,4,5,22,3,53,1,3,4,5,45,23,21,13,45,53);
function calculadora(numero1, numero2, ...numeros_restantes){//numero_restantes pasa a ser un parametro tipo REST ya que este puede contener una gran cantidad de datos sin antes saber cuantos se iban a introducir y los guarda en un Array

    //console.log("el numero 1 es :" + numero1);
    //console.log("numero 2 es : "+numero2);
    //console.log(numeros_restantes);
    var sumar =  numero1 + numero2;
    for(let i=0;i<numeros_restantes.length;i++){
        var resto = numero1 + numeros_restantes[i];
      //  console.log(resto);
    }
    
}
/**
 * Funciones anonimas
 * Es una funcion que no tiene nombre
 */
/*
 var pelicula = function(nombre)
 {
    return "la pelicula es :" +nombre;
 }*/

 //CallBack

 function sumame (numero1 , numero2, sumaAlCuadrado, sumasPorDos){//Aqui se ingresan los parametros de la funcion
    var suma = numero1 + numero2;
    console.log("La suma de los numeros es igual a: " + suma);
    sumaAlCuadrado(suma);//Aqui le pasamos el dato a la funcion 1 para poder acceder a ella
    sumasPorDos(suma);//Aqui le pasamos el dato a la funcion 2 para poder acceder a ella
    
 }

 sumame(2, 4, function(dato){//esta es la primera funcion
    console.log("el cuadrado es igual a : " + (dato * dato));
 }, 
 function(dato){//Esta es la segunda funcion
    console.log("La suma por dos es igual a : "+(dato+dato));
 });
 
 //El hambito de las varibles

 function holaMundo(texto){
    console.log(texto);
    console.log(numero);
    var hola_mundo = "texto dentro de funcion";
    console.log(hola_mundo);
 }

var texto = "hola mundo";

var numero = 1322;
holaMundo(texto);
//console.log(hola_mundo);//Aqui se presentara un error debido a que aunque por medio de la funcion podemos acceder a variables que esten por fuera de este
                        //las variables que se crean dentro de la funcion solo pueden ser accedidas dentro de esta.


//Metodos para transformas textos
/**
 * Para pasar a un String  -> variable.toString();
 * Ver el tipo de dato -> typeof variable
 * pasar todo el texto a mayuscula  -> variable.ToUpperCase();
 * pasar todo el texto a minuscula -> variable.toLowerCase();
 * calcular la longitud de un texto o la cantidad de elementos de un array-> variable.length;
 * Definir una variable boolean dependiendo de un caracter inicial -> variable1 = variable.startWith("caracter");
 * Definir una variable boolean dependiendo de un caracter final -> variable1 = variable.endsWith("caracter");
 * Definir una variable boolean dependiendo de un caracter -> variable1 = variable.includes("caracter");
 * 
 * Para realizar una busqueda de una palabra especifica dentro de una cadena de texto de puede hacer de la siguiente manera
 *      variable = texto.indexOf("palabra");
 * la variable "variable" tomara la pocision en la cual inicie la palabra 
 * ejem:
 */

 /**
  * Reemplazar una palabra en una cadena de caracteres -> variable.replace("palabra a reemplazar", "nueva palabra");
  * cortar una cadena a partir del caracter deseado -> variable.slice(14); se ingresa el numero de la pocision que se quiere cortar
  * por medio de la funcion slice se puede dar el numero inicial y el final para asi limiar la cadena al valor deseado
  * Recortar una cadena y guardarla en un array -> variable.split("aqui se ingresa el parametro clave para separar el array");
  * Quitar los espacios sobrantes, tanto iniciales como finales de una cadena -> variable.trim();
  */

 var texto = "buscando la palabra clave dentro de la cadena de texto clave";

 var busqueda = texto.indexOf("clave");//la palabra que se agrega en el index debe de ser exactamente igual a la que se espera encontrar
                                        //Encuentra solo la primera cohincidencia
 var busqueda1 = texto.lastIndexOf("clave");

 //Metodo Match 
 var match = texto.match("clave");
//por medio de este metodo podemos buscar tambien cuantas veces se repite en una cadena de texto
var repetidas = texto.match(/clave/gi);//crea un array solo con la palabra buscada y asigna a una casilla cada vez que encuentra la palabra
//otro metodo para sacar los caracteres de una cadena de texto es el siguiente
var palabra = texto.substr(20,5);//el primer parametro es desde que punto en la cadena se inicia a extraer el texto y el segundo son cuantas posiciones se van a tomar

 console.log(palabra);//la variable a tomado la pocision 20


 var array = [2, "hola", "probando array", "con un", "foreach"];

 array.forEach((element, index, array )=> {//el primer paramatro son los elementos del array, el 2do es el indice y el tercero puede ser el array 
    document.write(index + " " + element + " ");
 });
 //Funcion push es para meter elementos al array, el pop es para eliminar el ultimo elemento
 //la funcion array.splice(index, 1); sirve para eliminar elementos a partir de un indice en este caso solo elimina 1
 //la funcion join convierte un array a un string separando por , cada uno de sus elementos


 //El metodo sort nos ayuda para organizar un array alfabeticamente
 //El metodo reverse nos sirve para invertir el array, poner  el array de atras hacia adelante

 //Para realizar una busqueda en un array
var busqueda = array.find(array => array == "hola"); //con esto sacamos el texto
//con la funcion findIndex nos trae el indice
//para buscar un dato numerico dentro de un array en caso de que este solo contenga numeros

var arrayNumeros =[10,20,40,4,62,83,12,34]
var busqueda_numeros = arrayNumeros.some(array => array < 10);//esto nos retornara false true pq si hay numeros menores a 10

