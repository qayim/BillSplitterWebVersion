export function sumCosts(items, key = "cost") {
  return items.reduce((acc, item) => acc + Number(item[key] || 0), 0);
}

export function sumPercentages(sharedExpenses) {
  return (
    sharedExpenses.reduce((acc, item) => acc + Number(item.percentage || 0), 0) /
    100
  );
}

export function getUserPersonalTotal(uid, expenses) {
  return sumCosts(
    expenses.filter((expense) => expense.uid === uid),
    "cost"
  );
}

export function getBillTotals(users, expenses, sharedExpenses) {
  const personalTotal = sumCosts(expenses);
  const sharedCostTotal = sumCosts(sharedExpenses);
  const percentageTotal = sumPercentages(sharedExpenses);
  const baseTotal = personalTotal + sharedCostTotal;
  const overallTotal = baseTotal * (1 + percentageTotal);
  const sharedPerUser =
    users.length > 0 ? sharedCostTotal / users.length : 0;

  return {
    personalTotal,
    sharedCostTotal,
    percentageTotal,
    baseTotal,
    overallTotal,
    sharedPerUser,
  };
}

export function getUserTotal(uid, users, expenses, sharedExpenses) {
  const { percentageTotal, sharedPerUser } = getBillTotals(
    users,
    expenses,
    sharedExpenses
  );
  const userPersonal = getUserPersonalTotal(uid, expenses);
  return (userPersonal + sharedPerUser) * (1 + percentageTotal);
}
