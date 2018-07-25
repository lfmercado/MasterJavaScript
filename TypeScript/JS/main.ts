import {Camiseta} from './Camiseta';

var bicicleta = {
 color: "rojo",
 modelo: "BMX",
 frenos: "De Disco",
 velocidadMaxima: "60km",
 cambiaColor : function(nuevoColor){
    this.color = nuevoColor;
 }
};
//una variable se le pueden declarar que sea de varios tipos
var cadena: string | number = 22;
cadena = "Hola";
console.log(cadena);
//Crear un Array
var lenguajes: Array<string> =["PHP","Java","JS"];

bicicleta.cambiaColor("azul");
console.log(bicicleta);
console.log("hi");

//Funciones en TypeScript
/**
 * en typescript las funciones se les puede declaran en el parametro de entrada el tipo de dato que recibe y tambien se le puede definir el tipo
 * de dato que retorna la funcion
 */
function getNumber(numero:number = 0):string{
    return "El Numero Es: "+ numero;
};