//Question 1

const input = [1, 2, 3];
// Using for Loop
function arrayPowerFor(inputArray) {
  let resultArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    resultArray.push(Math.pow(2, inputArray[i]));
  }
  return resultArray;
}

// Using forEach
function arrayPowerForEach(inputArray) {
  let resultArray = [];
  inputArray.forEach((elemnt) => {
    resultArray.push(Math.pow(2, elemnt));
  });
  return resultArray;
}

//Using Map
function arrayPowerMap(inputArray) {
  return inputArray.map((elemnt) => Math.pow(2, elemnt));
}

console.log("Using for loop: ", arrayPowerFor(input));
console.log("Using forEach: ", arrayPowerForEach(input));
console.log("Using Map: ", arrayPowerMap(input));

//Question 2
const oddeven = [1, 2, 3, "Rawan"];

function evenOrOdd(inputArray) {
  return inputArray.map((elemnt) => {
    if (typeof elemnt !== "number") {
      return "N/A";
    }
    return elemnt % 2 === 0 ? "even" : "odd";
  });
}
console.log(evenOrOdd(oddeven));

// Question 3
const giveBackNames = [
  "Ramzi",
  "Ahmad",
  "Maysarah",
  "Hamza",
  "Yazan",
  "Faisal",
];
function returnNames(inputArray) {
  let names = [];
  inputArray.forEach((name) => {
    names.push(name);
  });
  return names;
}

console.log(returnNames(giveBackNames));

//Question 4

const fizzAndBuzz = [1, 3, 5, 9, 10, 15, 27, 40, 30, 231681684168498, 22, 12];

function fizzBuzz(inputArray) {
  return inputArray.map((elemnt) => {
    if (elemnt % 3 === 0 && elemnt % 5 === 0) {
      return "Fizz Buzz";
    } else if (elemnt % 3 === 0) {
      return "Fizz";
    } else if (elemnt % 5 === 0) {
      return "Buzz";
    } else {
      return elemnt;
    }
  });
}
console.log(fizzBuzz(fizzAndBuzz));
