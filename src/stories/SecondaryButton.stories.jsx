// Button.stories.js|jsx

import React from "react";

import { SecondaryButton } from "../components/buttons/Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button/Secondary",
  component: SecondaryButton,
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
    icon: {
      control: false,
    },
  },
};

const Template = (args) => (
  <SecondaryButton {...args}>{args.children}</SecondaryButton>
);

export const Secondary = Template.bind({});
Secondary.args = {
  isLeft: false,
  modifiers: "regular",
  children: "click me",
  disabled: false,
};
