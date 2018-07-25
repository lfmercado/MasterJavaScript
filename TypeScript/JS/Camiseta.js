"use strict";
exports.__esModule = true;
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
exports.Camiseta = Camiseta;
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
