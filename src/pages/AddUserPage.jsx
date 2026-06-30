import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { useBills } from "../context/BillsContext";
import TitleCard from "../components/ui/TitleCard";
import InputCard from "../components/ui/InputCard";
import InputButton from "../components/ui/InputButton";
import Colors from "../constants/colors";

export default function AddUserPage() {
  const navigate = useNavigate();
  const { addUser } = useBills();
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim().length <= 0) {
      window.alert("Name is empty. Please fill up the name.");
      return;
    }

    addUser(name.trim());
    navigate("/");
  };

  return (
    <div className="page page--form">
      <TitleCard onMenu={() => navigate("/")}>Add User</TitleCard>
      <div className="form-body">
        <InputCard placeholder="Name" value={name} onChange={setName} />
      </div>
      <InputButton onClick={handleSubmit}>
        <IoAddCircleOutline size={50} color={Colors.fontColorDark} />
      </InputButton>
    </div>
  );
}
