import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { useBills } from "../context/BillsContext";
import { confirmAction } from "../utils/confirm";
import TitleCard from "../components/ui/TitleCard";
import InputCard from "../components/ui/InputCard";
import InputButton from "../components/ui/InputButton";
import Colors from "../constants/colors";

export default function EditExpensePage() {
  const navigate = useNavigate();
  const { userId, expenseId } = useParams();
  const uid = Number(userId);
  const eid = Number(expenseId);
  const location = useLocation();
  const userName = location.state?.userName || "User";
  const { expenses, editExpense } = useBills();
  const existingExpense = expenses.find((expense) => expense.eid === eid);
  const [expense, setExpense] = useState(existingExpense?.expenseName || "");
  const [cost, setCost] = useState(
    existingExpense ? String(existingExpense.cost) : ""
  );

  const handleSubmit = () => {
    if (!eid || Number.isNaN(eid)) {
      const confirmed = confirmAction(
        "Edit EID not found",
        "Edit Expense ID is empty. Please go back to the main screen and start again."
      );
      if (confirmed) navigate("/");
      return;
    }

    if (expense.trim().length <= 0) {
      window.alert("Expense name is empty. Please fill up the expense name.");
      return;
    }

    editExpense(eid, expense.trim(), +cost || 0);
    navigate(`/users/${uid}`, { state: { userName } });
  };

  return (
    <div className="page page--form">
      <TitleCard onMenu={() => navigate("/")}>Edit Expense</TitleCard>
      <div className="form-body">
        <InputCard
          placeholder={existingExpense?.expenseName || "Expense"}
          value={expense}
          onChange={setExpense}
        />
        <InputCard
          placeholder="Cost"
          value={cost}
          onChange={setCost}
          inputMode="decimal"
          type="number"
        />
      </div>
      <InputButton onClick={handleSubmit}>
        <AiOutlineEdit size={50} color={Colors.fontColorDark} />
      </InputButton>
    </div>
  );
}
