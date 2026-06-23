"use client";

import Logo from "@/shared/Logo";
import SocialsList1 from "@/shared/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";

const HEADER_LINKS: CustomLink[] = [
  { href: "/", label: "Home" },
  { href: "/listing-experiences", label: "Tours" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const Footer: React.FC = () => {

  return (
    <>
      <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
        <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
          <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
            <div className="col-span-2 md:col-span-1">
              <Logo className="w-40" imgClassName="max-h-28" />
            </div>
            <div className="col-span-2 flex items-center md:col-span-3">
              <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
            </div>
          </div>
          <div className="text-sm">
            <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">Links</h2>
            <ul className="mt-5 space-y-4">
              {HEADER_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
