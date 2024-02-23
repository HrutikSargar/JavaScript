//function declaration
console.log(calcAge(2000)); //24    //We can call declaration type function before defining it.

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  return age;
}
//calling the function

//function expression
const calsAge2 = function (birthYear) {
  return 2024 - birthYear;
};
//calling the function
console.log(calsAge2(1999)); //25
