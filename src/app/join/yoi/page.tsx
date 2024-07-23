"use client";

import Banner from "@/components/banners/banner";

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black">
      <main className="z-1 flex-1">
        <Banner
          bg="/heroes/dark_sea.png"
          title="Join Our Team"
          description="Thank you for your interest in joining our team!
            At this time, we are not looking for new members.
            Please check back later for updates."
        />
      </main>
    </div>
  );
}
