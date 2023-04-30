import type { Meta, StoryObj } from "@storybook/react";
import Label from "../../components/label/Label";

const meta: Meta<typeof Label> = {
  title: "Label",
  component: Label
}
export default meta;

type Story = StoryObj<typeof Label>;

export const Selected: Story = {
  args: {
    state: "selected",
    title: "Title"
  }
}

export const Unselected: Story = {
  args: {
    state: "unselected",
    title: "Title"
  }
}
