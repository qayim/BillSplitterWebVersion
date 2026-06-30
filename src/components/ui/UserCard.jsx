import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Colors from "../../constants/colors";

function getTotalFontSize(total) {
  const value = Number(total);
  if (value > 99999) return 12;
  if (value > 999) return 14;
  if (value > 99) return 16;
  return 20;
}

export default function UserCard({
  id,
  name,
  total,
  onPage,
  onDelete,
  onEdit,
}) {
  return (
    <div className="user-card">
      <button
        type="button"
        className="user-card__icon-box"
        onClick={() => onEdit?.(id)}
        aria-label="Edit user"
      >
        <AiOutlineEdit size={24} color={Colors.fontColorDark} />
      </button>

      <button
        type="button"
        className="user-card__name"
        onClick={onPage}
      >
        {name}
      </button>

      <button
        type="button"
        className="user-card__total"
        style={{ fontSize: getTotalFontSize(total) }}
        onClick={onPage}
      >
        RM{total}
      </button>

      <button
        type="button"
        className="user-card__icon-box"
        onClick={() => onDelete?.(id)}
        aria-label="Delete user"
      >
        <AiOutlineDelete size={24} color={Colors.fontColorDark} />
      </button>
    </div>
  );
}
