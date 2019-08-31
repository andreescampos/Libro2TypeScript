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


//	Se	iguala	la	función	de	la	clase	a	una	variable	de	otra	clase
var growOld = person.growOld;
//	más	adelante	se	llama
growOld();

let _self = this;
something.each(function () {
    console.log(_self);	//	the	lexically	scoped	value
    console.log(this);	//	the	library	passed	value
});

class Adder {
    //	This	function	is	now	safe	to	pass	around
    add = (b: string): string => {
        return this.a + b;
    }
}
class ExtendedAdder extends Adder {
    //	Create	a	copy	of	parent	before	creating	our	own
    private superAdd = this.add;
    //	Now	create	our	override
    add = (b: string): string => {
        return this.superAdd(b);
    }
}