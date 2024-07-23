import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

function YOINav() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="absolute z-10 w-full">
        <Sidebar />
      </div>
    );
  } else {
    return <div className="absolute z-10 w-full"><Navbar /></div>;
  }
}

export default YOINav;
