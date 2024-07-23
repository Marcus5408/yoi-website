import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import nav_items from "./nav_items.json";
import "material-icons/iconfont/round.css";

type NavCatLinks = {
  title: string;
  href: string;
  description: string;
};

type NavCategory = {
  category: string;
  root: string;
  links: NavCatLinks[];
};

type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { setTheme } = useTheme();

  return (
    <header
      className={
        "px-4 py-4 pb-8 lg:px-6 h-83 flex items-center bg-gradient-to-b from-yoi-blue-4 from-50% dark:from-yoi-blue-1 to-transparent " +
        className
      }
    >
      <Link
        className="flex gap-1 items-center justify-center flex-none"
        href="/"
      >
        <div className="logo h-75 w-75 pr-4">
          <Image
            src="/yoi_logo.png"
            className="h-75 w-75"
            alt="YOI Logo"
            width={75}
            height={75}
          />
          <span className="sr-only">The Youth Oceanic Initiative</span>
        </div>
        <div className="text-xl leading-5">
          <h1 className="m-0">Youth</h1>
          <h1 className="m-0">Oceanic</h1>
          <h1 className="m-0 mb-2 underline decoration-wavy decoration-2 underline-offset-4 decoration-yoi-blue-2 dark:decoration-yoi-blue-4">
            Initiative
          </h1>
        </div>
      </Link>
      <div className="pr-4 ml-auto flex gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <NavigationMenu className="flex items-center">
          <NavigationMenuList>
            {nav_items.map((item: NavCategory) => (
              <NavigationMenuItem key={item.category}>
                <NavigationMenuTrigger>
                  <Link href={item.root}>{item.category}</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid p-2 md:grid-cols-2 w-[500px]">
                    {item.links.map((NavCatLinks) => (
                      <ListItem
                        key={NavCatLinks.title}
                        title={NavCatLinks.title}
                        href={NavCatLinks.href}
                      >
                        {NavCatLinks.description !== ""
                          ? NavCatLinks.description
                          : ""}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          variant="default"
          size="default"
          className="text-yoi-white"
        >
          <Link href="/donate">
            <div className="flex items-center gap-2">
              <span className="material-icons-round">payments</span>
              <span>Donate</span>
            </div>
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
