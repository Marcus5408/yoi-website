"use client";

import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../../components/navigation/sidebar.tsx";
import Navbar from "../../components/navigation/navbar.tsx";
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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black w-screen">
      <YOINav />
      <main className="flex-1 z-1">
        <Banner bg="/shaun-low-v8Un2Roo1Ak-unsplash.jpg">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none fancy">
            Empowering Communities, Transforming Lives
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Our mission is to create positive and lasting change in the
            communities we serve through innovative programs and partnerships.
          </p>
        </Banner>
        <section className="items-center justify-between w-screen px-20 pt-10">
          <h1 className="text-3xl sm:text-4xl xl:text-4xl/none font-bold text-center">
            Meet Our Team
          </h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl">Cabinet</AccordionTrigger>
              <AccordionContent className="px-16">
                <Carousel>
                  <CarouselContent className="-ml-2 md:-ml-4">
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <div className="space-y-2">
                        <Image
                          alt="Marlin Xie"
                          className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                          height="200"
                          src="/team/marlin.png"
                          width="200"
                        />
                        <div className="text-center">
                          <h3 className="text-lg font-semibold">Marlin Xie</h3>
                          <p className="text-md text-gray-400 dark:text-gray-300">
                            he/him
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            Founder & President
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Marlin is a high school junior in New York
                            passionate about protecting the environment,
                            especially the ocean. He is a current NOAA Ocean
                            Guardian Youth Ambassador and an EarthEcho
                            International Marine Plastics Ambassador, and has
                            previously worked with other environmental nonprofit
                            organizations. YOI was founded by him to continue
                            advocating for the ocean past a school club he
                            created that was dedicated to a similar mission and
                            into the greater world.
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <div className="space-y-2">
                        <Image
                          alt="Ankur Parikh"
                          className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                          height="200"
                          src="/team/ankur.jpg"
                          width="200"
                        />
                        <div className="text-center">
                          <h3 className="text-lg font-semibold">
                            Ankur Parikh
                          </h3>
                          <p className="text-md text-gray-400 dark:text-gray-300">
                            he/him
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            Vice President of Research
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Ankur is a high school sophomore in Southern
                            California who has a strong passion for the
                            environment. He participates in different programs
                            including Cool Irvine and is a NOAA Ocean Guardian
                            Youth Ambassador. He is excited to work with YOI and
                            continue helping protect the natural beauty of our
                            oceans and our planet.
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <div className="space-y-2">
                        <Image
                          alt="Grace Corveleyn"
                          className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                          height="200"
                          src="/team/grace.jpg"
                          width="200"
                        />
                        <div className="text-center">
                          <h3 className="text-lg font-semibold">
                            Grace Corveleyn
                          </h3>
                          <p className="text-md text-gray-400 dark:text-gray-300">
                            she/her
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            Vice President of Research
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Grace is a high school sophomore living in New
                            Jersey. Currently, she serves as a high school
                            ambassador for The Climate Initiative and as a NOAA
                            Ocean Guardian Ambassador. She hopes that working
                            with YOI will help her to spread her message of
                            advocacy and awareness towards plastic pollution
                            reduction and marine biodiversity management.
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <div className="space-y-2">
                        <Image
                          alt="Angela Liu"
                          className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                          height="200"
                          src="/team/angela.jpg"
                          width="200"
                        />
                        <div className="text-center">
                          <h3 className="text-lg font-semibold">Angela Liu</h3>
                          <p className="text-md text-gray-400 dark:text-gray-300">
                            she/her
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            Vice President of Content
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Angela is a high school junior in New York who is
                            excited to further contribute to the amazing climate
                            and environmental initiatives that exist to protect
                            our Earth, and specifically our Earth’s oceans. She
                            is currently volunteering for the Wildlife
                            Conservation Society at the New York Aquarium,
                            assisting in educational programs and inspiring
                            people to value nature. She is eager to join a team
                            of other passionate individuals and enable others to
                            take initiative for the causes that they care about.
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <div className="space-y-2">
                        <Image
                          alt="Lucine Husain"
                          className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                          height="200"
                          src="/team/lucine.jpg"
                          width="200"
                        />
                        <div className="text-center">
                          <h3 className="text-lg font-semibold">
                            Lucine Husain
                          </h3>
                          <p className="text-md text-gray-400 dark:text-gray-300">
                            any pronouns
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            Secretary
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Lucine, a sophmore in New York, is passionate about
                            environmental advocacy. He has worked with Our
                            Climate, and hopes to use his knowledge and skills
                            to further his involvement with the environment. He
                            is thrilled to further YOI&apos;s mission and
                            continue advocating for oceans.
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <div className="space-y-2">
                        <Image
                          alt="Sydney Deb"
                          className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                          height="200"
                          src="/team/sydney.jpg"
                          width="200"
                        />
                        <div className="text-center">
                          <h3 className="text-lg font-semibold">Sydney Deb</h3>
                          <p className="text-md text-gray-400 dark:text-gray-300">
                            she/her
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            Treasurer
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Sydney is a current Junior from New York hoping to
                            peruse biotechnology in the future. She is
                            passionate about making a difference in the world
                            and her community and loves combining her love for
                            art with that of creative conservation. She’s very
                            excited to work with YOI to spread its mission for
                            marine advocacy and education!
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <div className="space-y-2">
                        <Image
                          alt="Issac Liu"
                          className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                          height="200"
                          src="/team/issac.jpg"
                          width="200"
                        />
                        <div className="text-center">
                          <h3 className="text-lg font-semibold">Issac Liu</h3>
                          <p className="text-md text-gray-400 dark:text-gray-300">
                            he/him
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            Webmaster
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Issac is a high school sophomore in New York City
                            who wants to leave an impact on the world. Through
                            YOI, he hopes to gain more knowledge regarding the
                            environmental issues that our waters are facing and
                            the solutions to solve them. He’s excited to help
                            contribute to YOI’s mission.
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </AccordionContent>
            </AccordionItem>
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
