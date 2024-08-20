"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
  DrawerHeader,
  DrawerClose,
  DrawerFooter,
  DrawerContent,
  Drawer,
} from "@/components/ui/drawer";
import Banner from "@/components/banners/banner.tsx";
import data from "../about/yoi-execs.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import PersonMiniCard from "@/components/person-mini";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useMediaQuery } from "react-responsive";
import {
  TextSection,
  TextSectionContent,
  TextSectionToast,
  TextSectionTitle,
  TextSectionDescription,
  TextSectionButton,
  TextSectionImage,
} from "@/components/text-section";

const Component = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [iframeWidth, setIframeWidth] = useState<string>("0");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  useEffect(() => {}, [isTabletOrMobile]);
  useEffect(() => {
    setIframeWidth(isTabletOrMobile ? "100%" : "80%");

    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, isTabletOrMobile]);

  return (
    <div className="flex w-full flex-col">
      <main className="flex-1 flex-col">
        <Banner
          bg="/heroes/dark_sea.png"
          title={"Learn.\nDiscuss.\nAdvocate."}
          description="The Youth Oceanic Initiative was founded to educate
          younger generations about the oceans. Join us and help us educate
          the next generation of ocean stewards."
          buttonName="Check out our Instagram!"
          buttonLink="https://www.instagram.com/youth_oceanic_initiative/"
        />
        <TextSection>
          <TextSectionImage
            alt="World Ocean Day 2024 Thumbnail"
            src="/projects/WOD2024-thumb.png"
          />
          <TextSectionContent>
            <TextSectionToast>Featured Project</TextSectionToast>
            <TextSectionTitle>World Ocean Day 2024 Zine</TextSectionTitle>
            <TextSectionDescription>
              In celebration of World Ocean Day 2024, YOI organized a
              competition inviting artists and writers to contribute their
              creations for inclusion in a zine, with the added incentive of a
              prize draw. The initiative garnered over 20 entries globally,
              culminating in the presentation of the zine at YOI&apos;s World
              Ocean Day 2024 live webinar on June 8th, 2024.
            </TextSectionDescription>
            <TextSectionButton href="/projects/WOD2024">
              Learn More
            </TextSectionButton>
          </TextSectionContent>
        </TextSection>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Team
              </h2>
              <p className="mx-auto max-w-[75%] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team is composed of a diverse group of students all
                passionate about the ocean.
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
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Button className="mx-auto w-[20em]">
              <Link href="/about/team">Meet Our Full Team</Link>
            </Button>
          </div>
        </section>
        <section className="w-full border-t py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Stay Connected
              </h2>
              <p className="mx-auto max-w-[75%] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up for our monthly newsletter, <em>The Maritime Logs</em>,
                to stay up-to-date on our latest initiatives and events.
              </p>
            </div>
            <iframe
              title="Newsletter Signup"
              src="https://docs.google.com/forms/d/e/1FAIpQLSeIC4kudhR1aTVW7c05KNqz4GNrKgTIuOnEDcYz2ILAFt9r5A/viewform?embedded=true"
              width={iframeWidth}
              height="640"
              className="mx-auto"
            >
              Loading…
            </iframe>
            {/*
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get our monthly newsletter in your inbox.&nbsp;
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div> */}
          </div>
        </section>
      </main>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            className="fixed bottom-4 right-4 z-50 sm:hidden"
            variant="outline"
          >
            <div className="flex content-center items-center gap-2 align-middle">
              Sign up for our newsletter!
              <MailIcon className="h-4 w-4" />
              <span className="sr-only">Open newsletter signup</span>
            </div>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="sm:hidden">
          <DrawerHeader>
            <DrawerTitle>
              Sign up for <em>The Maritime Logs</em>
            </DrawerTitle>
            <DrawerDescription className="mx-auto w-[85%]">
              Stay up-to-date with our latest news and events with our monthly
              newsletter.
            </DrawerDescription>
          </DrawerHeader>
          <iframe
            title="Newsletter Signup"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeIC4kudhR1aTVW7c05KNqz4GNrKgTIuOnEDcYz2ILAFt9r5A/viewform?embedded=true"
            width={iframeWidth}
            height="340"
            className="mx-auto"
          >
            Loading…
          </iframe>
          {/*
          <div className="px-4">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
          */}
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Component;

function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
