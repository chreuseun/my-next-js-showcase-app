"use client";

import React, { useState } from "react";

interface IStyleOption {
  id: string;
  label: string;
  description: string;
}

const tailwindColors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-500",
];

const getRandomBGColor = () => {
  const randomIndex = Math.floor(Math.random() * tailwindColors.length);
  return tailwindColors[randomIndex];
};

const EXPLANATIONS = {
  JUSTIFY_CONTENTS: {
    title: `CSS: justify-contents`,
  },
  ALIGN_ITEMS: {
    title: `CSS: align-items`,
    ITEMS_: `items-*: Aligns all items within a flex or grid container along the cross axis.`,
    SELF_: `self-*: Aligns a single item independently of the other items within the container.`,
  },
  FLEX_DIRECTION: {
    title: `CSS: flex-direction`,
  },
};

const JUSTIFY_CONTENTS_OPTIONS: IStyleOption[] = [
  { id: "justify-start", label: "justify-start", description: "Start" },
  { id: "justify-end", label: "justify-end", description: "End" },
  { id: "justify-center", label: "justify-center", description: "Center" },
  {
    id: "justify-between",
    label: "justify-between",
    description: "Space Between",
  },
  {
    id: "justify-around",
    label: "justify-around",
    description: "Space Around",
  },
  {
    id: "justify-evenly",
    label: "justify-evenly",
    description: "Space Evenly",
  },
  {
    id: "justify-items-start",
    label: "justify-items-start",
    description: "Items Start (Grid Only)",
  },
  {
    id: "justify-items-end",
    label: "justify-items-end",
    description: "Items End (Grid Only)",
  },
  {
    id: "justify-items-center",
    label: "justify-items-center",
    description: "Items Center (Grid Only)",
  },
  {
    id: "justify-items-stretch",
    label: "justify-items-stretch",
    description: "Items Stretch (Grid Only)",
  },
  {
    id: "justify-self-start",
    label: "justify-self-start",
    description: "Self Start",
  },
  {
    id: "justify-self-end",
    label: "justify-self-end",
    description: "Self End",
  },
  {
    id: "justify-self-center",
    label: "justify-self-center",
    description: "Self Center",
  },
  {
    id: "justify-self-stretch",
    label: "justify-self-stretch",
    description: "Self Stretch",
  },
];

const ALIGN_ITEMS_OPTIONS: IStyleOption[] = [
  {
    id: "items-start",
    label: "items-start",
    description: "Align items to the start",
  },
  {
    id: "items-end",
    label: "items-end",
    description: "Align items to the end",
  },
  {
    id: "items-center",
    label: "items-center",
    description: "Align items to the center",
  },
  {
    id: "items-baseline",
    label: "items-baseline",
    description: "Align items to the baseline",
  },
  {
    id: "items-stretch",
    label: "items-stretch",
    description: "Stretch items to fill the container",
  },
  {
    id: "self-start",
    label: "self-start",
    description: "Align a single item to the start",
  },
  {
    id: "self-end",
    label: "self-end",
    description: "Align a single item to the end",
  },
  {
    id: "self-center",
    label: "self-center",
    description: "Align a single item to the center",
  },
  {
    id: "self-baseline",
    label: "self-baseline",
    description: "Align a single item to the baseline",
  },
  {
    id: "self-stretch",
    label: "self-stretch",
    description: "Stretch a single item to fill the container",
  },
];

const FLEX_DIRECTION_OPTIONS: IStyleOption[] = [
  {
    id: "flex-row",
    label: "flex-row",
    description: "Items arranged in a row (default)",
  },
  {
    id: "flex-row-reverse",
    label: "flex-row-reverse",
    description: "Items arranged in a row, reversed",
  },
  {
    id: "flex-col",
    label: "flex-col",
    description: "Items arranged in a column",
  },
  {
    id: "flex-col-reverse",
    label: "flex-col-reverse",
    description: "Items arranged in a column, reversed",
  },
];

const Nav = () => {
  const [activeJustifyConfig, setActiveJustifyConfig] = useState(
    JUSTIFY_CONTENTS_OPTIONS[0]
  );
  const [activeAlignItemsConfig, setActiveAlignItemsConfig] = useState(
    ALIGN_ITEMS_OPTIONS[0]
  );
  const [activeFlexDirection, setActiveFlexDirection] = useState(
    FLEX_DIRECTION_OPTIONS[0]
  );

  const renderRadioButton = (args: {
    id: string;
    label: string;
    description: string;
    onPress: (styleConfig: IStyleOption) => void;
    currentActiveConfig: IStyleOption;
  }) => {
    const { id, label, description, onPress, currentActiveConfig } = args;
    const isChecked = id === currentActiveConfig?.id;

    const onClick = (styleConfig: IStyleOption) => () => {
      onPress(styleConfig);
    };

    return (
      <label
        htmlFor={id}
        className={`${
          isChecked ? `border-activeOutline border-4` : `border-border2 border`
        } m-1 p-1 rounded-lg cursor-pointer  select-none`}
        onClick={onClick(args)}
      >
        <input
          type="radio"
          name={label}
          value={id}
          checked={isChecked}
          className="form-radio text-activeOutline"
        />
        <span className="ml-2 text-sm">
          {label} <div className="text-xs text-secondary">{description}</div>
        </span>
      </label>
    );
  };

  const renderSelectOption = (args: {
    title: string;
    options: IStyleOption[];
    onPress: (styleConfig: IStyleOption) => void;
    currentActiveConfig: IStyleOption;
  }) => {
    const { title, options, onPress, currentActiveConfig } = args;

    return (
      <div className="mt-3">
        <span className="text-lg">{title}</span>
        <div className="flex flex-wrap p-2">
          {options.map((option) =>
            renderRadioButton({ onPress, currentActiveConfig, ...option })
          )}
        </div>
      </div>
    );
  };

  const flexFormulatedClass = `flex ${activeFlexDirection.id} ${activeJustifyConfig.id} ${activeAlignItemsConfig.id}`;

  return (
    <div className="bg-secondaryBG m-2 border-2 rounded-lg border-border1 p-4">
      <h2 className="mb-6 text-2xl font-bold">Tailwind Exercise: Flex-Box</h2>
      {/* flex-direction*/}
      {renderSelectOption({
        title: EXPLANATIONS.FLEX_DIRECTION.title,
        options: FLEX_DIRECTION_OPTIONS,
        onPress: (styleConfig) => {
          setActiveFlexDirection(styleConfig);
        },
        currentActiveConfig: activeFlexDirection,
      })}

      {/* Justify-contents */}
      {renderSelectOption({
        title: EXPLANATIONS.JUSTIFY_CONTENTS.title,
        options: JUSTIFY_CONTENTS_OPTIONS,
        onPress: (styleConfig) => {
          setActiveJustifyConfig(styleConfig);
        },
        currentActiveConfig: activeJustifyConfig,
      })}

      {/* Align-items*/}
      {renderSelectOption({
        title: EXPLANATIONS.ALIGN_ITEMS.title,
        options: ALIGN_ITEMS_OPTIONS,
        onPress: (styleConfig) => {
          setActiveAlignItemsConfig(styleConfig);
        },
        currentActiveConfig: activeAlignItemsConfig,
      })}

      <div className="mt-4 mb-2">
        <span>
          Tailwind className:{" "}
          <span className="font-bold">{flexFormulatedClass}</span>
        </span>
      </div>
      <div
        className={`text-light  mb-4 p-4 border border-border1 ${flexFormulatedClass}`}
      >
        <div className={`${getRandomBGColor()} m-4 flex-grow border p-2`}>
          item-1
        </div>
        <div className={`${getRandomBGColor()} m-4  flex-grow border p-2`}>
          item-2
        </div>
        <div className={`${getRandomBGColor()} m-4  flex-grow border p-2`}>
          item-3
        </div>
        <div className={`${getRandomBGColor()} m-4  flex-grow border p-2`}>
          item-4
        </div>
      </div>
    </div>
  );
};

export default Nav;
