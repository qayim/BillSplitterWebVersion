import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { useBills } from "../context/BillsContext";
import TitleCard from "../components/ui/TitleCard";
import InputCard from "../components/ui/InputCard";
import InputButton from "../components/ui/InputButton";
import MediumButton from "../components/ui/MediumButton";

export default function AddSharedExpensePage() {
  const navigate = useNavigate();
  const { addSharedExpense } = useBills();
  const [expenseName, setExpenseName] = useState("");
  const [cost, setCost] = useState("");
  const [percentage, setPercentage] = useState("");
  const [percentageOption, setPercentageOption] = useState(false);

  const handleSubmit = () => {
    if (expenseName.trim().length <= 0) {
      window.alert("Expense name is empty. Please fill up the expense name.");
      return;
    }

    addSharedExpense(
      expenseName.trim(),
      percentageOption ? 0 : +cost || 0,
      percentageOption ? +percentage || 0 : 0
    );
    navigate("/shared-expenses");
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
          placeholder={percentageOption ? "%" : "Cost"}
          value={percentageOption ? percentage : cost}
          onChange={percentageOption ? setPercentage : setCost}
          inputMode="decimal"
          type="number"
        />
      </div>
      <div className="form-actions">
        <button
          type="button"
          className="plain-button"
          onClick={() => setPercentageOption((current) => !current)}
        >
          <MediumButton active={percentageOption}>%</MediumButton>
        </button>
        <InputButton onClick={handleSubmit}>
          <IoAddCircleOutline size={50} color="#433E0E" />
        </InputButton>
      </div>
    </div>
  );
}
