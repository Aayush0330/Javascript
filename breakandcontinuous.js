console.log("Break Statement");

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    console.log("Let take a break");
    break;
  }
}

console.log('Continue Statement')

for (let j = 1; j <= 10 ; j++) {
    console.log(j)
    if (j === 5) {
        console.log('let continue')
        continue
    }
}