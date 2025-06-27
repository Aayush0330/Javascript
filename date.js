var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
console.log(today = mm + "/" + dd + "/" + yyyy)

// console.log(today)
// console.log(today.getDate())
// console.log(today.getFullYear())
// console.log(today.getDay())
// console.log(today.getMonth())
// console.log(today.toLocaleDateString())