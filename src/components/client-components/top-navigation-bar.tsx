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
import { LogoBlack } from "@/assets";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const navConfig = [
  {
    title: "Explore Integrations",
    href: "/explore-integrations",
    links: [
      { title: "Link 1", href: "/link1", description: "Link 1 description" },
      { title: "Link 2", href: "/link2", description: "Link 2 description" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    links: [
      { title: "Link 1", href: "/link1", description: "Link 1 description" },
      { title: "Link 2", href: "/link2", description: "Link 2 description" },
    ],
  },
  {
    title: "About Us",
    href: "/about-us",
  },
];

const TopNavigationBar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2">
        <Link href="/">
          <LogoBlack className="h-10 w-24" />
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {navConfig.map((nav, index) => (
              <React.Fragment key={index}>
                {nav.links ? (
                  <NavigationMenuItem key={`nav-item-${index}`}>
                    <NavigationMenuTrigger>{nav.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {nav.links &&
                          nav.links.map((link, linkIndex) => (
                            <ListItem
                              key={`nav-link-${index}-${linkIndex}`}
                              title={link.title}
                              href={link.href}
                            >
                              {link.description}
                            </ListItem>
                          ))}
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
            <Button className="rounded">
              <ArrowTopRightIcon className="mr-2" /> Documentation
            </Button>
            <Button
              variant="outline"
              className="rounded [background:#611F69] px-[10px)] text-white text-base font-medium p-4"
            >
              Join Slack
            </Button>
          </div>
        </NavigationMenu>
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
