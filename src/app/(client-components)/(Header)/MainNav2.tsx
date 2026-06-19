import React, { FC } from "react";
import Logo from "@/shared/Logo";
import MenuBar from "@/shared/MenuBar";
import LangDropdown from "./LangDropdown";
import AvatarDropdown from "./AvatarDropdown";
import HeroSearchForm2MobileFactory from "../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory";
import Link from "next/link";
import { Route } from "@/routers/types";

export interface MainNav2Props {
  className?: string;
}

const MainNav2: FC<MainNav2Props> = ({ className = "" }) => {
  return (
    <div className={`MainNav2 relative z-10 ${className}`}>
      <div className="px-4 h-20 lg:container flex justify-between items-center">
        <div className="hidden md:flex items-center space-x-6 flex-1">
          <Logo className="w-28 self-center" />
          <nav className="hidden lg:flex space-x-6 text-neutral-700 dark:text-neutral-100">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/listing-experiences" className="hover:text-black">Tours</Link>
            <Link href="/destinations" className="hover:text-black">Destinations</Link>
            <Link href="/testimonials" className="hover:text-black">Testimonials</Link>
            <Link href="/contact" className="hover:text-black">Contact</Link>
          </nav>
        </div>

        <div className="self-center lg:hidden flex-[3] max-w-lg !mx-auto md:px-3">
          <HeroSearchForm2MobileFactory />
        </div>

        <div className="hidden md:flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100 items-center">
          <div className="hidden lg:flex items-center space-x-3">
            <LangDropdown />
            <AvatarDropdown />
          </div>
          <div className="flex lg:hidden items-center">
            <AvatarDropdown />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2;
