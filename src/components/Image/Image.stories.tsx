// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Image from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Image",
  component: Image,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Image>> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/800x600",
  alt: "Descriptive text",
  align: "center",
};
