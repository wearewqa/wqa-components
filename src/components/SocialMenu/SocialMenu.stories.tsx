// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import SocialMenu from "./index";
import SocialMenuItem from "../SocialMenuItem";
import { IconSize } from "../../enums/IconSize";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Buttons & Links/Social Menu",
  component: SocialMenu,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof SocialMenu>> = (args) => <SocialMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  children: (
    <>
      <SocialMenuItem href="#twitter" title="Twitter" name="social-twitter" size={IconSize.xsmall} />
      <SocialMenuItem href="#linkedin" title="LinkedIn" name="social-linkedin" size={IconSize.xsmall} />
      <SocialMenuItem href="#facebook" title="Facebook" name="social-facebook" size={IconSize.xsmall} />
      <SocialMenuItem href="#github" title="GitHub" name="social-github" size={IconSize.xsmall} />
      <SocialMenuItem href="#angellist" title="AngelList" name="social-angellist" size={IconSize.xsmall} />
      <SocialMenuItem href="#dribbble" title="Dribbble" name="social-dribbble" size={IconSize.xsmall} />
    </>
  ),
};
