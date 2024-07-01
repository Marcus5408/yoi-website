"use client";

import YOINav from "@/components/navigation/navigation.tsx";
import Banner from "@/components/banners/banner";
import YOIFooter from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black w-screen">
      <YOINav />
      <main className="flex-1 z-1">
        <Banner bg="/shaun-low-v8Un2Roo1Ak-unsplash.jpg" size="small">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl/none fancy">
            World Ocean Day 2024 Zine
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            To commemorate World Ocean Day 2024, we organized a contest inviting
            young individuals to contribute their artistic or literary
            creations. A selection of these submissions was then curated into a
            zine.
          </p>
        </Banner>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <h1 className="text-3xl sm:text-4xl xl:text-4xl/none font-bold text-center -mt-12 pb-12">
            Final Zine
          </h1>
          <p>To be added...</p>
        </section>
      </main>
      <YOIFooter />
    </div>
  );
}
