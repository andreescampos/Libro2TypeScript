//For	in	accediendo	al	valor	de	una	variable	dentro	de	un	objeto:
var list = { a: 1, b: 2, c: 3 };
for (var i in list) {
    console.log(list[i]); //	1,	2,	3
}
// For	in	accediendo	al	índice	de	una	variable	dentro	de	un	objeto;
var list2 = { a: 1, b: 2, c: 3 };
for (var i in list2) {
    console.log(i); //	a,	b,	c
}
// For	of	accediendo	al	valor	de	una	variable	dentro	de	un	array:
var list3 = ["a", "b", "c"];
for (var _i = 0, list3_1 = list3; _i < list3_1.length; _i++) {
    var b = list3_1[_i];
    console.log(b); //	a,	b,	c
}
//For	of	accediendo	al	valor	de	una	variable	dentro	de	un	string:
var string = "soy yo a quien estas buscando?";
for (var _a = 0, string_1 = string; _a < string_1.length; _a++) {
    var char = string_1[_a];
    console.log(char);
}
