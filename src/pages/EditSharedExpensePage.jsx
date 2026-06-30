import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { useBills } from "../context/BillsContext";
import { confirmAction } from "../utils/confirm";
import TitleCard from "../components/ui/TitleCard";
import InputCard from "../components/ui/InputCard";
import InputButton from "../components/ui/InputButton";
import Colors from "../constants/colors";

export default function EditSharedExpensePage() {
  const navigate = useNavigate();
  const { expenseId } = useParams();
  const editEid = Number(expenseId);
  const { sharedExpenses, editSharedExpense } = useBills();
  const existingExpense = sharedExpenses.find(
    (expense) => expense.eid === editEid
  );
  const isPercentageItem =
    existingExpense?.cost === 0 || existingExpense?.percentage !== 0;
  const [expense, setExpense] = useState(existingExpense?.expenseName || "");
  const [cost, setCost] = useState(
    existingExpense ? String(existingExpense.cost) : ""
  );
  const [percentage, setPercentage] = useState(
    existingExpense ? String(existingExpense.percentage) : ""
  );

  const handleSubmit = () => {
    if (!editEid || Number.isNaN(editEid)) {
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

    editSharedExpense(
      editEid,
      expense.trim(),
      isPercentageItem ? 0 : +cost || 0,
      isPercentageItem ? +percentage || 0 : 0
    );
    navigate("/shared-expenses");
  };

  return (
    <div className="page page--form">
      <TitleCard onMenu={() => navigate("/")}>Edit Shared Expense</TitleCard>
      <div className="form-body">
        <InputCard
          placeholder={existingExpense?.expenseName || "Expense"}
          value={expense}
          onChange={setExpense}
        />
        <InputCard
          placeholder={isPercentageItem ? "%" : "Cost"}
          value={isPercentageItem ? percentage : cost}
          onChange={isPercentageItem ? setPercentage : setCost}
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
