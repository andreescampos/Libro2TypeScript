var _this = this;
// Este	tipo de	función	hace referencia	al objeto que llama	a esta función
setTimeout(function () {
    console.log(this); //	Elemento	Que	llama	a	la	función
}, 2000);
//Este	tipo	de	funciones,	lo	que	hacen	es	que	el	this	no	
//hace	referencia	al	padre	sino	al	objeto que	contiene	la	función
setTimeout(function () {
    console.log(_this); //	Elemento	que	contiene	esta	función
}, 2000);
//	para	poder	definir	tipos	utilizaremos	el	O	lógico
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join("	") + value;
    }
    if (typeof padding === "string") {
        return Array(padding.length + 1).join("	") + value;
    }
    throw new Error("Expected\tString\tor\tnumber,\tgot\t'" + padding + "'\t");
}
console.log(padLeft("hello", "aaa")); //	Ejemplo	de	función	con	texto	->	Funciona
console.log(padLeft("hello", 5)); //	Ejemplo	de	función	con	número	->	Funciona
//console.log(padLeft("hello", true));		Ejemplo	de	función	con	texto	->	NO	FUNCIONA(no	compila)
//	Compiled	with	--strictNullChecks
function validateEntity(e) {
    //	Throw	exception	if	e	is	null	or	invalid	entity
}
function processEntity(e) {
    validateEntity(e);
    var s = e.name; //	Assert	that	e	is	non-null	and	access	name
}
