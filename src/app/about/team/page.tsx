"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import YOINav from "@/components/navigation/navigation.tsx";
import Banner from "@/components/banners/banner.tsx";
import YOIFooter from "@/components/footer.tsx";
import data from "../yoi-execs.json";
import PersonCard from "@/components/person.tsx";

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black">
      <YOINav />
      <main className="z-1 flex-1">
        <Banner bg="/heroes/blue_mountains.png">
          <h1 className="fancy text-4xl sm:text-5xl md:text-6xl lg:text-7xl/none">
            We&apos;re creating oceanic stewards.
          </h1>
          <p className="max-w-[600px] text-gray-800 dark:text-gray-400 md:text-xl">
            Our mission is to educate the public about ocean threats and empower
            today&apos;s youth through advocacy of existing and potential
            solutions.
          </p>
        </Banner>
        <section className="w-screen items-center justify-between px-5 py-10 pb-20 lg:px-10">
          <h1 className="text-center text-3xl font-bold sm:text-4xl xl:text-4xl/none">
            Meet Our Team
          </h1>
          <Accordion
            type="multiple"
            className="w-full"
            defaultValue={
              // create an array of all values of the "department" key
              data.map((department) => department.department)
            }
          >
            {data.map((department, index) => (
              <AccordionItem value={department.department} key={index}>
                <AccordionTrigger className="text-2xl">
                  <div className="pl-4">{department.department}</div>
                </AccordionTrigger>
                <AccordionContent className="px-12 lg:px-14">
                  <Carousel>
                    <CarouselContent className="flex">
                      {department.people.map((person, index) => (
                        <CarouselItem
                          key={index}
                          className="flex space-y-2 md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
                        >
                          <PersonCard
                            picture={person.image}
                            name={person.name}
                            pronouns={person.pronouns}
                            role={person.role}
                            description={person.description}
                            className="basis-1/2 space-y-2 lg:basis-1/3 2xl:basis-1/4"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
      <YOIFooter />
    </div>
  );
}
