import { create } from "zustand";
import { useTask } from "../features/handel-tasks/useTask";

export const useStore = create((...set) => ({
  ...useTask(...set),
}));
