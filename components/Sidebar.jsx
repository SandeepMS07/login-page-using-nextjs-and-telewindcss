import React from "react";
import Link from "next/link";


import { MdOutlineDashboard } from "react-icons/md";
import { TiClipboard } from "react-icons/ti";
import { VscSignOut } from "react-icons/vsc";

const Sidebar = () => {


  return (
    <div className="bg-green-500 w-60 h-screen shadow-2xl">
      <div className="border-b-2 border-b-gray-100 py-5 justify-start">
        <p className="text-3xl font-bold ml-3">
          Learn<span className="text-yellow-400">cab</span>
        </p>
      </div>
      <div className="p-4 min-h-[83%] space-y-14">
        <div className="space-y-4">
          <h1 className="text-white text-2xl font-semibold">Menu</h1>
          <div className="">
            <div className="flex p-3 text-white space-x-4 hover:bg-gray-100 hover:rounded-2xl hover:text-green-500 cursor-pointer">
              <MdOutlineDashboard className="text-yellow-400 text-2xl" />
              <p className="text-lg">Dashboard</p>
            </div>
          </div>
          <div className="">
            <Link href={"/InvoicePage"} passHref>
              <div className="flex p-3 text-white space-x-4 hover:bg-gray-100 hover:rounded-2xl hover:text-green-500 cursor-pointer">
                <TiClipboard className="text-yellow-400 text-2xl" />
                <p className="text-lg">Invoice</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-2">
        <Link href={"/"} passHref>
          <div className="flex items-center justify-center left-10 p-3 text-white space-x-4 hover:bg-gray-100 hover:rounded-2xl hover:text-green-500 cursor-pointer">
            <VscSignOut className="text-yellow-400 text-2xl" />
            <p className="text-lg">Logout</p>
          </div>  
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
