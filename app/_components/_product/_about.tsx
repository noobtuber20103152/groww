import { validateData } from "@/app/libs";
import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
function About(props: any) {
  let data = props.data;
  return (
    <>
      <div className="border rounded-2xl my-5 ">
        <div className="p-5  border-b">
          <h2 className="text-xl font-bold">{validateData(data.Symbol)}</h2>
        </div>
        <div className="p-5">
          <p>{validateData(data.Description)}</p>
          <div className="my-2 flex  flex-wrap">
            <span className="bg-yellow-500  my-2 text-yellow-800 text-lg font-medium mr-2  rounded-xl px-4 py-1">
              Industry: {validateData(data.Industry)}
            </span>
            <span className="bg-yellow-500 my-2 text-yellow-800 text-lg font-medium mr-2  rounded-xl px-4 py-1 ">
              Sector: {validateData(data.Sector)}
            </span>
          </div>

          <div className="my-5 flex justify-between">
            <div className="md:w-2/12 flex  flex-col">
              <span>52-Week Low</span>
              <span className="font-bold">
                ${validateData(data["52WeekLow"])}
              </span>
            </div>
            <div className="w-8/12 items-center">
              <div className="flex flex-col justify-center items-center">
                <span>Current price: $177.15</span>
                <BiSolidUpArrow className="rotate-180" />
                <div className="border w-full"></div>
              </div>
            </div>
            <div className="md:w-2/12 flex  flex-col items-end">
              <span>52-Week High</span>
              <span className="font-bold">
                ${validateData(data["52WeekLow"])}
              </span>
            </div>
          </div>

          <div className="grid  grid-cols-3 lg:grid-cols-5 my-10 ">
            <div className=" flex flex-col my-2">
              <span>Market Cap</span>
              <span className="font-bold">$2.77T</span>
            </div>
            <div className=" flex flex-col my-2">
              <span>P/E Ratio</span>
              <span className="font-bold">{validateData(data.PERation)}</span>
            </div>
            <div className=" flex flex-col my-2">
              <span>Beta</span>
              <span className="font-bold">{validateData(props.EBITDA)}</span>
            </div>
            <div className=" flex flex-col my-2">
              <span>Dividend Yield</span>
              <span className="font-bold">
                {validateData(data.DividendYield)}
              </span>
            </div>
            <div className=" flex flex-col my-2">
              <span>Profit Margin</span>
              <span className="font-bold">
                {validateData(data.ProfitMargin)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
