export class Camiseta{
    public color: string;
    public marca: string;
    public modelo: string;
    public talla: string;
    public precio: number;
    
    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }

}

var camisa = new Camiseta();
    camisa.color = "rojo";
    camisa.marca = "adidas";
    camisa.modelo = "TXS";
    camisa.precio = 190000;
    camisa.talla = "M";

    
var playera = new Camiseta();
playera.color = "azul";
playera.marca = "nike";
playera.modelo = "PLT";
playera.precio = 150000;
playera.talla = "XL";

    console.log(camisa, playera);
