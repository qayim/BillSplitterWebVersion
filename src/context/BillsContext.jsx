import { createContext, useContext, useMemo, useRef, useState } from "react";
import { confirmAction } from "../utils/confirm";

const BillsContext = createContext(null);

export function BillsProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [sharedExpenses, setSharedExpenses] = useState([]);
  const nextUserId = useRef(1);
  const nextExpenseId = useRef(1);
  const nextSharedExpenseId = useRef(1);

  const addUser = (name) => {
    const uid = nextUserId.current;
    nextUserId.current += 1;
    setUsers((currentUsers) => [...currentUsers, { uid, name, check: false }]);
  };

  const deleteUser = (uid) => {
    setUsers((currentUsers) => currentUsers.filter((user) => user.uid !== uid));
    setExpenses((currentExpense) =>
      currentExpense.filter((expense) => expense.uid !== uid)
    );
  };

  const editUser = (uid, newName) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.uid === uid ? { ...user, name: newName } : user
      )
    );
  };

  const checkUser = (uid) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.uid === uid ? { ...user, check: !user.check } : user
      )
    );
  };

  const addExpense = (uid, expenseName, cost) => {
    const eid = nextExpenseId.current;
    nextExpenseId.current += 1;
    setExpenses((currentExpense) => [
      ...currentExpense,
      { uid, eid, expenseName, cost },
    ]);
  };

  const deleteExpense = (eid) => {
    setExpenses((currentExpense) =>
      currentExpense.filter((expense) => expense.eid !== eid)
    );
  };

  const editExpense = (eid, newExpenseName, newCost) => {
    setExpenses((currentExpense) =>
      currentExpense.map((expense) =>
        expense.eid === eid
          ? { ...expense, expenseName: newExpenseName, cost: newCost }
          : expense
      )
    );
  };

  const addSharedExpense = (expenseName, cost, percentage) => {
    const eid = nextSharedExpenseId.current;
    nextSharedExpenseId.current += 1;
    setSharedExpenses((currentSharedExpense) => [
      ...currentSharedExpense,
      { eid, expenseName, cost, percentage },
    ]);
  };

  const deleteSharedExpense = (eid) => {
    setSharedExpenses((currentSharedExpense) =>
      currentSharedExpense.filter((sharedExpense) => sharedExpense.eid !== eid)
    );
  };

  const editSharedExpense = (eid, newExpenseName, newCost, newPercentage) => {
    setSharedExpenses((currentSharedExpense) =>
      currentSharedExpense.map((sharedExpense) =>
        sharedExpense.eid === eid
          ? {
              ...sharedExpense,
              expenseName: newExpenseName,
              cost: newCost,
              percentage: newPercentage,
            }
          : sharedExpense
      )
    );
  };

  const reset = () => {
    const confirmed = confirmAction(
      "Reset",
      "Are you sure you want to reset and delete everything?"
    );

    if (confirmed) {
      setSharedExpenses([]);
      setExpenses([]);
      setUsers([]);
      nextUserId.current = 1;
      nextExpenseId.current = 1;
      nextSharedExpenseId.current = 1;
    }
  };

  const value = useMemo(
    () => ({
      users,
      expenses,
      sharedExpenses,
      addUser,
      deleteUser,
      editUser,
      checkUser,
      addExpense,
      deleteExpense,
      editExpense,
      addSharedExpense,
      deleteSharedExpense,
      editSharedExpense,
      reset,
    }),
    [users, expenses, sharedExpenses]
  );

  return (
    <BillsContext.Provider value={value}>{children}</BillsContext.Provider>
  );
}

export function useBills() {
  const context = useContext(BillsContext);
  if (!context) {
    throw new Error("useBills must be used within BillsProvider");
  }
  return context;
}
