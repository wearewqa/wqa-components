// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Checklist from "./index";
import ChecklistItem from "../ChecklistItem";
import { Themes } from "../../enums/Theme";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Checklist",
  component: Checklist,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Checklist>> = (args) => <Checklist {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: Themes.default,
  type: "primary",
  size: "medium",
  children: (
    <>
      <ChecklistItem>Item 1</ChecklistItem>
      <ChecklistItem>Item 2</ChecklistItem>
      <ChecklistItem>Item 3</ChecklistItem>
    </>
  ),
};
