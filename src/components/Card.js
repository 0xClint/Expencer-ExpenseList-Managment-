import moment from "moment";
import React from "react";
import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../redux/actions/expenses";

const Card = ({ items, notifySuccess }) => {
  const time = moment(items.createdAt).fromNow();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteExpense(items));
    notifySuccess();
  };
  return (
    <div className="card-container w-3/4 mx-auto ">
      <div
        className="card-inner-container flex justify-between px-8 py-2 mx-4 rounded-lg shadow-md mb-[5px]"
        style={{ borderRight: `6px solid ${items.category.color}` }}
      >
        <div className="img-text-container flex justify-center items-center">
          <div className="card-img-container mr-4 cursor-pointer">
            <img
              src={items.category.icons}
              alt={items.category.title}
              className="card-img w-[80px]"
            />
          </div>
          <div className="card-info">
            <h3 className="text-[1.2rem] font-medium cursor-pointer">
              {items.title}
            </h3>
            <p className="text-sm text-gray-500 cursor-pointer">{time}</p>
          </div>
        </div>
        <div className="card-right w-40 mr-3 flex flex-col justify-center items-end">
          <BiTrash
            className="button-delete text-right scale-[1.5] my-2 cursor-pointer hover:scale-[1.2rem] duration-200 ease-in-out"
            onClick={handleDelete}
          />
          <p className="text-[1.1rem] cursor-pointer mt-[5px]">
            ₹​ {items.amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
