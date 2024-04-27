"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BannerDesktop() {
  return (
    <section className="w-screen p-0 m-0 min-h-96 relative top-0 left-0">
      <div className="h-[95svh]">
        <div className="w-screen">
          <Image
            alt="Hero"
            className="overflow-hidden z-1 h-[95svh] w-full object-cover"
            height="1920"
            src="/wexor-tmg-L-2p8fapOA8-unsplash.jpg"
            width="1080"
          />
          <div className="flex flex-col justify-center space-y-4 absolute inset-0 w-1/2 sm:2/3 pl-[5%] pr-8 bg-gradient-to-r from-yoi-blue-4 dark:from-yoi-blue-1 from-40% to-transparent">
            <div className="space-y-2 w-2/3 drop-shadow-xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-yoi-white fancy">
                <div className="underline decoration-0 hover:decoration-4">
                  Learn.
                </div>
                <div className="underline decoration-0 hover:decoration-4">
                  Discuss.
                </div>
                <div className="underline decoration-0 hover:decoration-4">
                  Advocate.
                </div>
              </h1>
              <p className="max-w-[600px] text-yoi-blue-1 md:text-xl dark:text-yoi-blue-4">
                The Youth Oceanic Initiative was founded to educate younger
                generations about the oceans. Join us and help us educate the
                next generation of ocean stewards.
              </p>
            </div>
            <Button className="md:w-1/2">Join Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
