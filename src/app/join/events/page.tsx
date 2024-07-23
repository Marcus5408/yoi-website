"use client";

import Banner from "@/components/banners/banner";
import TextSection from "@/components/sections/text-section";
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
      <main className="z-1 flex-1">
        <Banner
          bg="/heroes/wave.png"
          size="medium"
          title="YOI Events"
          description="We hold a variety of events throughout the year.
            Check out what events we're currently running!"
        />
        <h1 className="pt-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Current Events
        </h1>
        <TextSection
          title="YOI Ocean Activism Workshop"
          description="The YOI is hosting an ocean activism workshop where participants can learn more about advocacy, network with people, and win a monetary prize: Sign up to our free Ocean Activism Workshop!"
          link="https://forms.gle/hVaFoYV61DXd9EF9A"
          buttonText="Sign up!"
        ></TextSection>
        <section className="flex w-full flex-col items-center px-12">
          <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Past Events
          </h1>
          <Carousel className="h-auto w-[75vw] py-6 sm:mx-24">
            <CarouselContent>
              {pastEvents.map((event, index) => (
                <CarouselItem key={index} className="basis-full lg:basis-1/2">
                  <Card>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="font-medium">
                        {`This event happened on ${event.date}.`}
                      </CardDescription>
                      <br />
                      Event Description:
                      <br />
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
    </div>
  );
}
