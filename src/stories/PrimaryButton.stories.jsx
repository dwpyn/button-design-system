// Button.stories.js|jsx

import React from "react";

import { PrimaryButton } from "../components/buttons/Button";
import { CgAirplane } from "react-icons/cg";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button/Primary",
  component: PrimaryButton,
  argTypes: {
    modifiers: {
      description: "Variant of button size",
      options: ["small", "regular", "large"],
      control: { type: "radio" },
    },
    children: {
      description: "content inside PrimaryButton tag",
      control: { type: "text" },
      type: "string",
    },
    isLeft: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    disabled: {
      description: "If true return disabled button",
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => (
  <PrimaryButton {...args}>{args.children}</PrimaryButton>
);

export const PrimaryButtonNoIcon = Template.bind({});
PrimaryButtonNoIcon.args = {
  modifiers: "regular",
  children: "click me",
  disabled: false,
};
