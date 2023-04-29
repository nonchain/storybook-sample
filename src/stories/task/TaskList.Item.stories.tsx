import type { Meta, StoryObj } from "@storybook/react";
import TaskListItem from "../../components/tasks/TaskListItem";

const meta: Meta<typeof TaskListItem> = {
  title: "TaskListItem",
  component: TaskListItem
}
export default meta;

type Story = StoryObj<typeof TaskListItem>;

export const Incomplete: Story = {
  args: {
    state: "incomplete",
  }
}

export const Complete: Story = {
  args: {
    state: "complete",
  }
}