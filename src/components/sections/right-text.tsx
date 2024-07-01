import Link from "next/link";
import Image from "next/image";
import React from "react";

type RightTextProps = {
  image?: string;
  title?: string;
  description?: string;
  link?: string;
  buttonText?: string;
  className?: string;
};

const RightText: React.FC<RightTextProps> = ({
  image,
  title,
  description,
  link,
  buttonText,
  className,
}) => {
  const checkedImage = image ?? "/wexor-tmg-L-2p8fapOA8-unsplash.jpg";
  const checkedLink = link ?? "#";
  const checkedButtonText = buttonText ?? "Learn More";

  return (
    <section className={"w-full py-12 md:py-24 lg:py-24 bg-yoi-white dark:bg-gray-900 " + className}>
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
          <div className="flex flex-col justify-center space-y-4 items-end">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {title}
              </h2>
              <p className="max-w-[600px] text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href={checkedLink}
              >
                {checkedButtonText}
              </Link>
            </div>
          </div>
          <Image
            alt="Program"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-first"
            height="310"
            src={checkedImage}
            width="550"
          />
        </div>
      </div>
    </section>
  );
};

export default RightText;
