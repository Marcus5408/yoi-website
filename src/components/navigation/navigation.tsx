"use client";

import Navbar from "./navbar";
import Sidebar from "./sidebar";

function YOINav() {

  return (
    <div className="absolute z-10 w-full">
      <Navbar className="hidden lg:flex" />
      <Sidebar className="block lg:hidden" />
    </div>
  );
}

export default YOINav;
