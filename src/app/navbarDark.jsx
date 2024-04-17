'use client';

import Image from "next/image";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="navbar flex flex-row flex-1 items-center p-5 navbar fixed w-screen text-yoi-black dark:text-yoi-white bg-gradient-to-b from-yoi-blue-4 dark:from-yoi-blue-1 to-transparent">
      <a className="logo flex flex-row items-center space-x-2" href="/">
        <div className="logo">
          <Image
            src="/yoi_logo.png"
            alt="Logo"
            width={75}
            height={75}
            className="border-2 rounded-full border-yoi-black dark:border-yoi-blue-4"
          />
        </div>
        <div className="text-xl leading-5 ">
          <h1 className="m-0">Youth</h1>
          <h1 className="m-0">Oceanic</h1>
          <h1 className="m-0">Initiative</h1>
        </div>
      </a>
      <div className="spacer grow"></div>
      <div className="flex flex-row space-x-7 text-xl justify-end mr-4 items-center">
        <button href="" title="Color Theme Toggle" className="dark-mode-toggle" onClick={() => setTheme('light')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={40}
            width={40}
            viewBox="0 -960 960 960"
            className="fill-yoi-black dark:fill-yoi-white"
          >
            <path
              d="M480-120q-151 0-255.5-104.5T120-480q0-138 90-239.5T440-838q13-2 23 3.5t16 14.5q6 9 6.5 21t-7.5 23q-17 26-25.5 55t-8.5 61q0 90 63 153t153 63q31 0 61.5-9t54.5-25q11-7 22.5-6.5T819-479q10 5 15.5 15t3.5 24q-14 138-117.5 229T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"
              className="dark-mode-toggle-path"
            />
          </svg>
        </button>
        <a href="/about">About Us</a>
        <a href="/projects">Our Projects</a>
        <a href="/contact">Contact Us</a>
      </div>
      <script src="/color_theme.js" async></script>
    </div>
  );
}
