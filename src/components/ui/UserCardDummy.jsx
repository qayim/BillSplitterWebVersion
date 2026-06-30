import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Colors from "../../constants/colors";

export default function UserCardDummy({ name, total }) {
  return (
    <div className="user-card user-card--dummy">
      <div className="user-card__icon-box">
        <AiOutlineEdit size={24} color={Colors.fontColorDark} />
      </div>
      <div className="user-card__name">{name}</div>
      <div className="user-card__total">RM{total}</div>
      <div className="user-card__icon-box">
        <AiOutlineDelete size={24} color={Colors.fontColorDark} />
      </div>
    </div>
  );
}
