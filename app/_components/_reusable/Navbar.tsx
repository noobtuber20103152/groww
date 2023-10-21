import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillLightningFill } from "react-icons/bs";
export default function Navbar() {
  return (
    <>
      <div className="bg-yellow-700">
        <nav className="py-2 lg:block hidden lg:max-w-6xl p px-0 mx-auto font-sans md:px-2">
          <div className=" flex items-center w-full pr-40 justify-between">
            <span className="text-2xl items-center  text-white font-bold flex">
              GrowStonks
              <BsFillLightningFill className="w-4 space-x-2 ml-2" />{" "}
            </span>
            <div className="w-8/12 flex px-2 items-center bg-yellow-900 rounded-full">
              <div>
                <AiOutlineSearch className="h-6 text-white w-8" />
              </div>
              <input
                placeholder="Search stocks & effs"
                className="w-full outline-none text-white bg-transparent px-1 h-10 "
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
