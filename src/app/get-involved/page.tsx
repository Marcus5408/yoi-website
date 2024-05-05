"use client";

import Image from "next/image";
import YOINav from "@/components/navigation/navigation.tsx";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black">
      <YOINav />
      <div className="hero flex flex-col items-center justify-center p-10 m-96 h-1">
        <h1 className="text-6xl text-yoi-blue-1 dark:text-yoi-blue-3">
          About Us
        </h1>
        <h2 className="text-3xl text-yoi-black dark:text-yoi-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h2>
      </div>
    </main>
  );
}
