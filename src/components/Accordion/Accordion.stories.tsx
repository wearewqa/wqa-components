// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Accordion from "./Accordion";
import AccordionItem from "../AccordionItem/index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Accordion",
  component: Accordion,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Accordion>> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  children: (
    <>
      <AccordionItem id={1} title="Second palais puissance fils." content="Chaîne malheur terminer battre haute préférer yeux. Proposer absolu pendant pas elle. Anglais finir enfin vivant." active={true}></AccordionItem>
      <AccordionItem id={2} title="Second palais puissance fils." content="Chaîne malheur terminer battre haute préférer yeux. Proposer absolu pendant pas elle. Anglais finir enfin vivant." active={false}></AccordionItem>
    </>
  ),
};
