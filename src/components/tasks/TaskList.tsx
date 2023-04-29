// Libraries
import { List } from "@chakra-ui/react";
import TaskListItem from "./TaskListItem";

type propsType = {
  type: string;
};

const screenTypes: { [key: string]: object } = {
  mobile: { gridTemplateColumns: "1fr", gap: "1rem" },
  desktop: { gridTemplateColumns: "repeat(2,1fr)", gap: "1.25rem" },
};

function TaskList({ type }: propsType) {
  return (
    <List
      sx={{
        display: "grid",
        ...screenTypes[type],
      }}
    >
      <TaskListItem state="incomplete" />
      <TaskListItem state="incomplete" />
      <TaskListItem state="complete" />
      <TaskListItem state="incomplete" />
    </List>
  );
}

export default TaskList;
