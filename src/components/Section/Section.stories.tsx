import type { Meta, StoryObj } from "@storybook/react";

import Section from "./Section";

const meta: Meta<typeof Section> = {
  component: Section,
};
export default meta;

type Story = StoryObj<typeof Section>;

export const Base = {
  args: {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
} satisfies Story;

export const TwoColumnGrid = {
  args: {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
  decorators: [
    (Story) => (
      <div className="grid max-w-screen-lg grid-cols-2 gap-x-8 gap-y-10">
        <div className="col-span-1">
          <Story />
        </div>
        <div className="col-span-1">
          <Story />
        </div>
        <div className="col-span-1">
          <Story />
        </div>
        <div className="col-span-1">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Story;
