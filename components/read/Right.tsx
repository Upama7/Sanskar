import React from "react";
import Search from "./Search";
import Recent from "./Recent";
import Cmment from "./Cmment";
import Archives from "./Archives";
import Categories from "./Categories";
import Meta from "./Meta";

// read page right part
function Right() {
  return (
    <div className="basis-1/4">
      <div className="flex flex-col gap-12">
        <Search />
        <Recent />
        <Cmment />
        <Archives />
        <Categories />
        <Meta />
      </div>
    </div>
  );
}

export default Right;
