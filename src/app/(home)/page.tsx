"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
import { Label } from "@/components/ui/label";
import YOINav from "@/components/navigation/navigation.tsx";
import Banner from "@/components/banners/banner.tsx";
import YOIFooter from "@/components/footer.tsx";
import RandomPics from "./randomCrew.tsx";

const Component = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      RandomPics();
    }, 500); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh] w-screen">
      <YOINav />
      <main className="flex-1 z-1">
        <Banner bg="/header.jpg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl/none fancy">
            Learn. <br />
            Discuss. <br />
            Advocate. <br />
          </h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            The Youth Oceanic Initiative was founded to educate younger
            generations about the oceans. Join us and help us educate the next
            generation of ocean stewards.
          </p>
          <Button className="w-[75%]">Join Now</Button>
        </Banner>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-yoi-white dark:bg-yoi-black">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <Image
                alt="Program"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/wexor-tmg-L-2p8fapOA8-unsplash.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Our Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    We walk our talk
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    In addition to educating the youth, the Youth Oceanic
                    Initiative also has a number of projects that help to
                    protect the oceans. The rest of this is sample text to be
                    replaced. Please keep it descriptive and concise.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Learn More
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Involved
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Team
              </h2>
              <p className="mx-auto max-w-[75%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our team is composed of a diverse group of students all
                passionate about the ocean.
              </p>
            </div>
            {RandomPics()}
            <Button className="mx-auto w-[20em]">
              <Link href="#">Meet Our Full Team</Link>
            </Button>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Stay Connected
              </h2>
              <p className="mx-auto max-w-[75%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Sign up for our monthly newsletter, <em>The Maritime Logs</em>,
                to stay up-to-date on our latest initiatives and events.
              </p>
            </div>
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
            </div>
          </div>
        </section>
      </main>
      <YOIFooter />
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            className="fixed bottom-4 right-4 z-50 sm:hidden"
            variant="outline"
          >
            <div className="flex gap-2 align-middle content-center items-center">
              Sign up for our newsletter!
              <MailIcon className="w-4 h-4" />
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
