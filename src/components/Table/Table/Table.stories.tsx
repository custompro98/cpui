import type { Meta, StoryObj } from "@storybook/react";

import Table from "./Table";

const meta: Meta<typeof Table> = {
  component: Table,
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Primary = {
  args: {
    data: {
      columns: [
        { key: "id", title: "ID" },
        { key: "name", title: "Name" },
        { key: "email", title: "Email" },
        { key: "phone", title: "Phone" },
      ],
      rows: [
        {
          key: 1,
          value: {
            id: 1,
            name: "John Smith",
            email: "johnsmith@example.com",
            phone: "555-555-5555",
          },
        },
        {
          key: 2,
          value: {
            id: 2,
            name: "John Smith",
            email: "johnsmith@example.com",
            phone: "555-555-5555",
          },
        },
        {
          key: 3,
          value: {
            id: 3,
            name: "John Smith",
            email: "johnsmith@example.com",
            phone: "555-555-5555",
          },
        },
        {
          key: 4,
          value: {
            id: 4,
            name: "John Smith",
            email: "johnsmith@example.com",
            phone: "555-555-5555",
          },
        },
      ],
    },
  },
} satisfies Story;
