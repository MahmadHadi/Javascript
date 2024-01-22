// 7 primitive data type of js
// data type: number, string, boolean, undefined, null, BigInt, Symbol.

// 1 number
let number = 11.11;
console.log(typeof number);
console.log(number);
console.log("\n");

// 2 string
let string = "hadi";
console.log(typeof string);
console.log(string);
console.log("\n");

// 3 boolean
let bull = true;
console.log(typeof bull);
console.log(bull);
console.log("\n");

// 4 undefined
let un;
console.log(typeof un);
console.log(un);
console.log("\n");

// 5 null
let nl = null;
console.log(typeof nl);
console.log(nl);
console.log("\n");

// 6 BigInt
let bg = BigInt(123);
console.log(typeof bg);
console.log(bg);
console.log("\n");

// 7 Symbol
let sb = Symbol("hadi");
console.log(typeof sb);
console.log(sb);
console.log("\n");

// ------------------------------------------------------------------------------------------- //
// non - primitive data type: object
// boject: collection of values
// eg: Array, function, ...

// making object: 
const ob1 = { // We can also declare by using var or let key - word 
    fullName : "Nayani MahmadHadi.",
    rollNumber : 39,
    pr  : 88.29,
    isPass : true,
    age : 18,
};
console.log(typeof ob1);
console.log(ob1); // to print all properties of object
console.log("Name : " + ob1["fullName"]); // to print only one property // method 1
console.log(`Name : ${ob1.fullName}`); // to print only one property // method 2 // both are same

// Operation on property
console.log('\n');
console.log("Operation on property");
console.log("Before operation: " + ob1.age);
ob1.age += 1;
console.log("After operation: " + ob1.age);