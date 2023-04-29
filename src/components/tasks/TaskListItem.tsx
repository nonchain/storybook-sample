// Libraries
import { ListItem, IconButton, Stack, Text, Checkbox } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

type propsType = {
  state: "incomplete" | "complete";
};

const taskState: { [key: string]: boolean } = {
  incomplete: false,
  complete: true,
};
function TaskListItem({ state }: propsType) {
  return (
    <ListItem sx={{
      backgroundColor: "#effafa",
      borderRadius: "0.5rem"
    }}>
      <Stack padding="1rem 1.25rem" direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap="0.5rem">
          <Checkbox
            defaultChecked={taskState[state]}
            sx={{
              appearance: "none",
              width: "1.25rem",
              height: "1.25rem",
              border: "2px solid #1f1f1f",
              borderRadius: "0.25rem"
            }}
          />
          <Stack alignItems="start">
            <Text textDecoration={"underline"} fontWeight="600" >
              Title
            </Text>
            <Text fontWeight="400" >
              category
            </Text>
          </Stack>
        </Stack>

        <Stack direction="row" gap="0.5rem">
          <IconButton
            variant="solid"
            colorScheme="red"
            aria-label="Delete Task"
            icon={<DeleteIcon />}
          />
          <IconButton
            colorScheme="teal"
            aria-label="Edit Task"
            icon={<EditIcon />}
          />
        </Stack>
      </Stack>
    </ListItem>
  );
}

export default TaskListItem;
