import React from "react";
import Home from "./pages/home";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" exact element={<Home />} />
        <Route path="/add-expense" exact element={<AddExpense />} />
      </Routes>
    </Router>
  );
};

export default App;
