function echo(arg) {
    return arg;
}
var a = echo(1); //El tipo es numero
var b = echo("Hola	mundo"); //	El	typeof	es	StringF
var Generic = /** @class */ (function () {
    function Generic() {
    }
    return Generic;
}());
var myGeneric = new Generic();
console.log(myGeneric.add = function (xconsole, log) { }(myGeneric.add(3, 4)));
//	El parametro hereda	de la interfaz la cual fuerza al parametro tenga el	métod length
function echo1(arg) {
    console.log(arg.length);
    return arg;
}
//	Esto	funcionará
var c = echo1("aaa");
var t = echo1({ length: 2, name: "aa" });
//	Esto	NO	funcionará
var d = echo1(1);
function copyFields(source, target) {
    for (var id in source) {
        if (target[id] != undefined) {
            source[id] = target[id];
        }
        else {
            target[id] = source[id];
        }
    }
    return target;
}
var a = { a: 1, b: 2, c: 3 };
var b = copyFields(a, { b: 10, c: 20 }); //	Esto	funcionará
var c = copyFields(a, { Q: 20 }); //	Esto	NO	funcionará
console.log(b); //	1,	10,	20
console.log(c); //	Lo	devuelve	si	lo	compilas	a	pesar	de	saber	que	está	mal
