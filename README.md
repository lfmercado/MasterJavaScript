Se crea un componente junto con su vista, ese componente 

 ng g conmponent "NOMBRE DE COMPONENTE"
  por medio del comando anterior podemos crear un nuevo componente el cual ya tendria toda una estructura
  base y vendria añadido al app.module

  Evento keyUp
   por medio de este evento podemos capturar la ultima tecla pulsada por el usuario, puede llegar a ser de mucha utilidad para 
   capturar la tecla ENTER para poder ejecutar los metodos sin necesidad de dar click en el boton

 Evento blur
   Por medio de este evento se puede saber cuando se ha salido del texField 
 ngClass
   nos permite asiganarle a un atributo una clase cuando se cumpla una condicion
 
 router.navigate(['/zapatillas'])
 por medio de esta directiva se puede redireccionar a una url especifica ya sea por medio de un evento o una condicion


 Las PIPES son un tipo de filtros que se le pueden aplicar a fechas, strings para poder setearlos de una manera comoda o neceseria
 se pueden descargar algunas librerias de angular 2 que vienen con muchos pipes de fechas como los que se encontrarian en angular/moment


 Cualquier problema con el angular tratr con los comandos
 npm update
 npm install 

 Para poder acceder a las url que uno crea se tiene que utilzar el "router-outlet" que es el que activa el funcionamiento del routing
 y carga un componente dentro de la pagina en funcion a la url que uno haya puesto.