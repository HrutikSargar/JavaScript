const friends = ["kunal", "sg", "suyash"];

const newLength = friends.push("shubham"); //push method add new value to the last index
console.log(friends); // ['kunal', 'sg', 'suyash', 'shubham']

console.log(newLength); //4

friends.unshift("Prathamesh");
console.log(friends);

//remove methods
const popped = friends.pop(); //last
console.log(friends);
console.log(popped);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf("kunal")); //0

console.log(friends.includes("kunal")); //true
