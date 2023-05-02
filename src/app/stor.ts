import { create, SetState } from "zustand";
import { useTask } from "../features/handel-tasks/taskSlice";
import { useModal } from "../features/modal/modalSlice";

export const useStore = create((set: SetState<object>) => ({
  ...useTask(set),
  ...useModal(set)
}));
