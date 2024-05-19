"use client";

import Image from "next/image";

type BannerDesktopProps = {
  bg?: string;
  children?: React.ReactNode;
};

const BannerDesktop: React.FC<BannerDesktopProps> = ({ bg, children }) => {
  return (
    <section className="w-screen p-0 m-0 min-h-96 relative top-0 left-0">
      <div className="h-[95svh]">
        <div className="w-screen">
          <Image
            alt="Hero"
            className="overflow-hidden z-1 h-[95svh] w-full object-cover"
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
