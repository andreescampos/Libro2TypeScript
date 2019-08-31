class Pajaro {
    volar() {
        console.log("Pajaro");
    }
    ponerHuevos() {
        console.log("Pone huevos");
    }
}
class Pez {
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
function getAnimal(): Pez | Pajaro {
    var a: Pez = new Pez();
    return a;
}
let mascota = getAnimal();
console.log(getAnimal());
mascota.ponerHuevos();
//	ASERCIÓN
if ((<Pez>mascota).nadar) {
    (<Pez>mascota).nadar();
} else if ((<Pajaro>mascota).volar) {
    (<Pajaro>mascota).volar();
}