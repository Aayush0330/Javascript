console.log("Closure");

console.log("When inner function have access to variable in outer function ");

function welcome(name) {
 let greeting =  function (message) {
    console.log(message + " " + name);
  }
  return greeting
}

let myFunction = welcome('Aayush')
myFunction('Hello')
