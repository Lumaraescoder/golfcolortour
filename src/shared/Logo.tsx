import React from "react";
import logoImg from "@/images/logo.jpeg";
import logoLightImg from "@/images/logo-light.png";
import Link from "next/link";
import { StaticImageData } from "next/image";

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "w-32",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      {/* Use image logo */}
      {img ? (
        <img
          className={`block max-h-16 ${imgLight ? "dark:hidden" : ""}`}
          src={img.src || img}
          alt="Logo"
        />
      ) : (
        "Logo"
      )}
      {imgLight && (
        <img
          className="hidden max-h-16 dark:block"
          src={imgLight.src || imgLight}
          alt="Logo-Light"
        />
      )}
    </Link>
  );
};

export default Logo;
