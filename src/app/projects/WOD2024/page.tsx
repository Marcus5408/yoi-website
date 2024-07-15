"use client";

import YOINav from "@/components/navigation/navigation.tsx";
import Banner from "@/components/banners/banner";
import YOIFooter from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between bg-yoi-white dark:bg-yoi-black">
      <YOINav />
      <main className="z-1 flex-1">
        <Banner bg="/heroes/shaun-low-v8Un2Roo1Ak-unsplash.jpg" size="medium">
          <h1 className="fancy text-4xl sm:text-5xl md:text-6xl lg:text-7xl/none">
            World Ocean Day 2024 Zine
          </h1>
          <p className="max-w-[600px] text-gray-800 dark:text-gray-400 md:text-xl">
            To commemorate World Ocean Day 2024, we organized a contest inviting
            young individuals to contribute their artistic or literary
            creations. A selection of these submissions was then curated into a
            zine.
          </p>
        </Banner>
        <section className="w-full px-8 py-12 pt-24 sm:px-0 md:py-24 lg:py-32">
          <h1 className="-mt-12 pb-12 text-center text-3xl font-bold sm:text-4xl xl:text-4xl/none">
            Thank you to all the participants!
          </h1>
          <p className="mx-auto max-w-[600px] text-center text-gray-800 dark:text-gray-400">
            To everyone who submitted to our open call and who attended our
            showcase webinar, YOI couldn&apos;t have done it without you. <br />
            <br />
            So many amazing artists spoke about their work during our event, and
            we encourage those that were unable to attend to take a look at the
            zine father down the page. A wheel of fate decided the two young
            artists that will receive monetary prizes from YOI during the
            webinar, and the winners were...
          </p>
          <div className="flex flex-col gap-6 px-4 pt-6 sm:flex-row sm:gap-20 sm:px-96 sm:pt-12">
            <Card className="sm:w-1/2">
              <CardHeader>
                <div className="flex items-center justify-center gap-4">
                  <Avatar className="size-[8rem] content-center">
                    <AvatarImage
                      src="/projects/wod2024/kevin.png"
                      alt="Kevin Lin, Age 17"
                    />
                    <AvatarFallback>KL</AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-medium">
                    Kevin Lin, Age 17
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Kevin is a rising high school senior from Brooklyn, New York.
                  He believes ocean preservation and protecting the ocean from
                  Kevin is a rising high school senior from Brooklyn, New York.
                  He believes ocean preservation and protecting the ocean from
                  man-made pollutants is crucial for the health of the ocean as
                  well as our wellbeing. He fights for the preservation of the
                  ocean through creating art.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="sm:w-1/2">
              <CardHeader>
                <div className="flex items-center justify-center gap-4">
                  <Avatar className="size-[8rem] content-center">
                    <AvatarImage
                      src="/projects/wod2024/ava.jpeg"
                      alt="Ava Saucedo, Age 17"
                    />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-medium">
                    Ava Saucedo, Age 17
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Ava is a rising senior at Woodbridge High in Irvine
                  California. Her chosen medium (photography) aims to convey a
                  feelings of simplicity and overwhelmed. She believes that the
                  ocean is grand and untouchable. She hopes her photography is
                  able to show how this grand beauty interacts with other
                  natural elements!
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <h1 className="-mt-12 pb-12 text-center text-3xl font-bold sm:text-4xl xl:text-4xl/none">
            Final Zine
          </h1>
          <PDF className="h-[90svh] w-screen sm:mx-auto sm:w-[90svw]" />
        </section>
      </main>
      <YOIFooter />
    </div>
  );
}

function PDF({
  className = "",
  ...props
}: React.HTMLProps<HTMLIFrameElement> & { zoom?: string; pageView?: string }) {
  // if user is on mobile, open the pdf in a new tab
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return (
      <>
        <p className="px-auto pb-10 text-center">
          Tap the image below to open the zine.
        </p>
        <Link
          href="./YOI World Ocean Day 2024 Zine.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          <Image
            src="/projects/WOD2024.png"
            alt="World Ocean Day 2024 Zine PDF"
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
        title="World Ocean Day 2024 Zine PDF"
        src="./YOI World Ocean Day 2024 Zine.pdf"
        className={className}
      />
    );
  }
}
