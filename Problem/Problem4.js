// Give grades to student according to their marks
let marks = prompt("Enter marks: ");
if (marks >= 90 && marks <= 100) {
  console.log("A grade");
} else if (marks >= 80 && marks < 90) {
  console.log("B grade");
} else if (marks >= 70 && marks < 80) {
  console.log("C grade");
} else if (marks >= 60 && marks < 70) {
  console.log("D grade");
} else if (marks >= 0 && marks < 60) {
  console.log("F grade");
} else {
  console.log("Invalid input");
}
