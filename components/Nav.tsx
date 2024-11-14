import React from "react";
import Image from "next/image";
import { fontSpectral } from "@assets/fonts/fontsConfig";

import appLogo from "@root/assets/logos/app-logo.png";
import Link from "next/link";

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
  const renderNavButton = ({ label, id, path }: INavButtonProp) => {
    return (
      <Link href={path}>
        <div
          className={`select-none m-2 rounded-2xl flex items-center justify-center text-center p-4 cursor-pointer hover:bg-hoverNav hover:text-hoverText font-bold ${fontSpectral.className} text-2xl`}
          id={id}
          key={id}
        >
          <p>{label}</p>
        </div>
      </Link>
    );
  };

  return (
    <div className="border-b-8 pb-2 border-customGold px-10 pt-4 flex flex-row shadow-md w-full">
      <Link href={"/"}>
        <Image
          src={appLogo}
          className="select-none md:mr-4 cursor-pointer"
          alt="eundev icon"
          height={90}
        />
      </Link>
      <div className="2xl:border hidden md:flex flex-grow flex-row justify-start items-stretch ">
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
