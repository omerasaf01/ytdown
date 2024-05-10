"use client";

import { RiMenu4Fill } from "react-icons/ri";

import { FiYoutube } from "react-icons/fi";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./modeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  NavigationMenuIndicator,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Toggle } from "./ui/toggle";
import mobileNavbar from "./navbars";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

export default function Navbar() {
  return (
    <div className="mobile:!hidden">
      <div className="flex items-center justify-between px-6 border-b py-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <span className="flex gap-2 text-xl items-center font-bold pr-3">
                <FiYoutube /> YTDOWNS
              </span>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
            <Sheet>
              <SheetTrigger asChild>
                <Toggle variant="outline">
                  <RiMenu4Fill />
                </Toggle>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <span className="flex gap-2 text-xl items-center font-bold pr-3 pb-6">
                    <FiYoutube /> YTDOWNS
                  </span>
                </SheetHeader>
                <NavigationMenuList>
                  <div className="flex flex-col gap-1 w-full justify-center">
                    <NavigationMenuItem>
                      <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle() + " !w-full"}
                        >
                          Home
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="w-full">
                      <Link
                        href="/docs"
                        className="w-full"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle() + " !w-full"}
                        >
                          About
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle() + " !w-full"}
                        >
                          About
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link
                        href="/https://discord.gg/UBQ9UKnuMt"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle() + " !w-full"}
                        >
                          Contact
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Button variant="outline" className="w-full">
                        <Link href="/">Login</Link>
                      </Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Button className="w-full">
                        <Link href="/">Sign In</Link>
                      </Button>
                    </NavigationMenuItem>
                  </div>
                </NavigationMenuList>
              </SheetContent>
            </Sheet>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

/*
<div className="flex justify-between px-6 py-3 border-b border-gray-600 items-center">
      <div className="flex gap-4 items-center">
        <Link href="/" className="text-xl font-bol flex items-center gap-2"><FiYoutube /> YTDown</Link>
        <Link href="/">Home</Link>
        <Link href="/">Privacy</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="flex gap-2 items-center">
        <ModeToggle />
        <Button variant="outline"><Link href="/">Login</Link></Button>
        <Button><Link href="/">Sign In</Link></Button>
      </div>
    </div>
*/
