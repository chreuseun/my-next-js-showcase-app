"use client";

import { geistMono } from "@root/assets/fonts/fontsConfig";
import { ISkill } from "@root/interfaces/skills.interface";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

interface ISkillItem extends ISkill {
  setDisplayTitle: Dispatch<SetStateAction<string>>;
}

const Skill = ({ name, image, url, id, setDisplayTitle }: ISkillItem) => (
  <div
    key={id}
    onMouseEnter={() => setDisplayTitle(name)}
    onMouseLeave={() => setDisplayTitle("")}
    className="flex flex-col items-center p-2 rounded-full border  border-border1 hover:border-border2 "
  >
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image
        src={image}
        alt={name}
        className="object-contain"
        width={30}
        height={30}
      />
    </a>
  </div>
);

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: ISkill[];
}) => {
  const [displayTitle, setDisplayTitle] = useState<string>("");

  return (
    <div className="select-none text-primaryBG bg-cardBG_1 shadow-neumorphic rounded-lg px-6 pt-2 gap-2">
      <h2
        className={`text-lg font-semibold text-center ${geistMono.className}`}
      >
        {displayTitle || title}
      </h2>

      <div className="flex flex-row justify-center p-2">
        {skills.map((skill) => (
          <Skill key={skill.id} {...skill} setDisplayTitle={setDisplayTitle} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
