import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Botton/button";

export default {
  title: "Kylin Design/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    btnType: { type: "radio", options: ["primary", "default", "danger"] },
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
