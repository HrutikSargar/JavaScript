for (let a = 0; a < 5; a++) {
  console.log("Hrutik , you will be Successfull😎");
}

const hrutik = ["Hrutik", "sargar", 2024 - 2000, "dev", ["Kunal", "sg"]];

const types = [];

for (let a = 0; a < hrutik.length; a++) {
  //Reading the hrutik array
  console.log(hrutik[a], typeof hrutik[a]);

  //Filling the types array
  //   types[a] = typeof hrutik[a];
  types.push(typeof hrutik[a]);
}
console.log(types);

// continue and break
console.log("====only string====");
for (let a = 0; a < hrutik.length; a++) {
  //Reading the hrutik array

  if (typeof hrutik[a] !== "string") continue; //if the typeOf is not string , then it will skip the iteration , it will not execute anything for that iteration

  console.log(hrutik[a], typeof hrutik[a]);
}

console.log("====break with number====");
for (let a = 0; a < hrutik.length; a++) {
  //Reading the hrutik array
  if (typeof hrutik[a] === "number") break; //if the typeOf is not string , then it will skip the iteration , it will not execute anything for that iteration
  console.log(hrutik[a], typeof hrutik[a]);
}

for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= a; b++) {
    document.write("*");
  }
  document.write("\n");
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

//WHILE LOOP (if you dont know the count of iterations , then use while loop)
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
