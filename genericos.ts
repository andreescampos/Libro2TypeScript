function echo<T>(arg: T): T {
    return arg;
}
let a = echo<number>(1);	//El tipo es numero
let b = echo<String>("Hola	mundo");	//	El	typeof	es	StringF



class Generic<T>	{
    add: (X: T, y: T) => T;
}
let myGeneric = new Generic<number>();
console.log(myGeneric.add = function (xconsole.log(myGeneric.add(3, 4));


//	Interfaz que asegura que el	parametro tenga	el metodo length
interface withLength {
    length: number;
}
//	El parametro hereda	de la interfaz la cual fuerza al parametro tenga el	métod length
function echo1<T extends withLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}
//	Esto	funcionará
let c = echo1("aaa");
let t = echo1({ length: 2, name: "aa" });
//	Esto	NO	funcionará
let d = echo1(1);



function copyFields<T extends U, U>(source: T, target: U): U {
    for (let id in source) {
        if (target[id] != undefined) {
            source[id] = target[id];
        } else {
            target[id] = source[id];
        }
    }
    return target;
}
let a = { a: 1, b: 2, c: 3 };
let b = copyFields(a, { b: 10, c: 20 });	//	Esto	funcionará
let c = copyFields(a, { Q: 20 });	//	Esto	NO	funcionará
console.log(b);	//	1,	10,	20
console.log(c);	//	Lo	devuelve	si	lo	compilas	a	pesar	de	saber	que	está	mal