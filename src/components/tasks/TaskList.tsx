// Libraries
import { List, Text } from "@chakra-ui/react";
import TaskListItem from "./TaskListItem";

type propsType = {
  type: string;
  tasks: {
    id: string;
    title: string;
    category: string;
    state: "complete" | "incomplete";
    date: string;
  }[];
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
      {tasks.length > 0 ? (
        tasks?.map((task) => (
          <TaskListItem
            key={task?.id}
            id={task?.id}
            title={task?.title}
            category={task?.category}
            state={task?.state}
            date={task?.date}
          />
        ))
      ) : (
        <Text>You don not have any task for now</Text>
      )}
    </List>
  );
}

export default TaskList;
