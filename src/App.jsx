import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { BillsProvider } from "./context/BillsContext";
import MainPage from "./pages/MainPage";
import AddUserPage from "./pages/AddUserPage";
import EditUserPage from "./pages/EditUserPage";
import UserExpensesPage from "./pages/UserExpensesPage";
import AddExpensePage from "./pages/AddExpensePage";
import EditExpensePage from "./pages/EditExpensePage";
import SharedExpensesPage from "./pages/SharedExpensesPage";
import AddSharedExpensePage from "./pages/AddSharedExpensePage";
import EditSharedExpensePage from "./pages/EditSharedExpensePage";
import OverallTotalPage from "./pages/OverallTotalPage";
import InfoPage from "./pages/InfoPage";
import "./components/ui/ui.css";
import "./App.css";

export default function App() {
  return (
    <BillsProvider>
      <HashRouter>
        <div className="app-shell">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/add-user" element={<AddUserPage />} />
            <Route path="/edit-user/:userId" element={<EditUserPage />} />
            <Route path="/users/:userId" element={<UserExpensesPage />} />
            <Route
              path="/users/:userId/add-expense"
              element={<AddExpensePage />}
            />
            <Route
              path="/users/:userId/edit-expense/:expenseId"
              element={<EditExpensePage />}
            />
            <Route path="/shared-expenses" element={<SharedExpensesPage />} />
            <Route
              path="/shared-expenses/add"
              element={<AddSharedExpensePage />}
            />
            <Route
              path="/shared-expenses/edit/:expenseId"
              element={<EditSharedExpensePage />}
            />
            <Route path="/overall-total" element={<OverallTotalPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </HashRouter>
    </BillsProvider>
  );
}
