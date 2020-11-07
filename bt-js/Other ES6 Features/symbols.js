// Create a symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym1);
// console.log(sym2);

// No two symbols can be the same...

// Unique Object keys!!!

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj)

// Symbols are not enumerable in for...in

// for(let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`)
// }

// Symbols are ignored when using JSON.stringify
// console.log(JSON.stringify({key: 'prop'}))
// console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}))