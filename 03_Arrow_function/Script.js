//Arrow function
const calsAge3 = (birthYear) => 2024 - birthYear;

//calling the function
console.log(calsAge3(2000)); //24

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 60 - age;

  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(2000, "hrutik")); //36
