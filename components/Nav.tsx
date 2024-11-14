"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import appLogo from "@root/assets/logos/app-logo.png";
import { fontSpectral } from "@assets/fonts/fontsConfig";

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
    label: "Contacts",
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
          className={`
             ${
               fontSpectral.className
             } select-none m-2 rounded-2xl flex items-center justify-center text-center p-4 cursor-pointer  text-xl ${
            isActive
              ? "text-primaryText font-extrabold"
              : "text-secondaryText hover:text-hoverText font-medium"
          }`}
          id={id}
          key={id}
        >
          <p>{label}</p>
        </div>
      </Link>
    );
  };

  return (
    <div className="border-b-2  border-border1 px-10 flex flex-row justify-start items-center shadow-md w-full py-1">
      <Link href={"/"}>
        <Image
          src={appLogo}
          className="select-none md:mr-4 cursor-pointer"
          alt="eundev icon"
          height={80}
        />
      </Link>
      <div className="ml-6 hidden md:flex flex-grow flex-row justify-start items-stretch ">
        {renderNavButton(navConfig.HOME)}
        {renderNavButton(navConfig.PROJECTS)}
        {renderNavButton(navConfig.SKILLS)}

        {renderNavButton(navConfig.ABOUT)}
        {renderNavButton(navConfig.CONTACTS)}
      </div>
    </div>
  );
};

export default Nav;
