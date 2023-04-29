import type { Meta, StoryObj } from "@storybook/react";
import TaskList from "../../components/tasks/TaskList";

const meta: Meta<typeof TaskList> = {
  title: "TaskList",
  component: TaskList,
};
export default meta;

type Story = StoryObj<typeof TaskList>;

export const DesktopStyle: Story = {
  args: { type: "desktop" },
};
export const MobileStyle: Story = {
  args: { type: "mobile" },
};
