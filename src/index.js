var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

function double(x) {
  return x * 2;
}

numbers.map(double);

// or remove the name of the function

numbers.map(function (x) {
  return x * 2;
});

// same as

var newNumber = [];
function double(x) {
  newNumber.push(x * 2);
}
// forEach has to pass a function as an argument
numbers.forEach(double);

// or

numbers.forEach(function (x) {
  newNumber.push(x * 2);
});

// filter
var numbers = [3, 56, 2, 48, 5];

numbers.filter(function (num) {
  return num < 10;
});

var newNumbers = [];
numbers.forEach(function (num) {
  if (num < 10) {
    newNumbers.push(num);
  }
});

// reduce

var numbers = [3, 56, 2, 48, 5];

var newNumber = 0;

numbers.forEach(function (currentNumber) {
  newNumber += currentNumber;
});
console.log(newNumber);

var newNumber = numbers.reduce(function (Accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(newNumber);

// find

var numbers = [3, 56, 2, 48, 5];
// it will stop at the first value greater than 10
var newNumber = numbers.find(function (num) {
  return num > 10;
});
console.log(newNumber);

// FindIndex

var numbers = [3, 56, 2, 48, 5];
// it will stop at the first index that has the value greater than 10
var newNumber = numbers.findIndex(function (num) {
  return num > 10;
});

console.log(newNumber);
