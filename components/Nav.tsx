import React from "react";
import Image from "next/image";
import { fontSpectral } from "@assets/fonts/fontsConfig";

import appLogo from "@root/assets/logos/app-logo.png";

interface INavButtonProp {
  label: string;
  id: string;
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
  },
  ABOUT: {
    label: "About",
    id: "about",
  },
  PROJECTS: {
    label: "Projects",
    id: "projects",
  },
  CONTACTS: {
    label: "Contacts",
    id: "contacts",
  },
  SKILLS: { label: "Skills", id: "skill" },
};

const Nav = () => {
  const renderNavButton = ({ label, id }: INavButtonProp) => {
    return (
      <div
        className={`select-none m-2 rounded-2xl flex items-center justify-center text-center p-4 cursor-pointer hover:bg-hoverNav hover:text-hoverText font-bold ${fontSpectral.className} text-2xl`}
        id={id}
        key={id}
      >
        <p>{label}</p>
      </div>
    );
  };

  return (
    <div className="border-b pb-2 border-customGold px-10 pt-4 flex flex-row">
      <Image
        src={appLogo}
        className="select-none md:mr-4"
        alt="eundev icon"
        height={90}
      />
      <div className="flex-grow flex flex-row justify-start items-stretch ">
        {renderNavButton(navConfig.HOME)}
        {renderNavButton(navConfig.PROJECTS)}
        {renderNavButton(navConfig.SKILLS)}

        {renderNavButton(navConfig.ABOUT)}
        {renderNavButton(navConfig.CONTACTS)}
      </div>

      {/* </div> */}
    </div>
  );
};

export default Nav;
