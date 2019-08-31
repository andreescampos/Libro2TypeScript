var inc = (x) => x + 1;

function Persona(edad) {
    this.edad = edad
    //aquí el this es el objeto	y no quien hace	la llamada
    this.growOld = () => {
        this.age++;
    }
}
var persona = new Persona(1);
setTimeout(persona.growOld, 1000);
setTimeout(function () { console.log(persona.age); }, 2000);	//	devuelve	2