import { FiSearch } from "react-icons/fi";
import { BiPlusCircle, BiChevronLeft } from "react-icons/bi";
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchExpense } from "../redux/actions/expenses";

const Topfold = () => {
  const [query, setQuery] = useState("");
  // console.log(query);
  const dispatch = useDispatch();

  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };

  return (
    <div className="topfold w-3/4 mx-auto  shadow-md bg-gray-800 rounded-bl-lg rounded-br-lg text-white">
      {window.location.pathname == "/" ? (
        <div className="home-topfold flex justify-between items-center py-[0.7rem]  px-10 ">
          <div className="searchBar flex text-[1.5rem] justify-center items-center">
            <FiSearch className="duration-100 hover:scale-125" />
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96 h-[2.2rem] p-1.5  dark:text-white ml-2 "
              placeholder="Search for expenses"
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/add-expense">
            <div className="add-button flex justify-center items-center text-[1rem] border-2 cursor-pointer bg-gray-800 hover:border-gray-500 hover:text-gray-500 duration-100 ease-in border-white px-2 py-1 rounded-md">
              <BiPlusCircle />
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold mx-auto flex justify-between items-center shadow-md py-[0.6rem] px-10 bg-gray-800 rounded-bl-lg rounded-br-lg text-white">
          <Link to="/">
            <div className="add-topfold-button flex justify-between items-center text-gray-600 font-semibold bg-slate-100 px-2 py-[0.5rem] rounded-md hover:text-gray-900 hover:bg-slate-300 duration-200 ease-in">
              <BiChevronLeft className="button-icons font-semibold scale-150 mr-1" />
              <p>Back</p>
            </div>
          </Link>
          <Link to="/">
            <div className="add-topfold-button flex justify-between items-center text-[1rem] border-2 cursor-pointer bg-gray-800 hover:border-gray-500 hover:text-gray-500 duration-100 ease-in border-white px-2 py-1 rounded-md">
              <p>Cancel</p>
              <MdOutlineCancel className="button-icons ml-2 scale-110" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Topfold;
