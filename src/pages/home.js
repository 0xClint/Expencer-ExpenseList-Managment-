import React from "react";
import Topfold from "../components/topfold";
import ExpenseList from "../components/ExpenseList";

const Home = () => {
  return (
    <div className="home">
      <Topfold />
      <ExpenseList />
    </div>
  );
};

export default Home;
