const age = 12;

const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`sarah can start driving`);
} else {
  const yearsLeft = 18 - age;
  console.log(`sarah is too young waut another ${yearsLeft} years `);
}

const birthYear = 2000;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
