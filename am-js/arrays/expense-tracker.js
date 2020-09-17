const account = {
  name: "brandon hexsel",
  expenses: [],
  income: [],

  addExpense: function (description, amount) {
    let expense = { description, amount };
    this.expenses.push(expense);
  },

  deleteExpense: function (expenseDescription) {
    let index = this.expenses.findIndex(function (expense) {
      return expense.description.toLowerCase() === expenseDescription.toLowerCase();
    });
    this.expenses.splice(index, 1);
  },

  addIncome: function (description, amount) {
    let incomes = { description, amount };
    this.income.push(incomes);
  },

  deleteIncome: function (incomeDescription) {
    let index = this.income.findIndex(function (incomes) {
      return incomes.description.toLowerCase() === incomeDescription.toLowerCase();
    });
    this.expenses.splice(index, 1);
  },

  getAccountSummary: function () {
    let totalExpense = 0;
    let totalIncome = 0;
    this.expenses.forEach(function (expense) {
      totalExpense += expense.amount;
    });
    this.income.forEach(function (incomes) {
      totalIncome += incomes.amount;
    });
    let balance = totalIncome - totalExpense;
    return `${this.name} has a balance of $${balance}.`;
  },
};

account.addIncome("Nursing", 2200);
account.addIncome("Development", 500);
account.addExpense("Coffee", 2.5);
account.addExpense("Lunch", 6);
account.addExpense("TV", 200);
account.addExpense("Computer", 1500);
console.log(account.getAccountSummary());

account.deleteExpense("computer");

console.log(account.getAccountSummary());
