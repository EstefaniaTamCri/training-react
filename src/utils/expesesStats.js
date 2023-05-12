export const expensesStats = (itemsList) => {
  if (itemsList.lenght === 0) {
    return [0, 0];
  }
  let incomes = 0,
    expenses = 0,
    total = 0;

  itemsList.forEach((element) => {
    if (element.money.incomes) {
      incomes += element.money.amount;
    } else {
      expenses += element.money.amount;
    }
  });
  total = Math.abs(incomes) + Math.abs(expenses);
console.log("incomes:", incomes);
console.log("expenses:", expenses);
console.log("total:", total);


  let incomesPercentage = Math.round((incomes * 100) / total);
  let expensesPercentage = Math.round((expenses * 100) / total);
};
