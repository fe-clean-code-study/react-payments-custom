import { Meta, StoryObj } from "@storybook/react";
import Flex from ".";

const meta = {
  title: "Payments/Flex",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      options: ["row", "column"],
      control: { type: "radio" },
    },
    gap: {
      options: ["1rem", "2rem", "3rem"],
      control: { type: "radio" },
    },
  },
  args: {
    gap: "1rem",
    height: "300px",
    width: "300px",
    backgroundColor: "#e5e5e5",
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Stroy = StoryObj<typeof meta>;

function Box() {
  return (
    <div
      style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
    ></div>
  );
}

export const Row: Stroy = {
  render: ({ ...args }) => (
    <Flex {...args}>
      <Box />
      <Box />
      <Box />
    </Flex>
  ),
};

export const RowCenter: Stroy = {
  args: {
    justify: "center",
    align: "center",
  },
  render: ({ ...args }) => (
    <Flex {...args}>
      <Box />
      <Box />
      <Box />
    </Flex>
  ),
};

export const Column: Stroy = {
  args: {
    direction: "column",
  },
  render: ({ ...args }) => (
    <Flex {...args}>
      <Box />
      <Box />
      <Box />
    </Flex>
  ),
};

export const ColumnCenter: Stroy = {
  args: {
    direction: "column",
    justify: "center",
    align: "center",
  },
  render: ({ ...args }) => (
    <Flex {...args}>
      <Box />
      <Box />
      <Box />
    </Flex>
  ),
};
