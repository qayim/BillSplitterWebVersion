import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useBills } from "../context/BillsContext";
import { getBillTotals } from "../utils/calculations";
import { confirmAction } from "../utils/confirm";
import TitleCardIcon from "../components/ui/TitleCardIcon";
import ExpensesCard from "../components/ui/ExpensesCard";
import SharedExpensesCard from "../components/ui/SharedExpensesCard";

export default function SharedExpensesPage() {
  const navigate = useNavigate();
  const { users, expenses, sharedExpenses, deleteSharedExpense, reset } =
    useBills();

  const totals = useMemo(
    () => getBillTotals(users, expenses, sharedExpenses),
    [users, expenses, sharedExpenses]
  );

  const handleDeleteSharedExpense = (eid) => {
    const confirmed = confirmAction(
      `Delete shared expense with EID of ${eid}`,
      "Are you sure you want to delete this shared expense?"
    );
    if (confirmed) {
      deleteSharedExpense(eid);
    }
  };

  return (
    <div className="page">
      <TitleCardIcon
        title="Shared Expenses"
        icon="cash-plus"
        onPage={() => navigate("/shared-expenses/add")}
        onInfo={() => navigate("/info")}
        onMenu={() => navigate("/")}
        onLongPress={reset}
      />

      <SharedExpensesCard
        sharedExpensesTotal={totals.sharedCostTotal}
        sharedPercentageTotal={totals.percentageTotal}
      />

      <div className="card-list">
        {sharedExpenses.map((expense) => (
          <ExpensesCard
            key={expense.eid}
            expenseName={expense.expenseName}
            cost={expense.cost}
            percentage={expense.percentage}
            eid={expense.eid}
            onDelete={handleDeleteSharedExpense}
            onEdit={() => navigate(`/shared-expenses/edit/${expense.eid}`)}
          />
        ))}
      </div>
    </div>
  );
}
