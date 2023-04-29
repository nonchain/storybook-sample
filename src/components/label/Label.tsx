import { Stack, Text } from "@chakra-ui/react"

type propsType = {
  state: string;
}

const stateTypes: {[key:string]: object} = {
  selected: {backgroundColor: "#2867e1", border: "2px solid #2867e1", color: "#fff"},
  unselected: {backgroundColor: "transparent", border: "2px solid #2867e1", color: "#2867e1"},
}

function Label({ state } : propsType) {
  return (
    <Stack sx={{
      width: "max-content",
      padding: "0.35rem 1rem",
      borderRadius: "0.5rem",
      ...stateTypes[state]
    }}  alignItems="center" justifyContent="center">
      <Text fontSize="0.812rem" fontWeight="700">Label</Text>
    </Stack>
  )
}

export default Label