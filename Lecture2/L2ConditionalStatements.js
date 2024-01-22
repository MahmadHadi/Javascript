// this is single line comment
/**
 * this is multiline comment
 * to write multiple lines in comment
 */

let a = 10,
  b = 2;

// operators in js:
//  Used t operform some operation on data {variables, values}
// Arithmetic operators:
//   +, -, *, /, %, ** {exponentiation}, ++, --

console.log("a + b =", a + b, "where a =", a, " and b =", b);
// jo , no use karyo hoy to , ni agal and pachal by - default ' '{white - space} aavshe
console.log("a + b = " + (a + b) + " where a = " + a + " and b = " + b);
console.log(`a + b = ${a + b} where a = ${a} and b = ${b}`);

// example of exponention:
console.log(a + " to the power " + b + " = " + a ** b);

// Assignment operators:
//                        =, +=, -=, %=, *=, **=
console.log(`a++ = ${a++}`); // post increment // pehla print thashe and then increment
console.log(`++a = ${++a}`); // pre increment // pehla increment thashe and then print thashe.

// Comparison operators:
//          ==, ==={Equal to & type}, !=, !=={Not equal to & type}, >, <, >=, <=
console.log(`a == b ${a == b}`); // ==
console.log(`a !== b ${a !== b}`); // equal ||

let str = "2",
  num = 2;
console.log(str == num); // true
console.log(str === num); // false

// Logical operators:
//            &&, ||, !

// ----------------------------------------- conditional statements -------------------------------------------------------------- //
// 1 if statements
let mode = "DARK";
let color;

if (mode == "DARK") {
  color = "white";
}
if (mode == "WHITE") {
  color = "black";
}

// 2 if - else statements
if (mode == "DARK") {
  color = "white";
} else {
  color = "black";
}

// 3 else - if ladder statement
if (mode == "DARK") {
  color = "white";
} else if (mode == "PINK") {
  color = "blue";
} else {
  color = "black";
}

// 4 Ternaru operators
// variable = condition ? true : false;
let getMode = (mode == "DARK") ? color = "white" : color = "black";