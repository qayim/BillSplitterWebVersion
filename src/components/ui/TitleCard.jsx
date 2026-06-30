import { AiOutlineMenu } from "react-icons/ai";
import Button from "./Button";
import Colors from "../../constants/colors";

export default function TitleCard({ children, onMenu }) {
  return (
    <Button>
      <div className="title-card">
        <h1 className="title-card__text">{children}</h1>
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
    </Button>
  );
}
