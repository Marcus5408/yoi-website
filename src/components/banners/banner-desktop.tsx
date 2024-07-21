"use client";

import Image from "next/image";
import React from "react";

type BannerDesktopProps = {
  bg?: string;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
};

const BannerDesktop: React.FC<BannerDesktopProps> = ({
  bg,
  size,
  children,
}) => {
  let section_size = "min-h-96";
  let div_size = "h-[95svh]";
  let pad_top = "";
  switch (size) {
    case "small":
      section_size = "min-h-56";
      div_size = "h-[55svh]";
      break;
    case "medium":
      section_size = "min-h-71";
      div_size = "h-[70svh]";
      pad_top = "pt-12";
      break;
    case "large":
      section_size = "min-h-96";
      div_size = "h-[95svh]";
      break;
    case undefined:
      break;
  }
  return (
    <section
      className={"relative left-0 top-0 m-0 w-screen p-0 " + section_size}
    >
      <div className={div_size}>
        <div className="w-screen">
          <Image
            alt="Hero"
            className={"z-1 w-full overflow-hidden object-cover " + div_size}
            height="1920"
            src={bg ?? ""}
            width="1080"
          />
          <div className="absolute inset-0 flex w-3/4 flex-col justify-center space-y-4 bg-gradient-to-r from-yoi-blue-4 from-40% to-transparent pl-[5%] pr-8 dark:from-yoi-blue-1 2xl:w-1/2">
            <div
              className={"w-3/4 space-y-2 drop-shadow-xl xl:w-2/3 " + pad_top}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDesktop;
