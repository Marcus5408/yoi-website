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
        <button title="Color Theme Toggle" className="dark-mode-toggle" onClick={() => setTheme('dark')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={40}
            width={40}
            viewBox="0 -960 960 960"
            className="fill-yoi-black dark:fill-yoi-white"
          >
            <path
              d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z"
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
