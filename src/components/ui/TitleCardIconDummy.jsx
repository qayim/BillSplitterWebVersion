import { AiOutlineUserAdd } from "react-icons/ai";
import { MdAddCard } from "react-icons/md";
import Button from "./Button";
import Colors from "../../constants/colors";

export default function TitleCardIconDummy({ title, icon }) {
  return (
    <Button>
      <div className="title-card-icon">
        <div className="title-card-icon__text">{title}</div>
        <div className="title-card-icon__actions">
          <div className="title-card-icon__icon-btn">
            {icon === "adduser" ? (
              <AiOutlineUserAdd size={32} color={Colors.fontColorLight} />
            ) : (
              <MdAddCard size={32} color={Colors.fontColorLight} />
            )}
          </div>
        </div>
      </div>
    </Button>
  );
}
