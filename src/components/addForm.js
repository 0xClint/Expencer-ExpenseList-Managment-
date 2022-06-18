import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Modal from "./Modal";
import "react-toastify/dist/ReactToastify.css";
import { BsCaretDownFill } from "react-icons/bs";
import { BiPaperPlane } from "react-icons/bi";
import { categories } from "../constant/add-expense";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/actions/expenses";

const AddForm = () => {
  const cat = categories;
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };

  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please enter valid data!");
      notify();
      return;
    }
    const data = {
      title, //title:title,
      amount, //amount:amount,
      category, //categroy:category,
      createdAt: new Date(),
    };
    setModalOpen(true);
    dispatch(addExpense(data));
  };

  return (
    <div className="flex flex-col w-3/4 min-h-[80vh] max-h-full mx-auto p-5 rounded-xl border shadow-md bg-white">
      {modalOpen && <Modal className="modal  absolute" />}
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnHover
      />
      <div className="form-item my-2 ml-20 mt-5">
        <label className="mr-2 ">Title</label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96  p-2.5  dark:text-white"
          type=""
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-item my-2 ml-[23px]">
        <label className="mr-2">Amount Rs</label>
        <input
          type="text"
          placeholder="Enter amount"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96 p-2.5  dark:text-white"
          value={amount}
          onChange={(e) => handleAmount(e)}
        />
      </div>
      <div className="category-container-parent my-1 ml-[13px] w-28">
        <div className="category">
          <div
            className="category-dropdown flex justify-center items-center"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <BsCaretDownFill className="ml-2 mt-1 cursor-pointer" />
          </div>
          {categoryOpen && (
            <div className="category-container w-[32rem]">
              {categoryOpen &&
                cat.map((category) => {
                  return (
                    <div
                      className="category-item flex flex-row justify-between items-start border-[0.5px] border-gray-200 rounded-md"
                      style={{ borderRight: `5px solid ${category.color}` }}
                      key={category.id}
                      onClick={() => handleCategory(category)}
                    >
                      <label className="font-semibold m-2 text-gray-800 mt-3">
                        {category.title}
                      </label>
                      <img
                        className="my-2 mr-3"
                        style={{ width: "60px" }}
                        src={category.icons}
                        alt={category.title}
                      />
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
      <div
        className="m-5 ml-[62rem] right-side-content form-add-button flex justify-center items-center w-24 h-10
        bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 duration-200  cursor-pointer"
        onClick={handleSubmit}
      >
        <label className="mr-3">Add</label>
        <BiPaperPlane className=" cursor-pointer " />
      </div>
    </div>
  );
};

export default AddForm;
