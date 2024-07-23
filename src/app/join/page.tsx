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
            Join Our Mission
          </h1>
          <p className="max-w-[600px] text-gray-800 md:text-xl dark:text-gray-400">
            Our mission is to educate the public about ocean threats and empower
            today&apos;s youth through advocacy of existing and potential
            solutions.
          </p>
        </Banner>
        <section className="w-full pb-12 md:pb-24 lg:pb-32">
          <TextSection
            title="Find Opportunities"
            description="Look through our curated opportunity database to find an event or opportunity being hosted by us or our partners organizations. We have a variety of opportunities for all ages and skill levels."
            link="/join/volunteer"
            buttonText="Find an Opportunity"
          />
          <TextSection
            title="Join A Chapter"
            description="Are you a student? Join a chapter at your school or start one! We have chapters throughout the US and are always looking for new members to join our mission."
            link="/join/chapters"
            buttonText="Find a Chapter"
            side="right"
          />
          <TextSection
            title="Volunteer"
            description="Join our team of volunteers and help us make a difference. We have a variety of opportunities for all ages and skill levels."
            link="/join/opportunities?provider=YOI"
            buttonText="Contact Us"
          />
        </section>
      </main>
      <YOIFooter />
    </div>
  );
}
