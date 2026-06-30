import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { useBills } from "../context/BillsContext";
import TitleCard from "../components/ui/TitleCard";
import InputCard from "../components/ui/InputCard";
import InputButton from "../components/ui/InputButton";
import Colors from "../constants/colors";

export default function AddExpensePage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const uid = Number(userId);
  const location = useLocation();
  const userName = location.state?.userName || "User";
  const { addExpense } = useBills();
  const [expenseName, setExpenseName] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = () => {
    if (expenseName.trim().length <= 0) {
      window.alert("Expense name is empty. Please fill up the expense name.");
      return;
    }

    addExpense(uid, expenseName.trim(), +cost || 0);
    navigate(`/users/${uid}`, { state: { userName } });
  };

  return (
    <div className="page page--form">
      <TitleCard onMenu={() => navigate("/")}>Add Expense</TitleCard>
      <div className="form-body">
        <InputCard
          placeholder="Expense"
          value={expenseName}
          onChange={setExpenseName}
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
        <IoAddCircleOutline size={50} color="#433E0E" />
      </InputButton>
    </div>
  );
}
