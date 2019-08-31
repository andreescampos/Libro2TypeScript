interface Pajaro {
    volar();
    ponerHuevos();
}
interface Pez {
    nadar();
    ponerHuevos();
}
function getAnimal(): Pez | Pajaro {
    var a: Pez;
    return a;
}
function isFish(mascota: Pez | Pajaro): mascota is Pez {
    return (<Pez>mascota).nadar != undefined;
}
let mascota = getAnimal();
if (isFish(mascota)) {
    (<Pez>mascota).nadar();
    console.log('glup');
} else {
    console.log('Creo que puedo volar');
    mascota.volar();
}