import { readTasksFromStorage } from "../../utils/storage";

type task = {
  id: string;
  title: string;
  category: "personal" | "work" | "other";
  state: "complete" | "incomplete";
  date: string;
};

export const useTask = (set) => ({
  tasks: readTasksFromStorage(),
  addNewTask: (taskData: task) =>
    set((state: { tasks: task[] }) => {
      localStorage.setItem(
        "tasks",
        JSON.stringify(state?.tasks.concat(taskData))
      )

      return ({tasks: state?.tasks.concat(taskData)})
    }),
    removeAllTasks: () =>
    set(()=> {
      localStorage.removeItem("task")

      return ({tasks: []})
    })
});
