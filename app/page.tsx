"use client";
import { useState } from "react";
import Navbar from "./_components/_reusable/Navbar";
import TopGainer from "./_components/_home/TopGainer";
import TopLosers from "./_components/_home/TopLosers";
export default function Home() {
  const [gainOrLose, setGainOrLose] = useState(true);
  const handleChange = (isVisible: boolean) => {
    setGainOrLose(isVisible);
  };
  return (
    <>
      {/* <Navbar />
      <div className="max-w-6xl font-sans  my-10 px-4 mx-auto">
        <div className="flex">
          <div
            className={`${
              gainOrLose ? "border-b-2 border-yellow-700" : ""
            } pb-2 mr-5`}
          >
            <button
              onClick={() => handleChange(true)}
              className="text-xl text-black"
            >
              Top Gainers
            </button>
          </div>
          <div
            className={`${
              !gainOrLose ? "border-b-2 border-yellow-700" : ""
            } pb-2 mr-5`}
          >
            <button
              onClick={() => handleChange(false)}
              className="text-xl text-black"
            >
              Top Losers
            </button>
          </div>
        </div>
        {gainOrLose ? <TopGainer /> : <TopLosers />}
      </div> */}
    </>
  );
}
