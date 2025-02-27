import Link from "next/link";

export default function YOIFooter() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <p className="text-center text-xs text-gray-500 dark:text-gray-400">
        © 2024 The Youth Oceanic Initiative. All rights reserved.
      </p>
      <nav className="flex gap-2 sm:ml-auto sm:gap-6">
        <Link
          className="text-xs underline-offset-4 hover:underline"
          href="https://www.instagram.com/youth_oceanic_initiative/"
        >
          Instagram
        </Link>
        <Link
          className="text-xs underline-offset-4 hover:underline"
          href="https://www.tiktok.com/@youthoceanicinitiative"
        >
          TikTok
        </Link>
        <Link
          className="text-xs underline-offset-4 hover:underline"
          href="mailto:hello@theyoi.org"
        >
          Email
        </Link>
        <Link
          className="text-xs underline-offset-4 hover:underline"
          href="mailto:webmaster@theyoi.org&subject=YOI%20Website%20Issue"
        >
          Website Problems?
        </Link>
      </nav>
    </footer>
  );
}
