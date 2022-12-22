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
    isLeft: {
      description: "If true, icon on the leftmost",
      default: false,
    },
    modifiers: {
      description: "Variant of button size",
      options: ["small", "regular", "large"],
      control: { type: "radio" },
    },
    theme: {
      control: false,
    },
  },
};

const Template = (args) => (
  <PrimaryButton {...args}>{args.children}</PrimaryButton>
);

export const PrimaryButtonWithIcon = Template.bind({});
PrimaryButtonWithIcon.args = {
  isLeft: false,
  modifiers: "regular",
  children: "click me",
  disabled: false,
  icon: CgAirplane,
};
