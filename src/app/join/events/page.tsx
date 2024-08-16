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
  // get first event from past events, and remove it from the list
  const [firstEvent, ...restEvents] = pastEvents;

  return (
    <div className="flex w-full flex-col bg-yoi-white dark:bg-yoi-black">
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
          toast={`Happening ${formatDate(firstEvent.date, false)}, ${firstEvent.location === "Online" ? "Online" : `at the ${firstEvent.location}`}`}
          title={firstEvent.title}
          description={firstEvent.description}
          link={firstEvent.link}
          buttonText="Sign up!"
          image={firstEvent.image}
        ></TextSection>
        <section className="flex w-full flex-col items-center px-12">
          <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Past Events
          </h1>
          <Carousel className="h-auto w-[75vw] py-6 sm:mx-24">
            <CarouselContent>
              {restEvents.map((event, index) => (
                <CarouselItem key={index} className="basis-full lg:basis-1/2">
                  <Card>
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={1280}
                      height={720}
                      className="h-48 w-full overflow-hidden rounded-t-lg object-cover"
                    />
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="font-medium">
                        {`This event happened on ${formatDate(event.date)}, ${event.location === "Online" ? "Online" : `at the ${event.location}`}.`}
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

function formatDate(dateString: string, includeYear: boolean = true): string {
  const [month, day, year] = dateString.split("-").map(Number);
  if (isNaN(month) || isNaN(day) || isNaN(year)) {
    return "Invalid Date";
  }
  const date = new Date(year, month - 1, day);
  if (includeYear) {
    return isNaN(date.getTime())
      ? "Date Unavailable"
      : date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
  } else {
    return isNaN(date.getTime())
      ? "Date Unavailable"
      : date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
        });
  }
}
