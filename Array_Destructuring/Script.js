const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; //Destructuring the array
console.log(x, y, z);

const [first, , second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching the variables
// let temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

//Switching the variables using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [stater, mainMenu] = restaurant.order(2, 0);
console.log(stater, mainMenu);

//Destructuring in nestrd array
const nested = [2, 4, [5, 6]];
let [i, , j] = nested;
console.log(i, j);
//swapping the values
[i, j] = [j, i];
console.log(i, j);

//  defalut values
const [p = 1, q = 1, r = 1] = [8, 9]; //if value is not gin=ven then default values will be set
console.log(p, q, r);
