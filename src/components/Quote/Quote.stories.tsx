// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Quote from "./index";
import { TextAlign } from "../../enums/TextAlign";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Quote",
  component: Quote,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Quote>> = (args) => <Quote {...args} />;

export const Default = Template.bind({});
Default.args = {
  align: TextAlign.center,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  authorName: "Joe Bloggs",
  authorPosition: "Owner, Joe Bloggs Ltd.",
  authorAvatar: "https://via.placeholder.com/150",
};
