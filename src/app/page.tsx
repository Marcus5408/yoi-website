"use client";

import Image from "next/image";
import LightNavbar from "./navbarLight.jsx";
import DarkNavbar from "./navbarDark.jsx";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black">
      {theme === "dark" ? <DarkNavbar /> : <LightNavbar />}
      <div className="hero flex flex-col items-center justify-center p-10 m-96 h-1">
        <h1 className="text-6xl text-yoi-blue-1 dark:text-yoi-blue-3">
          Youth Oceanic Initiative
        </h1>
        <h2 className="text-3xl text-yoi-black dark:text-yoi-white">
          Empowering the next generation of ocean leaders
        </h2>
        <a
          className="btn btn-primary text-xl text-yoi-black dark:text-yoi-white"
          href="/about"
        >
          Learn More
        </a>
      </div>
    </main>
  );
}
