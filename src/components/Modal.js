import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import SuccessGif from "../assets/addedItem.gif";
import { MdOutlineCancel } from "react-icons/md";

const Modal = () => {
  return (
    <div className="modal-background border bg-slate-200 h-screen w-[98.9vw] absolute top-0 left-0 shadow-md z-999">
      <div className="modal-container flex flex-col items-center justify-center w-[25vw] border border-black h-[55vh] rounded-2xl text-[1.2rem]  translate-x-[150%] translate-y-1/3">
        <div className="modal-header">
          <p className="text-[1.3rem]">Item added successfully!</p>
          <Link to="/">
            <MdOutlineCancel className="cancel-icon absolute left-[350px] top-[10px] block" />
          </Link>
        </div>
        <div className="img-container w-[200px] h-[200px] mt-[1rem] mb-[2rem]">
          <img src={SuccessGif} className="scale-[1.3]" />
        </div>
        <Link to="/">
          <div className="home-button flex items-center justify-center mt-3 border border-black py-2 px-3 rounded-lg">
            <p>Home</p>
            <BiHomeAlt className="home-icon ml-2 scale-125" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
