"use client";

import YOINav from "@/components/navigation/navigation.tsx";
import Banner from "@/components/banners/banner";
import ProjectCard from "@/components/project-card";
import YOIFooter from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black w-screen">
      <YOINav />
      <main className="flex-1 z-1">
        <Banner bg="/shaun-low-v8Un2Roo1Ak-unsplash.jpg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl/none fancy">
            What we&apos;re doing
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Our mission is to educate the public about ocean threats and empower
            today&apos;s youth through advocacy of existing and potential
            solutions.
          </p>
        </Banner>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <h1 className="text-3xl sm:text-4xl xl:text-4xl/none font-bold text-center -mt-12 pb-12">
            Our Projects
          </h1>
          <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
            {[...Array(6)].map((e, index) => (
              <ProjectCard
                key={index}
                title={`Project ${index}`}
                description={`This is a description of project ${index}`}
                image="/shaun-low-v8Un2Roo1Ak-unsplash.jpg"
                link="#"
              />
            ))}
          </div>
        </section>
      </main>
      <YOIFooter />
    </div>
  );
}
