import { useMediaQuery } from "react-responsive";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useState } from "react";

export default function YOINav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  if (isMobile) {
    return (
      <div className="absolute z-10 w-full">
        <Sidebar />
      </div>
    );
  } else {
    return (
      <div className="absolute z-10 w-full">
        <Navbar />
      </div>
    );
  }
}
