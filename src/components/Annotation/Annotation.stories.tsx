// YourComponent.stories.ts | YourComponent.stories.tsx

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react-webpack5";
import Annotation from "./Annotation";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Annotation",
  component: Annotation,
} as ComponentMeta<typeof Annotation>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Annotation> = (args) => <Annotation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  direction: "bottom-left",
  children: "Look at this!",
};
