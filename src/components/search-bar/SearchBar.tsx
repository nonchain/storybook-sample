// Libraries
import { Input, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

type propsType = {
  type: string;
  hasIcon: boolean;
};

const typeVariants: { [key: string]: object } = {
  normal: {
    borderRadius: "0.5rem",
    border: "none",
    padding: "0.5rem 1rem",
    hasIcon: false,
  },
  outline: {
    borderRadius: "0.5rem",
    border: "2px solid #2f2f2f",
    padding: "0.5rem 1rem",
    hasIcon: false,
  },
  underline: {
    borderRadius: "0",
    borderBottom: "2px solid #2f2f2f",
    padding: "0.5rem 1rem",
    hasIcon: false,
  },
  whitIcon: {
    borderRadius: "0.5rem",
    border: "2px solid #2f2f2f",
    padding: "0.5rem 1rem",
    hasIcon: true,
  },
};

function SearchBar({ type, hasIcon }: propsType) {
  return (
    <Stack direction="row" alignItems="center" position="relative">
      <Input
        sx={{
          width: "100%",
          ...typeVariants[type],
        }}
        placeholder="search"
      />
      {hasIcon && (
        <SearchIcon position="absolute" right={hasIcon ? "1rem" : "auto"} />
      )}
    </Stack>
  );
}

export default SearchBar;
