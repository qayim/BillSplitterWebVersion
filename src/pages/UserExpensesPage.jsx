import { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useBills } from "../context/BillsContext";
import { getUserPersonalTotal } from "../utils/calculations";
import { confirmAction } from "../utils/confirm";
import TitleCardIcon from "../components/ui/TitleCardIcon";
import TitleCard from "../components/ui/TitleCard";
import ExpensesCard from "../components/ui/ExpensesCard";

export default function UserExpensesPage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const uid = Number(userId);
  const location = useLocation();
  const userName = location.state?.userName || "User";
  const { expenses, deleteExpense, reset } = useBills();

  const userExpenses = useMemo(
    () => expenses.filter((expense) => expense.uid === uid),
    [expenses, uid]
  );

  const total = useMemo(
    () => getUserPersonalTotal(uid, expenses),
    [uid, expenses]
  );

  const handleDeleteExpense = (eid) => {
    const confirmed = confirmAction(
      `Delete expense with EID of ${eid}`,
      "Are you sure you want to delete this expense?"
    );
    if (confirmed) {
      deleteExpense(eid);
    }
  };

  return (
    <div className="page">
      <TitleCardIcon
        title="User Expenses"
        icon="cash-plus"
        onPage={() =>
          navigate(`/users/${uid}/add-expense`, { state: { userName } })
        }
        onInfo={() => navigate("/info")}
        onMenu={() => navigate("/")}
        onLongPress={reset}
      />

      <TitleCard>{userName}</TitleCard>

      <div className="summary-banner">Total: RM{total.toFixed(2)}</div>

      <div className="card-list">
        {userExpenses.map((expense) => (
          <ExpensesCard
            key={expense.eid}
            expenseName={expense.expenseName}
            cost={expense.cost}
            percentage={0}
            eid={expense.eid}
            onDelete={handleDeleteExpense}
            onEdit={() =>
              navigate(`/users/${uid}/edit-expense/${expense.eid}`, {
                state: { userName },
              })
            }
          />
        ))}
      </div>
    </div>
  );
}
