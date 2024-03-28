import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  component: Heading,
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const Basic: Story = {};

export const Primary: Story = {
  args: {
    primary: true,
  },
};
