import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
function About(props: any) {
  return (
    <>
      <div className="border rounded-2xl my-5 ">
        <div className="p-5  border-b">
          <h2 className="text-xl font-bold">About APPLE INC</h2>
        </div>
        <div className="p-5">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis ducimus, esse, vero vitae eius commodi assumenda ipsam
            eligendi voluptatibus voluptatum sequi eos quaerat voluptatem soluta
            totam autem ut dolorem mollitia.
          </p>

          <div className="my-2 flex  flex-wrap">
            <span className="bg-yellow-500  my-2 text-yellow-800 text-lg font-medium mr-2  rounded-xl px-4 py-1">
              Industry: Electronics computers
            </span>
            <span className="bg-yellow-500 my-2 text-yellow-800 text-lg font-medium mr-2  rounded-xl px-4 py-1 ">
              Sector: Technology
            </span>
          </div>

          <div className="my-5 flex justify-between">
            <div className="md:w-2/12 flex  flex-col">
              <span>52-Week Low</span>
              <span className="font-bold">$123.64</span>
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
              <span className="font-bold">$123.64</span>
            </div>
          </div>

          <div className="grid  grid-cols-3 lg:grid-cols-5 my-10 ">
            <div className=" flex flex-col my-2">
              <span>Market Cap</span>
              <span className="font-bold">$2.77T</span>
            </div>
            <div className=" flex flex-col my-2">
              <span>Market Cap</span>
              <span className="font-bold">$2.77T</span>
            </div>
            <div className=" flex flex-col my-2">
              <span>Market Cap</span>
              <span className="font-bold">$2.77T</span>
            </div>
            <div className=" flex flex-col my-2">
              <span>Market Cap</span>
              <span className="font-bold">$2.77T</span>
            </div>
            <div className=" flex flex-col my-2">
              <span>Market Cap</span>
              <span className="font-bold">$2.77T</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
