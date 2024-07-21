import Image from "next/image";
import React from "react";

type BannerMobileProps = {
  bg?: string;
  children?: React.ReactNode;
};

const BannerMobile: React.FC<BannerMobileProps> = ({ bg, children }) => {
  return (
    <section className="relative left-0 top-0 m-0 max-h-max p-0 align-top">
      <div className="bg-yoi-blue-4 dark:bg-yoi-blue-1">
        <div className="justify-top container flex h-max w-screen flex-1 flex-col items-center space-y-4 pb-10 pt-8 text-center">
          <div className="relative w-screen">
            <div className="absolute inset-0 rounded-t-xl bg-gradient-to-b from-transparent from-80% to-yoi-blue-4 dark:to-yoi-blue-1" />
            <Image
              alt="Hero"
              className="mx-auto aspect-[2/1] overflow-hidden object-cover"
              height={400}
              src={bg ?? ""}
              width={800}
            />
          </div>
          <div className="space-y-2">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default BannerMobile;
