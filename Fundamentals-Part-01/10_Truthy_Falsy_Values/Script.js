// 5 falsy values: 0 , '' , undefined, null, NaN
//used in type conversion
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean("Hrutik"));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("You should get a job"); //this block gets executed because 0 is falsy value.
}

let height;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is defined"); //this block gets executed because undefined is falsy value.
}
