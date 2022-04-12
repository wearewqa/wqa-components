// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Layout from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Layout",
  component: Layout,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Layout>> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: "default",
};
