"use client";

import YOINav from "@/components/navigation/navigation";
import Banner from "@/components/banners/banner";
import TextSection from "@/components/text-section";

export default function Home() {
  return (
    <div className="flex w-full flex-col bg-yoi-white dark:bg-yoi-black">
      <main className="z-1 flex-1">
        <Banner
          bg="/heroes/shaun-low-v8Un2Roo1Ak-unsplash.jpg"
          title="Join Our Mission"
          description="Our mission is to educate the public about ocean threats
            and empower today's youth through advocacy of existing and potential
            solutions."
        />
        <section className="w-full pb-12 md:pb-24 lg:pb-32">
          <TextSection
            image="/projects/ocg-saving-the-ocean-xch7jXAaqqo-unsplash.jpg"
            title="Find Opportunities"
            description="Look through our curated opportunity database to find an event or opportunity being hosted by us or our partners organizations. We have a variety of opportunities for all ages and skill levels."
            link="/resources/opportunities"
            buttonText="Find an Opportunity"
          />
          <TextSection
            image="/projects/pin-adventure-map-SJvNVEcU5Rc-unsplash.jpg"
            title="Join A Chapter"
            description="Are you a student? Join a chapter at your school or start one! We have chapters throughout the US and are always looking for new members to join our mission."
            link="/join/chapters"
            buttonText="Find a Chapter"
            side="right"
          />
          <TextSection
            image="/projects/windows-p74ndnYWRY4-unsplash.jpg"
            title="Join the YOI Team"
            description="Join our team of volunteers and help us make a difference. We have a variety of opportunities for all ages and skill levels."
            link="/join/yoi"
            buttonText="Coming Soon"
          />
        </section>
      </main>
    </div>
  );
}
