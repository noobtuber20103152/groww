import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import Link from "next/link";
import { TOP_GAINER__LOSER_INTERFACE } from "@/app/_interfaces";

function Card(props: TOP_GAINER__LOSER_INTERFACE) {
  return (
    <>
      <div className="max-w-sm p-3  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-start">
        <div className="p-2 border rounded-full">
          <img
            className="h-10"
            src="https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg"
            alt=""
          />
        </div>
        <Link href={`/stock/${props.ticker}`}>
          <h5 className="mb-2 text-lg font-semibold tracking-tight dark:text-white">
            {props.ticker}
          </h5>
        </Link>
        <p className="mb-3 font-normal  dark:text-gray-400">${props.price}</p>
        <span
          className={`flex ${
            !props.change_percentage.includes("-")
              ? "text-green-600"
              : "text-red-500"
          } items-center`}
        >
          {props.change_percentage}{" "}
          <BiSolidUpArrow
            className={`${
              !props.change_percentage.includes("-") ? "" : "rotate-180"
            } h-4 ml-2`}
          />
        </span>
      </div>
    </>
  );
}

export default Card;
