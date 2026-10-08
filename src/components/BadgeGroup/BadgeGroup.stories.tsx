// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { StoryFn as Story, Meta } from "@storybook/react-webpack5";

import BadgeGroup from "./index";
import Badge from "../Badge";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Badges/Badge Group",
  component: BadgeGroup,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof BadgeGroup>> = (args) => <BadgeGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  children: (
    <>
      <Badge groupItem highlighted>
        New feature
      </Badge>
      <Badge groupItem>We've just released a new feature</Badge>
    </>
  ),
};
