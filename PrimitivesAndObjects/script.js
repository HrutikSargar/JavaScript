let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

let me = {
  //Object created
  name: "hrutik",
  age: 23,
};
let friend = me; //Anither object Created
// console.log(me);
friend.age = 26; //age changed for both the objects
// console.log("friend", friend);
// console.log("hrutik", me);

let lName = "sagar";
let oldLname = lName;
lName = "akshay";
console.log(lName);
console.log(oldLname);

const sg = {
  fName: "sagar",
  lName: "sargar",
};
const ak = sg;

// Another Object
const s2 = {
  fName: "sagar",
  lName: "sargar",
  family: ["ak", "hs"],
};

const s2Copy = Object.assign({}, s2); //It will create a new object Copy with separate memory space
s2Copy.lName = "Kolekar";

s2Copy.family.push("mayuri");
s2Copy.family.push("Sid");

console.log("s2", s2);
console.log("s2Copy", s2Copy);
