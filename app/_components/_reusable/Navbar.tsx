"use client";
import useFetch from "@/app/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillLightningFill } from "react-icons/bs";
import { clearTimeout, setTimeout } from "timers";
export default function Navbar() {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState<any>([]);
  const [typingStatus, setTypingStatus] = useState("Not typing");
  let typingTimer: any;

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    clearTimeout(typingTimer);
    setTypingStatus("typing");
    typingTimer = setTimeout(() => {
      setTypingStatus("Not typing");
    }, 500);
  }, [search]);
  useEffect(() => {
    async function getSearchData() {
      let response = await fetch(`/api/v1/search/${search}`);
      let data = await response.json();
      console.log(data);
      setSearchData(data?.data?.bestMatches);
    }
    if (typingStatus == "Not typing") {
      getSearchData();
    }
  }, [typingStatus]);
  return (
    <>
      <div className="bg-yellow-700 dark:bg-[#333333]">
        <nav className="py-2 w-full  lg:max-w-6xl p px-0 mx-auto font-sans md:px-2">
          <div className=" flex lg:flex-row  flex-col items-start lg:items-center w-full px-5 justify-between">
            <Link href="/">
              <span className="text-2xl items-center  text-white font-bold flex">
                GrowStonks
                <BsFillLightningFill className="w-4 space-x-2 ml-2" />{" "}
              </span>
            </Link>
            <div
              className={`w-full lg:mt-0 mt-4 lg:w-8/12 flex   items-center bg-yellow-900 ${
                search.length ? "rounded-t-3xl" : "rounded-3xl"
              } `}
            >
              <div className="w-full ">
                <div className="inline-flex w-full flex-col justify-center relative text-gray-500">
                  <div className="relative px-2">
                    <input
                      onChange={handleChange}
                      type="text"
                      value={search}
                      className="p-2 pl-8 text-white  w-full rounded-full bg-transparent outline-none"
                      placeholder="search..."
                    />
                    <svg
                      className="w-4 h-4 text-white absolute left-2.5 top-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  {search.length ? (
                    <>
                      <div className="w-full px-4 absolute bg-yellow-900 py-2  top-10">
                        <button className="bg-yellow-700 text-white  text-xs font-medium mr-2 px-2.5 py-0.5 rounded-lg">
                          All
                        </button>
                        <button className="bg-yellow-700 text-white  text-xs font-medium mr-2 px-2.5 py-0.5 rounded-lg">
                          Stocks
                        </button>
                        <button className="bg-yellow-700 text-white  text-xs font-medium mr-2 px-2.5 py-0.5 rounded-lg">
                          Etfs
                        </button>
                      </div>
                      <ul
                        className={`bg-yellow-900 w-full absolute rounded-b-3xl top-[4.5rem]  mt-2`}
                      >
                        {searchData?.map((e: any, index:number) => {
                          return (
                            <>
                              <Link href={`/stock/${e["1. symbol"]}`}>
                                <li className={`pl-4 border-white  border-b pr-2 py-1 text-white w-full bg-transparent relative cursor-pointer `}>
                                  {e["2. name"]}
                                  <br />
                                  <span className="text-sm text-yellow-500">
                                    {e["1. symbol"]}
                                  </span>
                                </li>
                              </Link>
                            </>
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav></nav>
      </div>
    </>
  );
}
