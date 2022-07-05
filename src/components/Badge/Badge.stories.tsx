import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Badge from "./index";
import { Themes } from "../../enums/Theme";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Badges/Badge",
  component: Badge,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Badge>> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: Themes.default,
  size: "medium",
  children: "Badge",
};
