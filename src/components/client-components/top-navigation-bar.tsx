"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { DiscordButton, DiscordIcon, LogoBlack } from "@/assets";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Image from "next/image";

const navConfig = [
  {
    title: "Explore Integrations",
    href: "/explore-integrations",
    links: [
      {
        title: "Sources",
        href: "/integrations/#Sources",
        description: "Explore all of our sources",
      },
      {
        title: "Generators",
        href: "/integrations/#Generators",
        description: "Explore all of our generators",
      },
      {
        title: "Destinations",
        href: "/integrations/#Destinations",
        description: "Explore all of our destinations",
      },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    links: [
      {
        title: "Github",
        href: "https://github.com/dat-labs/dat-main",
        description: "View the github repository",
      },
      {
        title: "Discord",
        href: "https://discord.gg/3Qr5dt39xH",
        description: "Join our Discord channel",
      },
    ],
  },
  {
    title: "About Us",
    href: "/about-us",
  },
];

const TopNavigationBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div className="w-11/12 lg:w-8/12">
        <div className="flex items-center justify-between px-4 py-2">
          <Link href="/">
            <LogoBlack
              className="h-10 w-24"
              role="img"
              aria-label="dat logo in black"
            />
          </Link>

          <div className="hidden lg:inline">
            <NavigationMenu>
              <NavigationMenuList>
                {navConfig.map((nav, index) => (
                  <React.Fragment key={index}>
                    {nav.links ? (
                      <NavigationMenuItem key={`nav-item-${index}`}>
                        <NavigationMenuTrigger className="font-medium">
                          {nav.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="p-4 w-[30vw]">
                            {nav.links &&
                              nav.links.map((link, linkIndex) =>
                                nav.title != "Resources" ? (
                                  <ListItem
                                    key={`nav-link-${index}-${linkIndex}`}
                                    title={link.title}
                                    href={link.href}
                                  >
                                    {link.description}
                                  </ListItem>
                                ) : (
                                  <ListItem
                                    key={`nav-link-${index}-${linkIndex}`}
                                    title={link.title}
                                    href={link.href}
                                    target={`${
                                      nav.title === "Resources" && "_blank"
                                    } `}
                                    rel={`${
                                      nav.title === "Resources" &&
                                      "noopener noreferrer"
                                    } `}
                                  >
                                    {link.description}
                                  </ListItem>
                                )
                              )}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={`nav-item-${index}`}>
                        <Link href={nav.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            {nav.title}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    )}
                  </React.Fragment>
                ))}
              </NavigationMenuList>
              <div className="flex gap-4 ml-8">
                <Link
                  href={"https://datlabs.gitbook.io/datlabs"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded">
                    <ArrowTopRightIcon className="mr-2" /> Documentation
                  </Button>
                </Link>
                <Link
                  href={"https://discord.gg/3Qr5dt39xH"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DiscordButton className="w-[150px] hover:opacity-90" />
                </Link>
              </div>
            </NavigationMenu>
          </div>
          <div className="inline lg:hidden">
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                >
                  <HamburgerMenuIcon className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm h-full mb-12">
                  <div className="p-4 pb-0">
                    <div className="flex flex-wrap">
                      {navConfig.map((navItem) => (
                        <div key={navItem.title} className="w-full mt-4">
                          <Link
                            href={navItem.href}
                            className="text-xl font-semibold mb-2"
                            onClick={handleLinkClick}
                          >
                            {navItem.title}
                          </Link>
                          <div className="flex flex-col gap-2 ml-4">
                            {navItem.links?.map((link) => (
                              <div key={link.title}>
                                <Link
                                  href={link.href}
                                  className="text-muted-foreground mt-3"
                                  onClick={handleLinkClick}
                                >
                                  {link.title}
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="h-[1px] my-8 rounded-sm"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #EEEEEE 0%, #888888 50%, #EEEEEE 100%)",
                    }}
                  ></div>
                  <div className="flex gap-4 ml-8">
                    <Link
                      href={"https://datlabs.gitbook.io/datlabs"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Join the dat discord."
                    >
                      <Button className="rounded">
                        <ArrowTopRightIcon className="mr-2" /> Documentation
                      </Button>
                    </Link>
                    <Link
                      href={"https://discord.gg/3Qr5dt39xH"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DiscordButton className="w-[150px] hover:opacity-90" />
                    </Link>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;

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
