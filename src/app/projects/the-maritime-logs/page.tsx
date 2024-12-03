"use client";

import Banner from "@/components/banners/banner";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import issues from "./issues.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  // Separate first issue in issues.json
  const [firstIssue, ...restIssues] = issues;

  return (
    <div className="flex w-full flex-col bg-yoi-white dark:bg-yoi-black">
      <main className="z-1 flex-1">
        <Banner
          bg="/heroes/wexor-tmg-L-2p8fapOA8-unsplash.jpg"
          size="medium"
          title="The Maritime Logs"
          description="A newsletter with all the latest marine news and content,
            curated by the YOI team every month."
        />
        <section className="w-full py-12 pt-24 sm:pt-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 pb-14 text-center md:px-6">
            <div className="space-y-3">
              <h1 className="-mt-12 pb-2 text-center text-3xl font-bold sm:text-4xl xl:text-4xl/none">
                July 2024 Issue Preview
              </h1>
              <p className="mx-auto max-w-[75%] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Like what you see below? Enter your email here to get the latest
                issue delivered to your inbox monthly.
              </p>
            </div>
            <iframe
              title="Newsletter Signup"
              src="https://docs.google.com/forms/d/e/1FAIpQLSeIC4kudhR1aTVW7c05KNqz4GNrKgTIuOnEDcYz2ILAFt9r5A/viewform?embedded=true"
              width="100%"
              height="340"
              className="mx-auto width-full sm:width-9/12"
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
            </div>
            */}
          </div>
          <PDF
            className="h-[90svh] w-screen sm:mx-auto sm:w-[90svw]"
            title={firstIssue.title}
            link={firstIssue.link}
            thumbnail={firstIssue.thumbnail}
          />
          <div className="container grid gap-4 px-4 pb-14 pt-14 md:px-6">
            <h2 className="text-center text-2xl font-bold sm:text-3xl">
              Past Issue Previews
            </h2>
            <Accordion type="multiple">
              {restIssues.map((issue, index) => (
                <AccordionItem key={index} value={issue.value}>
                  <AccordionTrigger>
                    <h3 className="text-xl font-semibold">{issue.title}</h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <PDF
                      className="h-[80svh] w-full sm:mx-auto"
                      title={issue.title}
                      link={issue.link}
                      thumbnail={issue.thumbnail}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
}

function PDF({
  className = "",
  ...props
}: React.HTMLProps<HTMLIFrameElement> & {
  zoom?: string;
  pageView?: string;
  title: string;
  link: string;
  thumbnail: string;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // if user is on mobile, open the pdf in a new tab
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return (
      <>
        <p className="px-auto pb-10 text-center">
          Tap the image below to open the preview.
        </p>
        <Link
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          <Image
            src={props.thumbnail}
            alt={`The Maritime Logs ${props.title} Issue PDF`}
            width={1920}
            height={1080}
            layout="responsive"
          />
        </Link>
      </>
    );
  } else {
    return (
      <iframe
        title={`The Maritime Logs ${props.title} Issue PDF`}
        src={props.link}
        className={className}
      />
    );
  }
}
