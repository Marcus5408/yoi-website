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
        <Banner bg="/shaun-low-v8Un2Roo1Ak-unsplash.jpg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl/none fancy">
            Join Our Team
          </h1>
          <p className="max-w-[600px] text-gray-700 md:text-xl dark:text-gray-400">
            Thank you for your interest in joining our team! At this time, we are not looking for new members. Please check back later for updates.
          </p>
        </Banner>
      </main>
      <YOIFooter />
    </div>
  );
}
