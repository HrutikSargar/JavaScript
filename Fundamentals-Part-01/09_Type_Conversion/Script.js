//Type Conversion
//==>Converting one type of value into its another type
const inputYear = "1991";
console.log(inputYear + 10); //199110

const inputYear2 = "1991";
console.log(Number(inputYear2) + 10); //2001

console.log(Number("Hrutik")); //NaN
console.log(typeof NaN); //number

console.log(String(23));
console.log(String(23), 23); //2323

//Type Coercion
console.log("I'm " + 23 + " years old!");
console.log("23" - "23" + 10); //10
console.log("3" * "4"); //12
console.log("23" / "2"); //11.5

let n = "1" + 1; //'11'
n = n - 1; //11-1=10
console.log(n); //10

console.log(2 + 3 + 4 + "5"); //95
