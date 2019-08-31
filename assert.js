var Pajaro = /** @class */ (function () {
    function Pajaro() {
    }
    Pajaro.prototype.volar = function () {
        console.log("Pajaro");
    };
    Pajaro.prototype.ponerHuevos = function () {
        console.log("Pone huevos");
    };
    return Pajaro;
}());
var Pez = /** @class */ (function () {
    function Pez() {
        //	Solo	para	el	ejemplo
    }
    Pez.prototype.nadar = function () {
        console.log("PEZ");
    };
    Pez.prototype.ponerHuevos = function () {
        console.log("Pone huevos");
    };
    return Pez;
}());
function getAnimal() {
    var a = new Pez();
    return a;
}
var mascota = getAnimal();
console.log(getAnimal());
mascota.ponerHuevos();
//	ASERCIÓN
if (mascota.nadar) {
    mascota.nadar();
}
else if (mascota.volar) {
    mascota.volar();
}
