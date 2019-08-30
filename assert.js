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
var Fish = /** @class */ (function () {
    function Fish() {
        //	Solo	para	el	ejemplo
    }
    Fish.prototype.nadar = function () {
        console.log("PEZ");
    };
    Fish.prototype.ponerHuevos = function () {
        console.log("Pone huevos");
    };
    return Fish;
}());
function getAnimal() {
    var a = new Fish();
    return a;
}
var pet = getAnimal();
console.log(getAnimal());
pet.ponerHuevos();
//	ASERCIÓN
if (pet.nadar) {
    pet.nadar();
}
else if (pet.volar) {
    pet.volar();
}
