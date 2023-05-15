export const expensesStats = (itemsList) => {
  if (itemsList.length === 0) {
    return [0, 0];
  }
  let incomes = 0,
    expenses = 0,
    total = 0;
  itemsList.forEach((item) => {
    if (item.money.income) {
      incomes += item.money.amount;
    } else {
      expenses += item.money.amount;
    }
  });

  total = Math.abs(incomes) + Math.abs(expenses);
  let incomesPercentage = Math.round((incomes * 100) / total);
  let expensesPercentage = Math.round((expenses * 100) / total);
  return [incomesPercentage, expensesPercentage];
};
