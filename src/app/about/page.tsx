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
import data from "./yoi-execs.json";
import PersonCard from "@/components/person.tsx";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black w-screen">
      <YOINav />
      <main className="flex-1 z-1">
        <Banner bg="/shaun-low-v8Un2Roo1Ak-unsplash.jpg">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none fancy">
            We&apos;re creating future oceanic stewards.
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Our mission is to educate the public about ocean threats and empower
            today&apos;s youth through advocacy of existing and potential solutions.
          </p>
        </Banner>
        <section className="items-center justify-between w-screen px-5 lg:px-10 py-10 pb-20">
          <h1 className="text-3xl sm:text-4xl xl:text-4xl/none font-bold text-center">
            Meet Our Team
          </h1>
          <Accordion type="multiple">
            {data.map((department, index) => (
              <AccordionItem value={"item" + (index + 1)} key={index}>
                <AccordionTrigger className="text-2xl">
                  {department.department}
                </AccordionTrigger>
                <AccordionContent className="px-12 lg:px-14">
                  <Carousel>
                    <CarouselContent className="">
                      {department.people.map((person, index) => (
                        <CarouselItem
                          key={index}
                          className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 space-y-2 flex"
                        >
                          <PersonCard
                            picture={person.image}
                            name={person.name}
                            pronouns={person.pronouns}
                            role={person.role}
                            description={person.description}
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

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
