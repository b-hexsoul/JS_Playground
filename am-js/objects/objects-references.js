let myAccount = {
  name: "brandon",
  expenses: 0,
  income: 0,
};

let addExpense = function (account, amount) {
  console.log(account);
  account.expenses = account.expenses + amount;
  console.log(account);
};

addExpense(myAccount, 2.5);
console.log(myAccount);
