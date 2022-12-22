import React from "react";

import { PrimaryButton } from "../components/buttons/Button";
import { CgFileDocument } from "react-icons/cg";

export default {
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

export const PrimaryButtonWithIcon = Template.bind({});
PrimaryButtonWithIcon.args = {
  isLeft: false,
  modifiers: "regular",
  children: "click me",
  disabled: false,
  icon: CgFileDocument,
};
