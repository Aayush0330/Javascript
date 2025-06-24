console.log("First Class Function");
console.log("variable ke under function");

let testing = () => {
  console.log("hello");
};

testing();

console.log("higher order function or Takes another function as argument");

function firstName(name) {
  console.log(`hello ${name}`);
}

function lastName(callback) {
  const name = "aayush";
  callback(name);
}

lastName(firstName);

console.log("Return a function from another function");

function outer() {
  return function () {
    console.log("Inner function executed");
  };
}

const innerFunc = outer(); // outer() return kar raha hai ek function
innerFunc(); // ab inner function execute ho gaya

console.log("first order function");

console.log('A first-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value. i.e, It is a regular function that works with primitive or non-function values.')

let firstOrder = () => {
  console.log("I am a first order function!");
};
