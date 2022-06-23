let numbers, average;
let n = [];
let sum = 0;
let length = parseInt(prompt("Enter the length of array"));
for (let i = 0; i <= length - 1; i++) {
  numbers = parseInt(prompt("Enter the numbers"));
  n[i] = numbers;
}
console.log("The array of given numbers: " + n);

for (let j = 0; j < n.length; j++) {
  sum = sum + n[j];
}
console.log("The sum of numbers in array: " + sum);
function avg(sum) {
  average = sum / length;
  return average;
}
console.log("The Average of numbers in array is :" + avg(sum));
