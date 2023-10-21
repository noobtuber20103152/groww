import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
function Header() {
  return (
    <div className="flex justify-between items-center px-4">
      <div className=" flex items-center">
        <div className="p-2 border rounded-full mr-4 lg:mr-8 overflow-hidden">
          <img
            className="w-20 lg:w-32"
            src="https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-xl font-bold">APPLE INC</h1>
          <span className="text-xm font-medium">AAPL, Common Stock</span>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-col">
          <span className="text-black text-lg font-sans">$177.15</span>
          <span className="text-green-700 flex items-center my-2">
            +0.91 <BiSolidUpArrow className="text-sm ml-2" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
