import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Payments/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
  args: {
    children: "Button",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: "basic",
  },
};

export const Circle: Story = {
  args: {
    variant: "circle",
  },
};
