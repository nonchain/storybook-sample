import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "../../components/search-bar/SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "SearchBar",
  component: SearchBar,
};
export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Normal: Story = {
  args: {
    type: "normal",
    hasIcon: false
  },
};

export const Outline: Story = {
  args: {
    type: "outline",
    hasIcon: false
  },
};

export const Underline: Story = {
  args: {
    type: "underline",
    hasIcon: false
  },
};

export const WhitIcon: Story = {
  args: {
    type: "whitIcon",
    hasIcon: true
  },
};
