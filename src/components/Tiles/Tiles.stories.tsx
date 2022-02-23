// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Tiles from "./index";
import Checklist from "../Checklist";
import ChecklistItem from "../ChecklistItem";
import ButtonGroup from "../ButtonGroup";
import Button from "../Button";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Tiles",
  component: Tiles,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Tiles>> = (args) => <Tiles {...args} />;

export const Default = Template.bind({});
Default.args = {
  reverse: "none",
  flush: true,
  mobileImageFlush: true,
  image: "https://via.placeholder.com/800x600",
  mobileImage: "https://via.placeholder.com/650x520",
  // image: "/images/tiles-img-3.png",
  // mobileImage: "/images/tiles-img-1--mobile.png",
  children: (
    <>
      {/* <Heading level={HeadingLevel.h2} size={FontSize.headingLarge} weight={FontWeight.semiBold}>
        Join 4,000+ startups growing with Untitled
      </Heading> */}

      <Checklist color="primary" size="medium">
        <ChecklistItem>Checklist item 1</ChecklistItem>
        <ChecklistItem>Checklist item 2</ChecklistItem>
        <ChecklistItem>Checklist item 3</ChecklistItem>
      </Checklist>

      <ButtonGroup>
        <Button color="secondary-gray" size="xlarge" groupItem>
          Learn more
        </Button>
        <Button color="primary" size="xlarge" groupItem>
          Get started
        </Button>
      </ButtonGroup>
    </>
  ),
};
