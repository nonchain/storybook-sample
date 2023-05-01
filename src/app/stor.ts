import { create } from "zustand";
import { useTask } from "../features/handel-tasks/taskSlice";
import { useModal } from "../features/modal/modalSlice";

export const useStore = create((...set) => ({
  ...useTask(...set),
  ...useModal(...set)
}));
