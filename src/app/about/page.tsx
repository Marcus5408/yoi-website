"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Sidebar from "../../components/navigation/sidebar/sidebar.tsx";
import Navbar from "../../components/navigation/navbar/navbar.tsx";
import { useTheme } from "next-themes";

export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black">
      <header className="absolute z-10 w-full">
        {isTabletOrMobile ? <Sidebar /> : <Navbar />}
      </header>
      <div className="hero flex flex-col items-center justify-center p-10 m-96 h-1">
        <h1 className="text-6xl text-yoi-blue-1 dark:text-yoi-blue-3 pb-5">
          About Us
        </h1>
        <h2 className="text-3xl text-yoi-black dark:text-yoi-white">
          Insert sample text here. epic epic muy ben yes yes yes lorem ipsum
          Insert sample text here. epic epic muy ben yes yes yes lorem ipsum
          Insert sample text here. epic epic muy ben yes yes yes lorem ipsum
          Insert sample text here. epic epic muy ben yes yes yes lorem ipsum
          Insert sample text here. epic epic muy ben yes yes yes lorem ipsum
        </h2>
        <div className="items-center"><h2>Cabinet</h2></div>
      </div>
    </div>
  );
}
