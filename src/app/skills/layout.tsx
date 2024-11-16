import UnderConstruction from "@root/components/common/UnderConstructionCard";
import { ReactNode } from "react";

const SkillsLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="flex-grow overflow-y-auto w-full  p-4">
      <UnderConstruction />
    </main>
  );
};

export default SkillsLayout;
