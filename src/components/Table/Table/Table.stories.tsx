import type { Meta, StoryObj } from "@storybook/react";

import Table from "./Table";

const meta: Meta<typeof Table> = {
  component: Table,
};
export default meta;

type Story = StoryObj<typeof Table>;

export const SingleColumn = {
  args: {
    data: {
      columns: [{ key: "email", title: "Email" }],
      rows: [
        {
          key: 1,
          value: {
            email: "johnsmith@example.com",
          },
        },
        {
          key: 2,
          value: {
            email: "johnsmith@example.com",
          },
        },
        {
          key: 3,
          value: {
            email: "johnsmith@example.com",
          },
        },
        {
          key: 4,
          value: {
            email: "johnsmith@example.com",
          },
        },
      ],
    },
  },
} satisfies Story;

export const TwoColumn = {
  args: {
    data: {
      columns: [
        { key: "name", title: "Name" },
        { key: "email", title: "Email" },
      ],
      rows: [
        {
          key: 1,
          value: {
            name: "John Smith",
            email: "johnsmith@example.com",
          },
        },
        {
          key: 2,
          value: {
            name: "John Smith",
            email: "johnsmith@example.com",
          },
        },
        {
          key: 3,
          value: {
            name: "John Smith",
            email: "johnsmith@example.com",
          },
        },
        {
          key: 4,
          value: {
            name: "John Smith",
            email: "johnsmith@example.com",
          },
        },
      ],
    },
  },
} satisfies Story;

export const FourColumn = {
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

export const CenterAlignedColumn = {
  args: {
    data: {
      columns: [
        { key: "id", title: "ID", align: "center" },
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

export const RightAlignedColumn = {
  args: {
    data: {
      columns: [
        { key: "id", title: "ID", align: "right" },
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
