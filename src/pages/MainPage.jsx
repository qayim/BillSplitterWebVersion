import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useBills } from "../context/BillsContext";
import {
  getBillTotals,
  getUserTotal,
} from "../utils/calculations";
import { confirmAction } from "../utils/confirm";
import OverallTotalCard from "../components/ui/OverallTotalCard";
import TitleCardIcon from "../components/ui/TitleCardIcon";
import UserCard from "../components/ui/UserCard";
import SharedExpensesCard from "../components/ui/SharedExpensesCard";

export default function MainPage() {
  const navigate = useNavigate();
  const { users, expenses, sharedExpenses, deleteUser, reset } = useBills();

  const totals = useMemo(
    () => getBillTotals(users, expenses, sharedExpenses),
    [users, expenses, sharedExpenses]
  );

  const handleDeleteUser = (uid) => {
    const confirmed = confirmAction(
      `Delete user with UID of ${uid}`,
      "Are you sure you want to delete this user?"
    );
    if (confirmed) {
      deleteUser(uid);
    }
  };

  return (
    <div className="page">
      <TitleCardIcon
        title="FairSplit"
        icon="adduser"
        onPage={() => navigate("/add-user")}
        onInfo={() => navigate("/info")}
        onLongPress={reset}
      />

      <button
        type="button"
        className="plain-button"
        onClick={() =>
          navigate("/overall-total", {
            state: {
              total: totals.overallTotal,
              sharedExpenses: totals.sharedCostTotal,
              percentage: totals.percentageTotal,
              totalExclPercentage: totals.baseTotal,
            },
          })
        }
      >
        <OverallTotalCard overallTotal={totals.overallTotal.toFixed(2)} />
      </button>

      <button
        type="button"
        className="plain-button"
        onClick={() => navigate("/shared-expenses")}
      >
        <SharedExpensesCard
          sharedExpensesTotal={totals.sharedCostTotal}
          sharedPercentageTotal={totals.percentageTotal}
        />
      </button>

      <div className="card-list">
        {users.map((user) => (
          <UserCard
            key={user.uid}
            id={user.uid}
            name={user.name}
            total={getUserTotal(
              user.uid,
              users,
              expenses,
              sharedExpenses
            ).toFixed(2)}
            onDelete={handleDeleteUser}
            onEdit={() => navigate(`/edit-user/${user.uid}`)}
            onPage={() =>
              navigate(`/users/${user.uid}`, { state: { userName: user.name } })
            }
          />
        ))}
      </div>
    </div>
  );
}
