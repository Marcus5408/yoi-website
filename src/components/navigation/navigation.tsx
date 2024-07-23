import { useMediaQuery } from "react-responsive";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function YOINav() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  if (isTabletOrMobile) {
    return <div className="absolute z-10 w-full"><Sidebar /></div>;
  } else {
    return <div className="absolute z-10 w-full"><Navbar /></div>;
  }
};