import { AiOutlineInfoCircle, AiOutlineMenu, AiOutlineUserAdd } from "react-icons/ai";
import { MdAddCard } from "react-icons/md";
import Button from "./Button";
import Colors from "../../constants/colors";
import useLongPress from "../../hooks/useLongPress";

export default function TitleCardIcon({
  title,
  icon,
  onPage,
  onInfo,
  onLongPress,
  onMenu,
}) {
  const longPressHandlers = useLongPress(onLongPress);

  return (
    <Button>
      <div className="title-card-icon" {...longPressHandlers}>
        <div className="title-card-icon__text">{title}</div>
        <div className="title-card-icon__actions">
          <button
            type="button"
            className="title-card-icon__icon-btn"
            onClick={onInfo}
            aria-label="App guide"
          >
            <AiOutlineInfoCircle size={32} color={Colors.fontColorLight} />
          </button>
          <button
            type="button"
            className="title-card-icon__icon-btn"
            onClick={onPage}
            aria-label={icon === "adduser" ? "Add user" : "Add expense"}
          >
            {icon === "adduser" ? (
              <AiOutlineUserAdd size={32} color={Colors.fontColorLight} />
            ) : (
              <MdAddCard size={32} color={Colors.fontColorLight} />
            )}
          </button>
          {onMenu ? (
            <button
              type="button"
              className="title-card-icon__icon-btn title-card-icon__menu-btn"
              onClick={onMenu}
              aria-label="Back to main page"
            >
              <AiOutlineMenu size={32} color={Colors.fontColorLight} />
            </button>
          ) : null}
        </div>
      </div>
    </Button>
  );
}
