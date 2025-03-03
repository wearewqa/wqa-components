// YourComponent.stories.ts | YourComponent.stories.tsx

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import  Icon  from "./";
import { IconSize } from "../../enums/IconSize";
import { Theme } from "../../enums/Theme";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Icon> = (args) => (<Icon {...args} />);

export const Primary = Template.bind({});
Primary.args = {
  theme: Theme.Default,
  name: "mail-outline",
  size: IconSize.medium,
};
