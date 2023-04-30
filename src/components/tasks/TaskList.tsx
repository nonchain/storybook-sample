// Libraries
import { List } from "@chakra-ui/react";
import TaskListItem from "./TaskListItem";

type propsType = {
  type: string;
  tasks: {id: string; title: string; category: "personal" | "work" | "other", state: "complete" | "incomplete", date: string }[];
};

const screenTypes: { [key: string]: object } = {
  mobile: { gridTemplateColumns: "1fr", gap: "1rem" },
  desktop: { gridTemplateColumns: "repeat(2,1fr)", gap: "1.25rem" },
};

function TaskList({ type, tasks }: propsType) {
  return (
    <List
      sx={{
        display: "grid",
        ...screenTypes[type],
      }}
    >
      {
        tasks?.map(task => <TaskListItem key={task?.id} id={task?.id}
          title={task?.title}
          category={task?.category}
          state={task?.state}
          date={task?.date}/>)
      }
    </List>
  );
}

export default TaskList;
