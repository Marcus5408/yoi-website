"use client";

import YOINav from "@/components/navigation/navigation.tsx";
import Banner from "@/components/banners/banner";
import TextSection from "@/components/sections/text-section";
import YOIFooter from "@/components/footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import pastEvents from "./past_events.json";

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black">
      <YOINav />
      <main className="z-1 flex-1">
        <Banner bg="/shaun-low-v8Un2Roo1Ak-unsplash.jpg" size="medium">
          <h1 className="fancy text-4xl sm:text-5xl md:text-6xl lg:text-7xl/none">
            YOI Events
          </h1>
          <p className="max-w-[600px] text-gray-800 dark:text-gray-400 md:text-xl">
            We hold a variety of events throughout the year. Check out what
            we&apos;re currently running!
          </p>
        </Banner>
        <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Current Event
        </h1>
        <TextSection
          title="YOI Ocean Activism Workshop"
          description="The YOI is hosting an ocean activism workshop where participants can learn more about advocacy, network with people, and win a monetary prize: Sign up to our free Ocean Activism Workshop!"
          link="https://forms.gle/hVaFoYV61DXd9EF9A"
          buttonText="Sign up!"
        ></TextSection>
        <section className="flex flex-col w-full px-12 items-center">
          <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Past Events
          </h1>
          <Carousel className="h-auto py-6 sm:mx-24 w-[75vw]">
            <CarouselContent>
              {pastEvents.map((event, index) => (
                <CarouselItem key={index} className="basis-full lg:basis-1/2">
                  <Card>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="font-medium">
                        {event.date}
                      </CardDescription>
                      <CardDescription>{event.description}</CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>
      <YOIFooter />
    </div>
  );
}
