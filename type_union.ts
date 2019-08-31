interface Pajaro {
    volar();
    ponerHuevos();	//	Los	2	pueden
}
interface Pez {
    nadar();
    ponerHuevos();	//	Los	2	pueden
}
function getAnimal(): Pez | Pajaro {
    var a: Pez;
    return a;
}
let mascota = getAnimal();
mascota.ponerHuevos();	//	Esto	funcionaría
mascota.swim()	//	Esto	da	error