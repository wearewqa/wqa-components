// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import SocialMenu from "./index";
import SocialMenuItem from "../SocialMenuItem";
import Icon from "../Icon/Icon";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/SocialMenu",
  component: SocialMenu,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof SocialMenu>> = (args) => <SocialMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "primary",
  children: (
    <>
      <SocialMenuItem href="#twitter" title="Twitter">
        <Icon name="social-twitter" />
      </SocialMenuItem>
      <SocialMenuItem href="#linkedin" title="LinkedIn">
        <Icon name="social-linkedin" />
      </SocialMenuItem>
      <SocialMenuItem href="#facebook" title="Facebook">
        <Icon name="social-facebook" />
      </SocialMenuItem>
      <SocialMenuItem href="#github" title="GitHub">
        <Icon name="social-github" />
      </SocialMenuItem>
      <SocialMenuItem href="#angellist" title="AngelList">
        <Icon name="social-angellist" />
      </SocialMenuItem>
      <SocialMenuItem href="#dribbble" title="Dribbble">
        <Icon name="social-dribbble" />
      </SocialMenuItem>
    </>
  ),
};
