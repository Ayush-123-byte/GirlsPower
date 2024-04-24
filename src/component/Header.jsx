import React, { useState } from "react";
import { FaBars, FaPlus, FaTimes } from "react-icons/fa";
import { GrCloudUpload } from "react-icons/gr";
import { IoFilterSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

const Header = ({
  assendingEvent,
  descendingEvent,
  sortRankAsc,
  sortRankDes,
  sortIdDes,
  sortIdAsc,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [select, setSelect] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value);
    // setSelect(e.target.value);
    console.log(select);
    if (select === "lowest") {
      sortRankAsc();
    }
    if (select === "highest") {
      sortRankDes();
    }
    if (select === "a-z") {
      assendingEvent();
    }
    if (select === "z-a") {
      descendingEvent();
    }
    if (select === "idasc") {
      sortIdAsc();
    }
    if (select === "iddes") {
      sortIdDes();
    }
    console.log(select);
  };

  // const assending=()=>{
  //   assendingEvent(select)
  // }

  return (
    <>
      <nav className="bg-gray-800 text-white sticky top-0 ">
        <div className="max-w-11/12 mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center w-28 ">
            <img src="girlspower.jpg" alt="logo" />
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="hidden md:flex flex-grow text-lg justify-end items-center gap-5">
            <div className="flex items-center gap-2 hover:scale-105 ">
              <RiDeleteBin6Line />
              Delete
            </div>

            <div
              // onClick={assendingEvent}
              className=" flex items-center gap-2 hover:scale-105  "
            >
              {/* <IoFilterSharp />
              Filter */}
              <form action="#" className="flex items-center gap-2">
                <label htmlFor="sort"></label>
                <IoFilterSharp />
                <select
                  name="sort"
                  id="sort"
                  className="bg-gray-800 border rounded-md py-1 px-2 "
                  onChange={(e) => {
                    setSelect(e.target.value);
                  }}
                  onClick={handleChange}
                  value={select}
                >
                  <option value="">Filter</option>
                  <option value="lowest">Rank(lowest)</option>
                  <option value="highest">Rank(highest)</option>
                  <option value="a-z">Name(a-z)</option>
                  <option value="z-a">Name(z-a)</option>
                  <option value="idasc">Id(lowest)</option>
                  <option value="iddes">Id(highest)</option>
                </select>
              </form>
            </div>
            <div>
              <button className=" border shadow-lg px-4 py-1 rounded-md">
                <div className="flex items-center gap-2 hover:scale-105">
                  <GrCloudUpload />
                  Export
                </div>
              </button>
            </div>

            <div>
              <button className=" lg:block hidden  bg-blue-600 shadow-lg px-4 py-1 rounded-md">
                <div className="flex items-center gap-2 hover:scale-105 ">
                  <FaPlus />
                  Add new CTA
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-700 flex flex-col gap-4 p-4">
            <div className="flex items-center gap-2 hover:scale-105 ">
              <RiDeleteBin6Line />
              Delete
            </div>

            <div className="flex items-center gap-2 hover:scale-105 ">
              <IoFilterSharp />
              Filters
            </div>

            <div>
              <button className=" border shadow-lg px-4 py-1 rounded-md">
                <div className="flex items-center gap-2 hover:scale-105">
                  <GrCloudUpload />
                  Export
                </div>
              </button>
            </div>
            <div>
              <button className="  bg-blue-600 shadow-lg px-4 py-1 rounded-md">
                <div className="flex items-center gap-2 hover:scale-105">
                  <FaPlus />
                  Add new CTA
                </div>
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
