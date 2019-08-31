interface Bird {
    volar();
    ponerHuevos();	//	Los	2	pueden
}
interface Fish {
    nadar();
    ponerHuevos();	//	Los	2	pueden
}
function getAnimal(): Fish | Bird {
    var a: Fish;
    return a;
}
let mascota = getAnimal();
mascota.ponerHuevos();	//	Esto	funcionaría
mascota.swim()	//	Esto	da	error