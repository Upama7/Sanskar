import React from "react";
import { CiSearch } from "react-icons/ci";

// right part search
function Search() {
  return (
    <div className="bg-white hidden md:block  shadow-md px-10 py-8">
      <div className="flex items-center border-[1px] p-2 ">
        <input
          type="text"
          placeholder="Search"
          className="outline-none w-[220px]"
        />
        <label htmlFor="search">
          <CiSearch />
        </label>
      </div>
    </div>
  );
}
{
  /* <div className="flex justify-between items-center border-[1px] border-gray-200 p-2 "></div> */
}
export default Search;
