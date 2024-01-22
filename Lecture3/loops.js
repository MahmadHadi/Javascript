// // 1 for loop
// for (let i = 0; i < 5; i++) {
//     console.log("I LOVE COFFEE");
//     console.log("I AM HADI");
// }
// calculate 1 to n
let n = prompt("Enter a number : ");
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);
// infinite loop: DANGER 
// let str = "hadi";
// while (true) {
//     console.log("hadi");
//     str += "hadi"; 
// }

// while loop
let num = 1;
while (num <= 5) {
    console.log(num);
    num++;
}

// do while loop
do {
    console.log(num);
    num++;
} while (num <= 10);

// for of loop : for string and arrays
let name = "hadi nayani";
for (let i of name) {
    console.log("H", (i + 1));
}

// for in loop : for objects, to work on key
const student = {
    name : "hadi",
    rNum : 22,
    ispass : true,
};
for (let i in student) { // set value i = key
    console.log(`Key = ${i} value = ${student[i]}`); // student[i] ma "" ni jarur nathi bkc i value chh string nathi
}