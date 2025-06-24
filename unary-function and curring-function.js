console.log("Unary Function ");
console.log("A unary function (also known as a monadic function) is a function that accepts exactly one argument. The term 'unary' simply refers to the function's arity—the number of arguments it takes. ");

let addNum = (a) => console.log(a + 10);
addNum(5);

console.log("Curring Function ");
console.log("Currying is a function that accepts multiple argument ");

let addNums = (a, b, c, d) => console.log(a + b + c - d);
addNums(5, 3, 7, 5);
