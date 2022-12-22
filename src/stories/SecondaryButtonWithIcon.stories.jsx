import React from "react";

import { SecondaryButton } from "../components/buttons/Button";
import { colors } from "../components/utils/colors";
import { CgFileDocument } from "react-icons/cg";

export default {
  title: "Button/Secondary",
  component: SecondaryButton,
  argTypes: {
    color: {
      control: { type: "color" },
      type: "string",
    },
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
  <SecondaryButton {...args}>{args.children}</SecondaryButton>
);

export const SecondaryButtonWithIcon = Template.bind({});
SecondaryButtonWithIcon.args = {
  isLeft: false,
  modifiers: "regular",
  children: "click me",
  disabled: false,
  color: `${colors.black}`,
  icon: CgFileDocument,
};
