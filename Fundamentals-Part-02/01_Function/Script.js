// Simple function which just log to the console.
function logger() {
  console.log("My name is Hrutik");
}

//Calling / running / invoking function

logger();
logger();
logger();

//Another Function which returns some value.
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

//Calling / running / invoking function

console.log(fruitProcessor(2, 3));

const appleOrangeJuice = fruitProcessor(4, 9);
console.log(appleOrangeJuice);
