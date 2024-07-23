import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type BannerMobileProps = {
  bg?: string;
  size?: "small" | "medium" | "large";
  title: string;
  description: string;
  button: {
    text: string;
    link: string;
  } | null;
};

const BannerMobile: React.FC<BannerMobileProps> = ({
  bg,
  title,
  description,
  button,
}) => {
  return (
    <section className="p-0 m-0 relative top-0 left-0 align-top max-h-max">
      <div className="bg-yoi-blue-4 dark:bg-yoi-blue-1">
        <div className="container flex flex-1 flex-col items-center justify-top pt-8 h-max text-center space-y-4 w-screen pb-10">
          <div className="relative w-screen">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-yoi-blue-4 dark:to-yoi-blue-1 rounded-t-xl" />
            <Image
              alt="Hero"
              className="mx-auto aspect-[2/1] overflow-hidden object-cover"
              height={400}
              src={bg ?? ""}
              width={800}
            />
          </div>
          <div className="space-y-2">
            <h1 className="fancy text-4xl sm:text-5xl md:text-6xl lg:text-7xl/none">
              {title}
            </h1>
            <p className="text-gray-800 dark:text-gray-400 md:text-xl">
              {description}
            </p>
            {button === null ? null : (
              <Button className="w-[75%]">
                <Link href={button.link}>{button.text} </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerMobile;
