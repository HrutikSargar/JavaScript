const hrutik = {
  fName: "Hrutik",
  lName: "sargar",
  age: 2024 - 2000,
  job: "dev",
  friends: ["Kunal", "sg"],
};

console.log(hrutik); //{fName: 'Hrutik', lName: 'sargar', age: 24, job: 'dev', friends: Array(2)}
console.log(hrutik.lName); //sargar
console.log(hrutik["fName"]); //Hrutik

const nameKey = "Name";
console.log(hrutik["f" + nameKey]); //Hrutik

const interestedIn = prompt("what do you want about hrutik");
console.log(hrutik[interestedIn]); //Hrutik

if (hrutik[interestedIn]) {
  console.log(hrutik[interestedIn]);
} else {
  console.log("Wrong request");
}

hrutik.location = "india";
hrutik["email"] = "@hrutiksargar";
console.log(hrutik); //{fName: 'Hrutik', lName: 'sargar', age: 24, job: 'dev', friends: Array(2), …}

console.log(
  `${hrutik.fName} has ${hrutik.friends.length} friends, and his Close friend is ${hrutik.friends[0]}`
);

//OBJECT METHODS
const record = {
  fName: "Hrutik",
  lName: "sargar",
  age: 2024 - 2000,
  birthYear: 2000,
  job: "dev",
  friends: ["Kunal", "sg"],
  //   calcAge: function (birthYear) {
  //     return 2024 - birthYear;
  //   },
  calcAge: function () {
    return 2024 - this.birthYear;
  },
};

console.log(record.calcAge(2000));
