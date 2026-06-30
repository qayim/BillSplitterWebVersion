export default function SharedExpensesCard({
  sharedExpensesTotal,
  sharedPercentageTotal = 0,
}) {
  return (
    <div className="shared-expenses-card">
      <div className="shared-expenses-card__box">
        Shared Expenses: RM{Number(sharedExpensesTotal).toFixed(2)}
      </div>
      <div className="shared-expenses-card__box">
        Percentage: {(sharedPercentageTotal * 100).toFixed(0)}%
      </div>
    </div>
  );
}
