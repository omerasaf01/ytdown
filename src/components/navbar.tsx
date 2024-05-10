"use client";

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

export default function Navbar() {
  return (
    <div className="flex justify-between px-6 border-b border-gray-600 py-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <span className="flex gap-2 text-xl items-center font-bold pr-3"><FiYoutube /> YTDOWN</span>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Privacy
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/https://discord.gg/UBQ9UKnuMt" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button variant="outline">
              <Link href="/">Login</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button>
              <Link href="/">Sign In</Link>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
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
