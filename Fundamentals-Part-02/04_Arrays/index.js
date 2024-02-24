const friends = ["Kunal", "shubham", "ommkar"];
console.log(friends); //["Kunal", "shubham", "ommkar"]

const years = new Array(11, 2, 3, 4);
console.log(years); //[11,2,3,4]

console.log(friends[1]); //shubham
console.log(friends[2]); //ommkar

console.log(friends.length); //3
console.log(friends[friends.length - 1]); //ommkar

friends[2] = "Sanket";
console.log(friends); //['Kunal', 'shubham', 'Sanket']

const fName = "Hrutik";
//new array

//can store another array into an array(firends in array2)
const array2 = [fName, "Sargar", 2024 - 2000, friends];
console.log(array2); //['Hrutik', 'Sargar', 24, Array(3)]
console.log(array2.length); //4
