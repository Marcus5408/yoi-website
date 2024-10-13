import PersonMiniCard from "@/components/person-mini";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useEffect, useState } from "react";
import data from "../about/yoi-execs.json";

type ExecsJSON = {
  department: string;
  people: {
    name: string;
    role: string;
    pronouns: string;
    image: string;
    description: string;
  }[];
}[];
// assert JSON data as ExecsJSON
data as ExecsJSON;

export default function TeamSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Team
          </h2>
          <p className="mx-auto max-w-[75%] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our team is composed of a diverse group of students all passionate
            about the ocean.
          </p>
        </div>
        <Accordion
          type="multiple"
          className=""
          defaultValue={data.map((department) => department.department)}
        >
          {data.map((department, index) => (
            <AccordionItem value={department.department} key={index}>
              <AccordionTrigger className="text-2xl">
                <div className="pl-4">{department.department}</div>
              </AccordionTrigger>
              <AccordionContent className="max-w-[99vw] justify-center lg:w-[75vw]">
                {DepartmentCarousel(department)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Button className="mx-auto w-[20em]">
          <Link href="/about/team">Meet Our Full Team</Link>
        </Button>
      </div>
    </section>
  );
}

function DepartmentCarousel(department: ExecsJSON[0]) {
  const [api, setApi] = useState<CarouselApi>();
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Carousel
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: department.people.length * 800,
        }),
      ]}
    >
      <CarouselContent>
        {department.people.map((person, index) => (
          <CarouselItem
            key={index}
            className="my-1 flex grow space-y-2 md:basis-1/2 2xl:basis-1/3"
          >
            <PersonMiniCard
              key={index}
              name={person.name}
              pronouns={person.pronouns}
              role={person.role}
              picture={person.image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}