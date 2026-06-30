import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Colors from "../../constants/colors";

export default function ExpensesCardDummy({ expenseName, cost }) {
  return (
    <div className="expenses-card expenses-card--dummy">
      <div className="expenses-card__name">{expenseName}</div>
      <div className="expenses-card__amount">RM{cost}</div>
      <div className="expenses-card__edit">
        <AiOutlineEdit size={24} color={Colors.fontColorDark} />
      </div>
      <div className="expenses-card__delete">
        <AiOutlineDelete size={24} color={Colors.fontColorDark} />
      </div>
    </div>
  );
}
