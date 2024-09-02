import { Meta, StoryObj } from "@storybook/react";
import Tooltip from ".";
import "./style.css";

const meta = {
  title: "Payments/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "tooltip message",
  },
  render: ({ message }) => {
    return <Tooltip message={message}>Tooltip?!</Tooltip>;
  },
};
