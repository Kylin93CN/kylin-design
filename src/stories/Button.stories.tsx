import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Botton/button";

export default {
  title: "Kylin Design/Button",
  component: Button,
  argTypes: {
    children: {
      name: "children",
      type: { name: "string", required: false },
      control: "text",
      description: "button text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "-" },
      },
    },
    btnType: {
      name: "btnType",
      description: "button type",
      type: "radio",
      options: ["primary", "default", "danger", "link", "ghost"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      name: "size",
      description: "button size",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "-" },
      },
      type: "radio",
      options: ["lg", "sm", ""],
    },
    href: {
      name: "href",
      description: "link button location url",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "-" },
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  btnType: "default",
  children: "Default Button",
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  btnType: "primary",
  children: "Primary Button",
};

// export const Large = Template.bind({});
// Large.args = {
//   size: "lg"
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "sm"
// };
