class Pajaro {
    volar() {
        console.log("Pajaro");
    }
    ponerHuevos() {
        console.log("Pone huevos");
    }
}
class Fish {
    constructor() {
        //	Solo	para	el	ejemplo
    }
    nadar() {
        console.log("PEZ")
    }
    ponerHuevos() {
        console.log("Pone huevos");
    }
}
function getAnimal(): Fish | Pajaro {
    var a: Fish = new Fish();
    return a;
}
let mascota = getAnimal();
console.log(getAnimal());
mascota.ponerHuevos();
//	ASERCIÓN
if ((<Fish>mascota).nadar) {
    (<Fish>mascota).nadar();
} else if ((<Pajaro>mascota).volar) {
    (<Pajaro>mascota).volar();
}