import type { Meta, StoryObj } from "@storybook/react";
import FabButton from "../../components/fab-button/FabButton";

const meta: Meta<typeof FabButton> = {
  title: "FabButton",
  component: FabButton
}
export default meta;

type Story = StoryObj<typeof FabButton>;

export const Small: Story = {
  args: {
    type: "primary",
    size: "small"
  }
}

export const Medium: Story = {
  args: {
    type: "primary",
    size: "medium"
  }
}

export const Large: Story = {
  args: {
    type: "primary",
    size: "large"
  }
}

export const Primary: Story = {
  args: {
    type: "primary",
    size: "medium"
  }
}

export const Secondary: Story = {
  args: {
    type: "secondary",
    size: "medium"
  }
}

export const Accent: Story = {
  args: {
    type: "accent",
    size: "medium"
  }
}
