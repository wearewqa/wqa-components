// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Feature from "./index";
import Icon from "../Icon/Icon";
import { IconSize } from "../../enums/IconSize";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Feature",
  component: Feature,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Feature>> = (args) => <Feature {...args} />;

export const Default = Template.bind({});
Default.args = {
  layout: "row",
  children: (
    <>
      <Icon name="mail-outline" size={IconSize.large} className="feature__mast" />
      {/* <Heading className="feature__title" level={HeadingLevel.h3} size={FontSize.headingSmall} weight={FontWeight.semiBold}>
        Share team inboxes
      </Heading> */}
      <p className="feature__text">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
    </>
  ),
};
