// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import MoreCta from "./index";
import Button from "../Button";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/More CTA",
  component: MoreCta,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof MoreCta>> = (args) => <MoreCta {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Still have questions?",
  avatarSrc: "https://via.placeholder.com/250x150",
  //   avatarSrc: "/images/avatar-group.png",
  text: "Can’t find the answer you’re looking for? Please chat to our friendly team.",
  children: (
    <Button color="primary" size="medium">
      Get in touch
    </Button>
  ),
};
