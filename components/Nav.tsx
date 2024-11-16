"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import appLogo from "@root/assets/logos/app-logo.png";
import { fontSpectral, geistMono } from "@assets/fonts/fontsConfig";

interface INavButtonProp {
  label: string;
  id: string;
  path: string;
}

const navConfig: {
  HOME: INavButtonProp;
  ABOUT: INavButtonProp;
  PROJECTS: INavButtonProp;
  CONTACTS: INavButtonProp;
  SKILLS: INavButtonProp;
} = {
  HOME: {
    label: "Home",
    id: "home",
    path: "/",
  },
  ABOUT: {
    label: "About",
    id: "about",
    path: "/about",
  },
  PROJECTS: {
    label: "Projects",
    id: "projects",
    path: "/projects",
  },
  CONTACTS: {
    label: "Contact Me",
    id: "contacts",
    path: "/contacts",
  },
  SKILLS: {
    label: "Skills",
    id: "skill",
    path: "/skills",
  },
};

const Nav = () => {
  const pathname = usePathname();

  const renderNavButton = ({ label, id, path }: INavButtonProp) => {
    const isActive = path === pathname;

    return (
      <Link href={path}>
        <div
          className={`select-none m-2 rounded-2xl flex items-center justify-center text-center p-4 cursor-pointer  text-xl ${
            isActive
              ? "text-primaryText"
              : "text-secondaryText hover:text-hoverText"
          }`}
          id={id}
          key={id}
        >
          <p className={`${geistMono.className}`}>{label}</p>
        </div>
      </Link>
    );
  };

  return (
    <div className="px-10 flex flex-row justify-start items-center shadow-md w-full py-1">
      <Link href={"/"}>
        <Image
          src={appLogo}
          className="select-none md:mr-4 cursor-pointer"
          alt="EunDev icon"
          height={80}
        />
      </Link>
      <div
        className={`ml-6 hidden md:flex flex-grow flex-row justify-start items-stretch ${fontSpectral.className}`}
      >
        {renderNavButton(navConfig.HOME)}
        {/* {renderNavButton(navConfig.PROJECTS)}
        {renderNavButton(navConfig.SKILLS)} */}
        {renderNavButton(navConfig.ABOUT)}
        {renderNavButton(navConfig.CONTACTS)}
      </div>
    </div>
  );
};

export default Nav;
