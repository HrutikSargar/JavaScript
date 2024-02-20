//===(Strict Comparison(equality) Operator)
//==(loose equality operator)
const age = 18;
if (age === 18) console.log("you are an adult");

console.log(age == "18"); //true
console.log(age === "18"); //false

const fav = prompt("Enter Number :"); //23
console.log(fav); //23
console.log(typeof fav); //String

if (fav == 23) {
  //'23'==23
  console.log("23 is amazing number"); //executed
}
if (fav === 23) {
  //'23'===23 (not equal)
  console.log("23 is amazing number");
} else {
  console.log("23 is not amazing number"); //executed
}
