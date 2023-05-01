type task = {
  id: string;
  title: string;
  category: "personal" | "work" | "other";
  state: "complete" | "incomplete";
  date: string;
};

const readTasksFromStorage = () => {
  const taskListData = localStorage.getItem("tasks");
  if (taskListData) return JSON.parse(taskListData);

  // If there is no item
  localStorage.setItem("tasks", JSON.stringify([]));
  return [];
};

export const useTask = (set) => ({
  tasks: readTasksFromStorage(),
  addNewTask: (taskData: task) =>
    set((state: { tasks: task[] }) => {
      localStorage.setItem(
        "tasks",
        JSON.stringify(state?.tasks.concat(taskData))
      );

      return { tasks: state?.tasks.concat(taskData) };
    }),
  removeTask: (taskId: string) =>
    set((state: { tasks: task[] }) => {
      const newTaskList = state.tasks.filter((task) => task.id !== taskId);
      localStorage.setItem("tasks", JSON.stringify(newTaskList));

      return { tasks: newTaskList };
    }),
});
