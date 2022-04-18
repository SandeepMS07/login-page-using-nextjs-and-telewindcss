import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaClipboard } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-green-500 md:w-3/12 w-6/12 h-screen shadow-2xl">
      <div className="border-b-2 border-b-gray-100 py-5 justify-start">
        <p className="text-3xl font-bold ml-3">
          Learn<span className="text-yellow-400">cab</span>
        </p>
      </div>
      <div className="p-4 space-y-14">
        <div className="space-y-4">
          <h1 className="text-white text-2xl font-semibold">Menu</h1>
          <div className="">
            <div className="flex p-3 text-white space-x-4 hover:bg-gray-100 hover:rounded-2xl hover:text-green-500 cursor-pointer">
              <MdDashboard className="text-yellow-400 text-2xl" />
              <p className="text-lg">Dashboard</p>
            </div>
          </div>
          <div className="">
            <div className="flex p-3 text-white space-x-4 hover:bg-gray-100 hover:rounded-2xl hover:text-green-500 cursor-pointer">
              <FaClipboard className="text-yellow-400 text-2xl" />
              <p className="text-lg">Invoice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
