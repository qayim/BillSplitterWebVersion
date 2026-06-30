import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { useBills } from "../context/BillsContext";
import { confirmAction } from "../utils/confirm";
import TitleCard from "../components/ui/TitleCard";
import InputCard from "../components/ui/InputCard";
import InputButton from "../components/ui/InputButton";
import Colors from "../constants/colors";

export default function EditUserPage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const editUid = Number(userId);
  const { users, editUser } = useBills();
  const existingUser = users.find((user) => user.uid === editUid);
  const [name, setName] = useState(existingUser?.name || "");

  const handleSubmit = () => {
    if (!editUid || Number.isNaN(editUid)) {
      const confirmed = confirmAction(
        "UID not found",
        "User ID is empty. Please go back to the main screen and start again."
      );
      if (confirmed) navigate("/");
      return;
    }

    if (name.trim().length <= 0) {
      window.alert("Name is empty. Please fill up the name.");
      return;
    }

    editUser(editUid, name.trim());
    navigate("/");
  };

  return (
    <div className="page page--form">
      <TitleCard onMenu={() => navigate("/")}>Edit User</TitleCard>
      <div className="form-body">
        <InputCard
          placeholder={existingUser?.name || "Name"}
          value={name}
          onChange={setName}
        />
      </div>
      <InputButton onClick={handleSubmit}>
        <AiOutlineEdit size={50} color={Colors.fontColorDark} />
      </InputButton>
    </div>
  );
}
