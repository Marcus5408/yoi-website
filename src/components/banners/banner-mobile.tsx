import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BannerMobile() {
  return (
    <section className="p-0 m-0 relative top-0 left-0 align-top h-50">
      <div className="bg-yoi-black">
        <div className="container flex flex-1 flex-col items-center justify-top pt-8 min-h-svh text-center space-y-4 w-screen">
          <div className="relative w-screen">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-yoi-black rounded-t-xl" />
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
              Welcome to the Example Website
            </h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              This is some placeholder subheading text to demonstrate the
              example website. You can replace this with your own text.
            </p>
          </div>
          <Link
            className="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-gray-100/90 dark:bg-yoi-blue-1 dark:hover:bg-gray-800/90"
            href="#"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
