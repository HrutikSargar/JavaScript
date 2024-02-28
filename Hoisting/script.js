//Variables
console.log(me); //undefined
// console.log(status);
// console.log(year);

var me = "hrutik";
let status = "student";
const year = 2000;

//function

console.log(addDecl(1, 2));
// console.log(addExp(1, 2));
// console.log(addArrow(1, 2));
const addExp = function (a, b) {
  return a + b;
};

function addDecl(a, b) {
  return a + b;
}
const addArrow = (a, b) => a + b;

//Example
if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log("all products deleted");
}

var x = 1;
let y = 2;
const c = 3;
