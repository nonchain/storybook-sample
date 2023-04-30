//Libraries
import { Box, Heading, Stack } from "@chakra-ui/react";
// Components
import SearchBar from "./components/search-bar/SearchBar";
import TaskList from "./components/tasks/TaskList";
import FabButton from "./components/fab-button/FabButton";
import LabelsList from "./components/label/LabelsList";
// Files
import { labelsListData } from "./components/constants/labels-data";
import { taskListData } from "./components/constants/tasks-data";

function App() {
  return (
    <Box width="min(100%, 74rem)" minHeight="100vh" mx="auto" padding="4rem 3rem">
      <Stack direction="column" gap="2rem">
        <Box width="68%">
          <SearchBar type="outline" hasIcon={true} />
        </Box>
        <Stack direction="row" gap="4rem">
          <Stack flex={3} direction="column">
            <Heading as="h2" fontSize="1.5rem" fontWeight="600">
              Tasks
            </Heading>
            <TaskList type="desktop" tasks={taskListData}/>
          </Stack>

          <Stack flex={1} direction="column">
            <Heading as="h2" fontSize="1.5rem" fontWeight="600">
              Labels
            </Heading>
            <LabelsList labels={labelsListData}/>
          </Stack>
        </Stack>
      </Stack>

      <FabButton size="medium" type="primary"/>
    </Box>
  );
}

export default App;
