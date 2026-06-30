import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Colors from "../../constants/colors";

export default function ExpensesCard({
  expenseName,
  cost,
  percentage,
  eid,
  onDelete,
  onEdit,
}) {
  const showPercentage = cost === 0 || percentage !== 0;

  return (
    <div className="expenses-card">
      <div className="expenses-card__name">{expenseName}</div>
      <div className="expenses-card__amount">
        {showPercentage ? `${percentage}%` : `RM${cost}`}
      </div>
      <button
        type="button"
        className="expenses-card__edit"
        onClick={() => onEdit?.(eid)}
        aria-label="Edit expense"
      >
        <AiOutlineEdit size={24} color={Colors.fontColorDark} />
      </button>
      <button
        type="button"
        className="expenses-card__delete"
        onClick={() => onDelete?.(eid)}
        aria-label="Delete expense"
      >
        <AiOutlineDelete size={24} color={Colors.fontColorDark} />
      </button>
    </div>
  );
}
