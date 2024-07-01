"use client";

import YOINav from "@/components/navigation/navigation.tsx";
import Banner from "@/components/banners/banner";
import TextSection from "@/components/sections/text-section";
import YOIFooter from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black w-screen">
      <YOINav />
      <main className="flex-1 z-1">
        <Banner bg="/shaun-low-v8Un2Roo1Ak-unsplash.jpg" size="small">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl/none fancy">
            Find A YOI Chapter
          </h1>
          <p className="max-w-[600px] text-gray-700 md:text-xl dark:text-gray-400">
            Use our interactive map to find a YOI chapter near you. If you
            don&apos;t see a chapter near you, consider starting one!
          </p>
        </Banner>
        <section className="w-full pb-12 md:pb-24 lg:pb-32">
          {/* add mapkitjs */}
          <div className="w-full h-96" id="map">
            <h1>The map is currently unavailable</h1>
          </div>
        </section>
      </main>
      <YOIFooter />
    </div>
  );
}
