import { validateData } from "@/app/libs";
import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
function Header(props: any) {
  let data = props.data;
  return (
    <div className="flex justify-between items-center px-4">
      <div className=" flex items-center">
        <div className="p-2 border rounded-full mr-4 lg:mr-8 overflow-hidden">
          <img
            className="w-20 lg:w-32"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-xl font-bold">{validateData(data.ticker)}</h1>
          <span className="text-xm font-medium">{props.AssetType}</span>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-col">
          <span className=" text-lg font-sans">
            ${validateData(data.price)}
          </span>
          {data?.change_percentage?.includes("-") ? (
            <>
              <span className="text-red-700 flex items-center my-2">
                {data.change_percentage}{" "}
                <BiSolidUpArrow className="text-sm rotate-180 ml-2" />
              </span>
            </>
          ) : (
            <>
              <span className="text-green-700 flex items-center my-2">
                +{data.change_percentage}{" "}
                <BiSolidUpArrow className="text-sm ml-2" />
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
