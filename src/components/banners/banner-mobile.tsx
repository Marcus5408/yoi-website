import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BannerMobile() {
  return (
    <section className="p-0 m-0 relative top-0 left-0 align-top max-h-[70svh]">
      <div className="bg-yoi-blue-4 dark:bg-yoi-blue-1">
        <div className="container flex flex-1 flex-col items-center justify-top pt-8 h-[70svh] text-center space-y-4 w-screen">
          <div className="relative w-screen">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-yoi-blue-4 dark:to-yoi-blue-1 rounded-t-xl" />
            <Image
              alt="Hero"
              className="mx-auto aspect-[2/1] overflow-hidden object-cover"
              height={400}
              src="/wexor-tmg-L-2p8fapOA8-unsplash.jpg"
              width={800}
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Learn. <br />
              Discuss. <br />
              Advocate. <br />
            </h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              The Youth Oceanic Initiative was founded to educate younger
              generations about the oceans. Join us and help us educate the next
              generation of ocean stewards.
            </p>
          </div>
          <Button className="w-[75%]">Join Now</Button>
        </div>
      </div>
    </section>
  );
}
