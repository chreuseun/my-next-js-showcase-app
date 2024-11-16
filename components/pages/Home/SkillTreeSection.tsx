import React from "react";

import quickSkillData from "@root/static/home/quick_skills.json";
import { geistMono } from "@root/assets/fonts/fontsConfig";
import SkillCategory from "./SkillCategory";

const SkillTreeSection = () => (
  <div className="mt-4 flex flex-col item m-auto">
    <h1
      className={`${geistMono.className} text-secondaryText text-xl font-bold text-center`}
    >
      Skill Tree
    </h1>
    <div className="flex flex-wrap justify-center rounded-xl p-2 gap-3 m-auto">
      <SkillCategory title="Frontend" skills={quickSkillData.frontend} />
      <SkillCategory title="Backend" skills={quickSkillData.backend} />
      <SkillCategory title="Database" skills={quickSkillData.database} />
    </div>
  </div>
);

export default SkillTreeSection;
