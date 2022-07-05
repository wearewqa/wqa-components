// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Feature from "./index";
import Icon from "../Icon/Icon";
import { IconSize } from "../../enums/IconSize";
import { Themes } from "../../enums/Theme";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Feature",
  component: Feature,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Feature>> = (args) => <Feature {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: Themes.default,
  layout: "row",
  iconName: "mail-outline",
  title: "Feature title",
  text: "Feature text",
  linkText: "Learn more",
  linkHref: "/",
};
