"use client";

import YOINav from "@/components/navigation/navigation.tsx";
import Banner from "@/components/banners/banner";
import TextSection from "@/components/sections/text-section";
import YOIFooter from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black">
      <YOINav />
      <main className="z-1 flex-1">
        <Banner bg="/heroes/boat_on_water.jpg">
          <h1 className="fancy text-4xl sm:text-5xl md:text-6xl lg:text-7xl/none">
            Donate to The YOI
          </h1>
          <p className="max-w-[600px] text-gray-800 dark:text-gray-400 md:text-xl">
            Thank you for your interest in donating! At this time, we are unable
            to accept donations. Please check back later.
          </p>
        </Banner>
      </main>
      <YOIFooter />
    </div>
  );
}
