// Libraries
import { useState } from "react";
import {
  ListItem,
  IconButton,
  Stack,
  Text,
  Checkbox,
  Heading,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useStore } from "../../app/stor";
type propsType = {
  id: string;
  title: string;
  category: string;
  state: "complete" | "incomplete";
  date: string;
};

type StoreType = {
  updateTask: (newTask: propsType) => void;
  setSelectedTask: (task: propsType) => void;
  removeTask: (taskId: string) => void;
  setModalType: (type: string) => void;
  openModal: () => void;
  closeModal: () => void;
};



const taskState: { [key: string]: boolean } = {
  incomplete: false,
  complete: true,
};
function TaskListItem({ id, title, category, state, date }: propsType) {
  const {
    removeTask,
    setModalType,
    openModal,
    setSelectedTask,
    updateTask,
  } = useStore() as StoreType;
  const [checked, setChecked] = useState<boolean>(state === "complete");

  const createdDate = new Date(date).toLocaleDateString();

  const onOpenEditTaskModal = () => {
    setModalType("edit-task");
    setSelectedTask({ id, title, category, state, date });
    openModal();
  };

  const onCompleteTaskHandler = () => {
    setChecked(()=>{
      updateTask({ id, title, category, state: !checked ? "complete" : "incomplete", date });
      return  !checked
    });
  };

  return (
    <ListItem
      sx={{
        backgroundColor: "#effafa",
        borderRadius: "0.5rem",
      }}
    >
      <Stack
        padding="1rem 1.25rem"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center" gap="0.5rem">
          <Checkbox
            defaultChecked={taskState[state]}
            checked={checked}
            onChange={onCompleteTaskHandler}
          />
          <Stack alignItems="start">
            <Heading
              as="h4"
              textDecoration={checked ? "line-through" : "none"}
              fontSize="1rem"
              fontWeight="700"
            >
              {title}
            </Heading>
            <Text
              sx={{ "&.chakra-text": { margin: 0 } }}
              color="#686667"
              fontSize="0.812rem"
              fontWeight="500"
            >
              {category}
            </Text>
          </Stack>
        </Stack>

        <Stack alignItems="end">
          <Text color="#545857" fontSize="0.65rem" fontWeight="500">
            {createdDate}
          </Text>
          <Stack direction="row">
            <IconButton
              boxSize={8}
              variant="outline"
              colorScheme="red"
              aria-label="Delete Task"
              icon={<DeleteIcon />}
              onClick={() => removeTask(id)}
            />
            <IconButton
              boxSize={8}
              colorScheme="blue"
              aria-label="Edit Task"
              icon={<EditIcon />}
              onClick={onOpenEditTaskModal}
            />
          </Stack>
        </Stack>
      </Stack>
    </ListItem>
  );
}

export default TaskListItem;
