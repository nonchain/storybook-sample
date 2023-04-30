// Libraries
import { useState } from "react";
import { Stack, Text } from "@chakra-ui/react";

type propsType = {
  state: string;
  title: string;
};

const stateTypes: { [key: string]: object } = {
  selected: {
    backgroundColor: "#2867e1",
    border: "2px solid #2867e1",
    color: "#fff",
  },
  unselected: {
    backgroundColor: "transparent",
    border: "2px solid #2867e1",
    color: "#2867e1",
  },
};

function Label({ state, title }: propsType) {
  const [selectLabel, setSelectLabel] = useState<string>("unselected");

  return (
    <Stack
      onClick={() =>
        setSelectLabel(selectLabel === "unselected" ? "selected" : "unselected")
      }
      sx={{
        "&.chakra-stack": { margin: 0 },
        width: "max-content",
        padding: "0.35rem 1rem",
        borderRadius: "0.5rem",
        cursor: "pointer",
        "&:hover": {
          ...(selectLabel === "unselected"
            ? { backgroundColor: "#2867e154" }
            : { backgroundColor: "#2867e1ee" }),
        },
        ...stateTypes[selectLabel],
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="0.812rem" fontWeight="700">
        {title}
      </Text>
    </Stack>
  );
}

export default Label;
