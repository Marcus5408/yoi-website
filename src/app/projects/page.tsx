"use client";

import YOINav from "@/components/navigation/navigation.tsx";
import Banner from "@/components/banners/banner";
import ProjectCard from "@/components/project-card";
import YOIFooter from "@/components/footer";
import Image from "next/image";
import projects from "./projects.json";

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black">
      <YOINav />
      <main className="z-1 flex-1">
        <Banner bg="/shaun-low-v8Un2Roo1Ak-unsplash.jpg">
          <h1 className="fancy text-4xl sm:text-5xl md:text-6xl lg:text-7xl/none">
            What we&apos;re doing
          </h1>
          <p className="max-w-[600px] text-gray-800 dark:text-gray-400 md:text-xl">
            Our mission is to educate the public about ocean threats and empower
            today&apos;s youth through advocacy of existing and potential
            solutions.
          </p>
        </Banner>
        <section className="w-full py-12 pt-24 sm:pt-12 md:py-24 lg:py-32">
          <h1 className="-mt-12 pb-12 text-center text-3xl font-bold sm:text-4xl xl:text-4xl/none">
            Our Projects
          </h1>
          <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-3">
            {projects.map((e, index) => (
              <ProjectCard
                key={index}
                title={projects[index].title}
                description={projects[index].description}
                image={projects[index].image}
                link={projects[index].link}
              />
            ))}
          </div>
        </section>
      </main>
      <YOIFooter />
    </div>
  );
}
