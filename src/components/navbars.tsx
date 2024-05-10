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
import { FiYoutube } from "react-icons/fi";
import Link from "next/link";
import { Button } from "./ui/button";

export default function mobileNavbar() {
  return (
    <div>
      
    </div>
  );
}

export function pcNavbar() {
  return (
    <div className="flex mobile:hidden justify-between px-6 border-b py-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <span className="flex gap-2 text-xl items-center font-bold pr-3">
              <FiYoutube /> YTDOWNS
            </span>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
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
