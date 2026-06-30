import { useLocation, useNavigate } from "react-router-dom";
import TitleCard from "../components/ui/TitleCard";
import MediumButton from "../components/ui/MediumButton";

export default function OverallTotalPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    total = 0,
    sharedExpenses = 0,
    percentage = 0,
    totalExclPercentage = 0,
  } = location.state || {};

  return (
    <div className="page page--form">
      <TitleCard onMenu={() => navigate("/")}>Total Breakdown</TitleCard>
      <MediumButton>Total incl percentage: RM{total}</MediumButton>
      <MediumButton>Total excl percentage: RM{totalExclPercentage}</MediumButton>
      <MediumButton>
        Total excl shared expense: RM{totalExclPercentage - sharedExpenses}
      </MediumButton>
      <MediumButton>Shared Expense: RM{sharedExpenses}</MediumButton>
      <MediumButton>Percentage: {percentage * 100}%</MediumButton>
      <MediumButton>
        Percentage Amount: RM{percentage * totalExclPercentage}
      </MediumButton>
    </div>
  );
}
