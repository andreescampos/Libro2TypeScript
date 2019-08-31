//For	in	accediendo	al	valor	de	una	variable	dentro	de	un	objeto:

let list = { a: 1, b: 2, c: 3 };
for (let i in list) {
  console.log(list[i]); //	1,	2,	3
}

// For	in	accediendo	al	índice	de	una	variable	dentro	de	un	objeto;

let list2 = { a: 1, b: 2, c: 3 };
for (let i in list2) {
  console.log(i); //	a,	b,	c
}

// For	of	accediendo	al	valor	de	una	variable	dentro	de	un	array:

let list3 = ["a", "b", "c"];
for (let b of list3) {
  console.log(b); //	a,	b,	c
}

/*
//For	of	accediendo	al	valor	de	una	variable	dentro	de	un	string:
let string = "soy yo a quien estas buscando?";
for (let char of string) {
  console.log(char);
}
*/

