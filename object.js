console.log("object interview quetions ");

// Q1. what  are posssible ways to create object ?

// object literal syntax

let obj = {
  name: "Aayush",
  isLogin: 1,
};

console.log(obj);

// object constructor

let object = Object();

// object create methord

let object2 = Object.create(null);

// for example

let vehicle = {
  wheels: 4,
  color: "red",
};

let carProps = {
  type: {
    value: "Vlokswagen",
  },

  model: {
    value: "Golf",
  },
};

let car = Object.create(vehicle, carProps);
console.log(car);

// function constructor

function Person(name = 'Ram' , age = 21) {
  this.name = name;
  this.age = age;
}

let object3 = new Person('Rohan' , 18)

console.log(object3)

// function constructor with prototype 

function Person2(name) {
    Person2.prototype.name = 'Ram'
}

const obj4 = new Person2();

console.log(obj4)

//  object assign methord

const orgObject = { company : "XYZ corporate"}
const carObject = { name : "Toyata"}

const staff = Object.assign({} , orgObject , carObject)
console.log(staff)

// ES6 class syntax 

class Person3 {
    constructor(name , isLogin) {
        this.name = name
        this.isLogin = isLogin
    }
}

const obj5 = new Person3('Rohit' , 10);
console.log(obj5)

// singletone  patterns 

const Singleton = (function () {
let instance;

function createInstance() {
  return { name: "Sudheer" };
}

return {
  getInstance: function () {
    if (!instance) {
      instance = createInstance();
    }
    return instance;
  }
};
})();

// Usage
const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // true