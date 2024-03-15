// "use strict";

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  console.log(fName);

  function printAge() {
    let output = `${fName} You are ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      var milleneal = true; //variable declared with var , are function scopped

      //Creating new variable with same name as outer scope variables
      const fName = "Sagar";

      //reassining outer scope variable
      output = "new output";
      const str = `oh youre a milleneal ${fName}`;
      console.log(str);

      function add(a, b) {
        //block scope
        return a + b;
      }
    }
    console.log(milleneal);
    console.log(add(1, 2)); //callable when you dont use strict mode

    console.log(output);
  }
  printAge();
  return age;
}

const fName = "Hrutik"; //Global Scope
console.log(calcAge(1991));
