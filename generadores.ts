function* infiniteSequence() {
    var i = 0;
    while (true) {
        yield i++;
    }
}
var iterator = infiniteSequence();
while (true) {
    console.log(iterator.next()); // { value: xxxx, done: false } para siempre
}


function* idMaker() {
    let index = 0;
    while (index < 3)
        yield index++;
}
let gen = idMaker();
console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: undefined, done: true }
// Accede a la variable por que se le ha dicho apesar de que el 'yield' no ha sido efectuado.

//------ main.ts -------function* generator(){
console.log('Execution started');
yield 0;
console.log('Execution resumed');
yield 1;
console.log('Execution resumed');
}
var iterator = generator();
console.log('Starting iteration'); // Esto se ejecutará antes que nada de dentro del método generator()
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: undefined, done: true }




function* generator() {
    var bar = yield 'Console log';
    console.log(bar); // 'Un testo inyectado' -> asignado por nextThing = iterator.nex
    t('bar')
    yield 1;
}.
const iterator = generator();
// Inicia la ejecucion
const foo = iterator.next();
console.log(foo.value); // Console log
// Reanuda la ejecucion
const nextThing = iterator.next('Un texto inyectado'); // Aqui se le asigna el value a
l foo.value
console.log(nextThing);


function* logGenerator() {
    console.log(yield);
    console.log(yield);
    console.log(yield);
}
var gen = logGenerator();
// the first call of next executes from the start of the function
// until the first yield statement
gen.next(); 
gen.next('pretzel'); // pretzel
gen.next('california'); // california
gen.next('mayonnaise'); // mayonnaise

// --------- test.ts -----function* generator() {
    try {
        yield 'foo';
        throw Error("Test");
}
catch(err) {
        console.log(err.message); // bar!
}
}
var iterator = generator();
// Start execution till we get first yield value
var foo = iterator.next();
console.log(foo.value);
// como está comentado la excepción no se ejuta ya que no hay un 'next()'
//var foo = iterator.next();