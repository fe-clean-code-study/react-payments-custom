import { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta = {
  title: "Payments/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["basic", "underline"],
      control: "radio",
    },
  },
  args: {
    placeholder: "값을 입력해주세요.",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: "basic",
  },
};

export const Underline: Story = {
  args: {
    variant: "underline",
  },
};
