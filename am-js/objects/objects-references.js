let myAccount = {
  name: "brandon",
  expenses: 0,
  income: 0,
};

let addExpense = function (account, amount) {
  console.log(account);
  account.expenses += amount;
};

// addIncome
let addIncome = function (account, amount) {
  account.income += amount;
};
// resetAccount
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

// getAccountSummary
let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));
