//There are 7 primitive datatypes

//1.number(decimals or integers)
//2.String(Sequence of characters)
//3.Boolean(logical type that can be true or false)
//4.Undefined(Variable that is defined only value not assinged to it yet.)
//5.Symbol(Value that is Uniqque and cannot be changed)
//6.null(Empty value)
//7.BigInt(Large nujmber that Integer cannot hold)

//String
let firstName = "Hrutik";
console.log(firstName);

//Number
let num1 = 23;
console.log(num1);

//boolean
let javaScriptIsFun = true;
console.log(javaScriptIsFun); //true
console.log(typeof javaScriptIsFun); //boolean

//Dynamic Typing (Changing a tyoe of value variable is holding)
javaScriptIsFun = "NO!";
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun); //String

//undefined
let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year = 2000; //Initialization
console.log(year); //2000
console.log(typeof year); //number

//null
let lName = null;
console.log(lName);
console.log(typeof lName); //object
