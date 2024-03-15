"use strict";

console.log(this);

const calcAge = function (birthYear) {
  console.log(2027 - birthYear);
  console.log(this); //undefined because this keyword in function scope is undefined because of strict mode //if there is no strict mode then this keyword will point to windows
};

calcAge(2000);

const calcAgeArrow = (birthYear) => {
  console.log(2027 - birthYear);
  console.log(this); //in arrow function it will print window because this keyword will point to the parent sscope and parent scope of this arrow function is global scope
};

calcAgeArrow(2000);

//this is object ,
const hrutik = {
  year: 2000,
  calcAge: function () {
    console.log(this); //it will print object  {year: 2000, calsAge: ƒ}
    console.log(2024 - this.year); //2024-2000=24
  },
};
hrutik.calcAge();

const sagar = {
  year: 2017,
};

sagar.calsAge = hrutik.calcAge; ///meethod barrowing
sagar.calsAge();

const f = hrutik.calcAge; //script.js:24 Uncaught TypeError: Cannot read properties of undefined (reading 'year')
f(); //error will occur becuase in ibject hrutik year is defined
