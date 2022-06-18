import React from "react";
import { useSelector } from "react-redux/es/exports";
import Card from "./Card";
import { ToastContainer, toast } from "react-toastify";

const ExpenseList = () => {
  const { expenseList, query } = useSelector((state) => state.expenses);
  const filteredList = expenseList.filter((items) => {
    return items.title.includes(query);
  });

  const notifySuccess = () => toast.success("Expense Deleted");
  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnHover
      />
      {filteredList.length ? (
        filteredList.map((items) => (
          <Card items={items} notifySuccess={notifySuccess} />
        ))
      ) : (
        <div className="empty-list mx-auto w-96 bg-blue-100 rounded-lg mt-20 flex flex-col justify-center items-center p-4">
          <img
            src={require("../assets/emptyList.png")}
            className="w-60 mb-3"
            alt="Empty List"
          />
          <label>Uh Oh! Your expanse list is empty</label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
