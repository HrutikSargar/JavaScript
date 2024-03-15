//this is object ,
const hrutik = {
  fName: "hrutik",
  year: 2000,
  calcAge: function () {
    console.log(this); //it will print object  {year: 2000, calsAge: ƒ}
    console.log(2024 - this.year); //2024-2000=24
  },
  greet: () => console.log(`${this.fName}`), //this keyword doesnt support this keyword,it will result in undefined//it will search in parent scope for this.fName
};

hrutik.greet();

//argumets keyword
const addEpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addEpr(1, 2);
addEpr(1, 2, 1, "a");
var addArrow = (a, b) => a + b;
