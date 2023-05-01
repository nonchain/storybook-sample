//Libraries
import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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

function App() {
  const { tasks, addNewTask, modalType, setModalType, modalIsOpen, openModal, closeModal } = useStore();

  const onOpenAddTaskModal = () => {
    setModalType("add-task");
    openModal();
  }

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
          <ModalBody pb={6}></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              {modalType === "add-task" ? "Add" : "Update"}
            </Button>
            <Button onClick={closeModal}>Cancel</Button>
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
              <TaskList type="desktop" tasks={tasks} />
            </Stack>

            <Stack flex={1} direction="column">
              <Heading as="h2" fontSize="1.5rem" fontWeight="600">
                Labels
              </Heading>
              <LabelsList labels={labelsListData} />
            </Stack>
          </Stack>
        </Stack>

        <FabButton
          size="medium"
          type="primary"
          onClick={onOpenAddTaskModal}
        />
      </Box>
    </React.Fragment>
  );
}

export default App;
