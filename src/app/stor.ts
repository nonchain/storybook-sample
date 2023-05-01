import { create } from "zustand";
import { useTask } from "../features/handel-tasks/taskSlice";

export const useStore = create((...set) => ({
  ...useTask(...set),
}));
