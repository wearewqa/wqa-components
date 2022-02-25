// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import ButtonGroup from "./index";
import Button from "../Button";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Buttons & Links/Button Group",
  component: ButtonGroup,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof ButtonGroup>> = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  direction: "row",
  align: "start",
  children: (
    <>
      <Button color="secondary-gray" size="xlarge" groupItem>
        Button 1
      </Button>
      <Button color="primary" size="xlarge" groupItem>
        Button 2
      </Button>
    </>
  ),
};
