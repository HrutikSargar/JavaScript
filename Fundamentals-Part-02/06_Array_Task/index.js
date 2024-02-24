function calcTip(bill) {
  let total;
  if (bill > 50 && bill < 300) {
    total = bill * 0.15;
  } else {
    total = bill * 0.2;
  }
  return total;
}

console.log(calcTip(100));
const tip = new Array();
const bills = [125, 555, 44];
for (let index = 0; index < bills.length; index++) {
  const element = calcTip(bills[index]);
  tip.push(element);
}

console.log(tip);
