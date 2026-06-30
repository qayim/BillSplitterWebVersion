import { useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlineUserAdd } from "react-icons/ai";
import { MdAddCard } from "react-icons/md";
import TitleCard from "../components/ui/TitleCard";
import UserCardDummy from "../components/ui/UserCardDummy";
import ExpensesCardDummy from "../components/ui/ExpensesCardDummy";
import SharedExpensesCard from "../components/ui/SharedExpensesCard";
import TitleCardIconDummy from "../components/ui/TitleCardIconDummy";
import Colors from "../constants/colors";

function GuideSection({ title, children }) {
  return (
    <section className="guide-section">
      <h2 className="guide-section__title">{title}</h2>
      {children}
    </section>
  );
}

function GuideBlock({ children }) {
  return <div className="guide-block">{children}</div>;
}

export default function InfoPage() {
  const navigate = useNavigate();

  return (
    <div className="page page--info">
      <TitleCard onMenu={() => navigate("/")}>App Guide</TitleCard>

      <GuideSection title="Welcome to FairSplit!">
        <GuideBlock>
          <p>
            FairSplit is an app to split the bill with multiple people when
            spending out together. You can enter individualized expenses as well
            as shared expenses. Now you do not have to use a calculator to
            calculate complicated expenses.
          </p>
        </GuideBlock>
      </GuideSection>

      <GuideSection title="User">
        <GuideBlock>
          <div className="guide-icon-box">
            <AiOutlineUserAdd size={40} color={Colors.fontColorDark} />
          </div>
          <strong>Add User</strong>
          <p>Click the add user icon in the title bar to open the add user page.</p>
        </GuideBlock>
        <GuideBlock>
          <UserCardDummy name="Qayim" total={40} />
          <strong>Edit User</strong>
          <p>Click the edit icon on a user card to edit that user.</p>
        </GuideBlock>
        <GuideBlock>
          <div className="guide-icon-box">
            <AiOutlineDelete size={40} color={Colors.fontColorDark} />
          </div>
          <strong>Delete User</strong>
          <p>Click the delete icon on a user card and confirm your choice.</p>
        </GuideBlock>
      </GuideSection>

      <GuideSection title="Expenses">
        <GuideBlock>
          <UserCardDummy name="Qayim" total={40} />
          <strong>User Expense Page</strong>
          <p>Click a user card to open that person&apos;s individual expenses.</p>
        </GuideBlock>
        <GuideBlock>
          <div className="guide-icon-box">
            <MdAddCard size={40} color={Colors.fontColorDark} />
          </div>
          <strong>Add Expense</strong>
          <p>Click the add expense icon in the title bar.</p>
          <div className="guide-reminder">
            <p>Expense and Cost form cannot be empty</p>
            <p>Cost cannot be a negative value</p>
            <p>Click the add button once you have completed the expense form</p>
          </div>
        </GuideBlock>
        <GuideBlock>
          <ExpensesCardDummy expenseName="Bread" cost={5.9} />
          <strong>Edit Expense</strong>
          <p>Click the edit icon on an expense card to edit it.</p>
        </GuideBlock>
        <GuideBlock>
          <div className="guide-icon-box">
            <AiOutlineDelete size={40} color={Colors.fontColorDark} />
          </div>
          <strong>Delete Expense</strong>
          <p>Click the delete icon on an expense card and confirm your choice.</p>
        </GuideBlock>
      </GuideSection>

      <GuideSection title="Shared Expenses">
        <GuideBlock>
          <SharedExpensesCard sharedExpensesTotal={350.59} />
          <strong>Shared Expense Page</strong>
          <p>Click the shared expenses card on the home page to open shared expenses.</p>
        </GuideBlock>
        <GuideBlock>
          <div className="guide-icon-box">
            <MdAddCard size={40} color={Colors.fontColorDark} />
          </div>
          <strong>Add Shared Expense</strong>
          <p>Click the add expense icon on the shared expenses page.</p>
          <div className="guide-reminder">
            <p>Expense and Cost form cannot be empty</p>
            <p>Cost cannot be a negative value</p>
            <p>Click the add button once you have completed the expense form</p>
          </div>
        </GuideBlock>
        <GuideBlock>
          <ExpensesCardDummy expenseName="Tax" cost={3.98} />
          <strong>Edit Shared Expense</strong>
          <p>Click the edit icon on a shared expense card to edit it.</p>
        </GuideBlock>
        <GuideBlock>
          <div className="guide-icon-box">
            <AiOutlineDelete size={40} color={Colors.fontColorDark} />
          </div>
          <strong>Delete Shared Expense</strong>
          <p>Click the delete icon and confirm your choice.</p>
        </GuideBlock>
      </GuideSection>

      <GuideSection title="Reset All">
        <GuideBlock>
          <TitleCardIconDummy title="FairSplit" icon="adduser" />
          <strong>Reset and Delete All</strong>
          <p>Press and hold the title bar on the main page to reset everything.</p>
        </GuideBlock>
      </GuideSection>
    </div>
  );
}
