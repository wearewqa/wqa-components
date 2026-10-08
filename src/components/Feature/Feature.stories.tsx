// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { StoryFn as Story, Meta } from "@storybook/react-webpack5";

import Feature from "./index";
import Icon from "../Icon/Icon";
import { IconSize } from "../../enums/IconSize";
import { Theme } from "../../enums/Theme";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Feature",
  component: Feature,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Feature>> = (args) => <Feature {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: Theme.Default,
  layout: "row",
  iconName: "mail-outline",
  title: "Feature title",
  text: "Feature text",
  linkText: "Learn more",
  linkHref: "/",
};
