type task = {
  id: string;
  title: string;
  category: "personal" | "work" | "other" | "no-category";
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
  filteredCategory: "all",
  selectedTask: {},
  setSelectedTask: (task: task) => set(()=> ({selectedTask: task})),
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
  updateTask: (newTask: task) =>
    set(() => {
      const taskListData = localStorage.getItem("tasks");

      if (taskListData) {
        const taskListArray = JSON.parse(taskListData);
        taskListArray.forEach((task: task) => {
          if (task.id === newTask.id) {
            task.title = newTask.title;
            task.category = newTask.category;
          }
        });
        localStorage.setItem("tasks", JSON.stringify(taskListArray));
        return { tasks: taskListArray };
      }
    }),
  filterTheTasks: (taskCategory: "all" | "personal" | "work" | "other") =>
    set(() => ({ filteredCategory: taskCategory })),
  searchTasks: (query: string) =>
    set((state: { tasks: task[] }) => {
      console.log(query);
      const allTasks = state.tasks;
      const searchResult = allTasks.filter((task) =>
        task.title.startsWith(query)
      );

      return { asks: searchResult };
    }),
});
