import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "..";
import { useState } from "react";
import "./style.css";

const meta = {
  title: "Payments/Modal",
  component: Modal.Root,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Modal.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div id="story-base">
        <Modal.Root>
          <Modal.Opener>
            <button>Open</button>
          </Modal.Opener>
          <Modal.Backdrop />
          <Modal.Positioner>
            <Modal.Content>
              <div>modal content</div>
              <Modal.Closer>
                <button>Close</button>
              </Modal.Closer>
            </Modal.Content>
          </Modal.Positioner>
        </Modal.Root>
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div id="story-base">
        <button onClick={() => setIsOpen(true)}>Open</button>
        <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
          <Modal.Backdrop />
          <Modal.Positioner>
            <Modal.Content>
              <div>modal content</div>
              <Modal.Closer>
                <button>Close</button>
              </Modal.Closer>
            </Modal.Content>
          </Modal.Positioner>
        </Modal.Root>
      </div>
    );
  },
};
