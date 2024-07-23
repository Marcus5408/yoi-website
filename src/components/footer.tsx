import Link from "next/link";

export default function YOIFooter() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <p className="text-xs text-gray-500 dark:text-gray-400">
      © 2024 The Youth Oceanic Initiative. All rights reserved.
    </p>
    <nav className="sm:ml-auto flex gap-2 sm:gap-6">
      <Link className="text-xs hover:underline underline-offset-4" href="https://www.instagram.com/youth_oceanic_initiative/">
        Instagram
      </Link>
      <Link className="text-xs hover:underline underline-offset-4" href="https://www.tiktok.com/@youthoceanicinitiative">
        TikTok
      </Link>
      <Link className="text-xs hover:underline underline-offset-4" href="mailto:youthoceanicinitiative@gmail.com">
        Email
      </Link>
      <Link className="text-xs hover:underline underline-offset-4" href="mailto:youthoceanicinitiative+webmaster@gmail.com?cc=issac@matchaflavored.site&subject=YOI%20Website%20Issue">
        Website Problems?
      </Link>
    </nav>
  </footer>
  )
}