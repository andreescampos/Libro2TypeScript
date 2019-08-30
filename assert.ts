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
let pet = getAnimal();
console.log(getAnimal());
pet.ponerHuevos();
//	ASERCIÓN
if ((<Fish>pet).nadar) {
    (<Fish>pet).nadar();
} else if ((<Pajaro>pet).volar) {
    (<Pajaro>pet).volar();
}