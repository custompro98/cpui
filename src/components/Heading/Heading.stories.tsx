import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  component: Heading,
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const Primary = {
  args: {
    type: "primary",
    children: "Primary Heading",
  },
} satisfies Story;

export const Secondary = {
  args: {
    type: "secondary",
    children: "Secondary Heading",
  },
} satisfies Story;

export const Section = {
  args: {
    type: "section",
    children: "Section Heading",
  },
} satisfies Story;
