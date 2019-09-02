// Herencia
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Rhino extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 10) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Elephant extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 20) {
        console.log("Slithering...");
    }
}
// Para poder Crear un array con este typo de objetos tenemos que utilizar la clase Padre Ej:
let array: Animal[] = [new Rhino('Rinocerator'), new Snake("Serpentina"), new Elephant("Elefanton")];
// El acceso a este ejemplo sería muchisimo más sencillo
let ej2 = {
    Rhino: new Rhino('Rinocerator'), Snake: new Snake("Serpentina"), Elephant:
        new Elephant("Elefanton")
};
console.log(array);

class clase_prueba {
    constructor() {

    }

    function e(x: number);
    function e(x: String) { }
    function e(x: boolean) { }
    function e(x: Array<number>) { }
    function e(x) {
    // implementación de la función
}
}