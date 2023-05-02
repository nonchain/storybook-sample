//Libraries
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Text,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useStore } from "./app/stor";
// Components
import SearchBar from "./components/search-bar/SearchBar";
import TaskList from "./components/tasks/TaskList";
import FabButton from "./components/fab-button/FabButton";
import LabelsList from "./components/label/LabelsList";
// Files
import { labelsListData } from "./components/constants/labels-data";

type task = {
  id: string;
  title: string;
  category: string;
  date: string;
};

function App() {
  const [isError, setIsError] = useState<boolean>(false);
  const {
    tasks,
    filteredCategory,
    addNewTask,
    updateTask,
    modalType,
    setModalType,
    modalIsOpen,
    openModal,
    closeModal,
    selectedTask
  } = useStore();
 

  const taskList = filteredCategory === "all" ? [...tasks] : tasks?.filter(task => task?.category === filteredCategory)

  const onOpenAddTaskModal = () => {
    setModalType("add-task");
    openModal();
  };

  const taskHandler = (actionType: string, data: task) => {
    const task = actionType === "add-task" ? ({
      id: data.id,
      title: data?.title,
      category: data.category,
      state: "incomplete",
      date: data.date,
    }) : ({
      id: selectedTask?.id,
      title: data?.title,
      category: data?.category || "no-category",
      state: "incomplete",
      date: selectedTask?.title,
    })
    console.log(
      actionType,
      {
        task
      }
    );
    actionType === "add-task" ? addNewTask({
      id: data.id,
      title: data?.title,
      category: data.category  || "no-category",
      state: "incomplete",
      date: data.date,
    }) : updateTask({
      id: selectedTask?.id,
      title: data?.title,
      category: data?.category || "no-category",
      state: "incomplete",
      date: selectedTask?.title,
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const taskName = event?.target?.taskName?.value;
    const category = event?.target?.category?.value;

    if (taskName.length < 3) return setIsError(true);
    setIsError(false);

    const currentDate = new Date().toLocaleDateString();

    taskHandler(modalType, {
      id: `${Math.floor(Math.random() * 100) + 1}`,
      title: taskName,
      category: category,
      date: currentDate,
    });

    closeModal();
  };

  return (
    <React.Fragment>
      <Modal
        isCentered
        blockScrollOnMount
        isOpen={modalIsOpen}
        onClose={closeModal}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {modalType === "add-task" ? "Add new task" : "Edit task"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={onSubmit} id="task-from">
              <Stack gap="0.5rem">
                <FormControl>
                  <FormLabel>Task title</FormLabel>
                  <Input
                    defaultValue={modalType === "add-task" ? "" : selectedTask?.title}
                    name="taskName"
                    type="text"
                    placeholder="e.g React course"
                  />
                  {isError && (
                    <Text mt="0.24rem" fontWeight="600" fontSize=".812rem" color="red.500">
                      Enter at least 3 character
                    </Text>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel>Task category</FormLabel>
                  <Select
                    defaultValue={modalType === "add-task" ? "" : selectedTask?.category}
                    name="category"
                    variant="filled"
                    placeholder="Select Category"
                  >
                    <option value="personal">Personal</option>
                    <option value="work">Work</option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>
              </Stack>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3} form="task-from">
              {modalType === "add-task" ? "Add" : "Update"}
            </Button>
            <Button type="button" onClick={closeModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box
        width="min(100%, 74rem)"
        minHeight="100vh"
        mx="auto"
        padding="4rem 3rem"
      >
        <Stack direction="column" gap="2rem">
          <Box width="68%">
            <SearchBar type="outline" hasIcon={true} />
          </Box>
          <Stack direction="row" gap="4rem">
            <Stack flex={3} direction="column">
              <Heading as="h2" fontSize="1.5rem" fontWeight="600">
                Tasks
              </Heading>
              <TaskList type="desktop" tasks={taskList} />
            </Stack>

            <Stack flex={1} direction="column">
              <Heading as="h2" fontSize="1.5rem" fontWeight="600">
                Labels
              </Heading>
              <LabelsList labels={labelsListData} />
            </Stack>
          </Stack>
        </Stack>

        <FabButton size="medium" type="primary" onClick={onOpenAddTaskModal} />
      </Box>
    </React.Fragment>
  );
}

export default App;
