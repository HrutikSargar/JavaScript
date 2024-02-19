const fName = "Hrutik";
const job = "Dev";
const birthYear = 2000;
const year = 2024;

const str1 =
  "I'm " + fName + " , a" + (year - birthYear) + " years old " + job + " !";
console.log(str1);

//template literal
const str2 = `i'm ${fName} , a ${year - birthYear} old ${job}`;
console.log(str2);

console.log(
  "String with\n\
multiple\n\
lines"
);

console.log(`String with
multiple
lines`);
