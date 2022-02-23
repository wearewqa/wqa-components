// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import AccordionItem from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Accordion Item",
  component: AccordionItem,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof AccordionItem>> = (args) => <AccordionItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  title: "Look at this!",
  content: "Ea necessitatibus aut officiis molestiae quod voluptates. Pariatur molestiae occaecati veniam. Facere dolorum pariatur temporibus repellat eligendi mollitia.",
  active: true,
};
