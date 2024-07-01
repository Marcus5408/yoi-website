"use client";

import Image from "next/image";
import React from "react";

type BannerDesktopProps = {
  bg?: string;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
};

const BannerDesktop: React.FC<BannerDesktopProps> = ({ bg, size, children }) => {
  let section_size = "min-h-96";
  let div_size = "h-[95svh]";
  switch (size) {
    case "small":
      section_size = "min-h-56";
      div_size = "h-[55svh]"
      break;
    case "medium":
      section_size = "min-h-71";
      div_size = "h-[70svh]"
      break;
    case "large":
      section_size = "min-h-96";
      div_size = "h-[95svh]"
      break;
    case undefined:
      break;
  };
  return (
    <section className={"w-screen p-0 m-0 relative top-0 left-0 " + section_size}>
      <div className={div_size}>
        <div className="w-screen">
          <Image
            alt="Hero"
            className={"overflow-hidden z-1 w-full object-cover " + div_size}
            height="1920"
            src={bg ?? ""}
            width="1080"
          />
          <div className="flex flex-col justify-center space-y-4 absolute inset-0 w-2/3 lg:w-1/2 pl-[5%] pr-8 bg-gradient-to-r from-yoi-blue-4 dark:from-yoi-blue-1 from-40% to-transparent">
            <div className="space-y-2 w-2/3 drop-shadow-xl">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDesktop;
