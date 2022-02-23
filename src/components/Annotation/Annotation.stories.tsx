// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Annotation from "./Annotation";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Annotation",
  component: Annotation,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Annotation>> = (args) => <Annotation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  direction: "bottom-left",
  children: "Look at this!",
};
