import { Button } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";

type propsType = {
  size: string;
  type: string;
  onClick: React.MouseEventHandler
};

const sizeVariants: {[key: string]: object} = { 
  small: {width: "3.5rem", height: "3.5rem"},
  medium: {width: "4.5rem", height: "4.5rem"},
  large: {width: "6.5rem", height: "6.5rem"}
}
const iconSizeVariants: {[key: string]: string} = { 
  small: "1.5rem",
  medium: "1.75rem",
  large: "2.25rem",
}
const typeVariants: {[key: string]: object} = { 
  primary: {backgroundColor: "#2867e1", color: "#FFF"},
  secondary: {backgroundColor: "#df4848", color: "#FFF"},
  accent: {backgroundColor: "#f3d422", color: "#181818"},
}

function FabButton({ size, type, onClick }: propsType) {
  return (
    <Button
      onClick={onClick}
      sx={{
        ...sizeVariants[size],
        ...typeVariants[type],
        borderRadius: "999px",
        position: "absolute",
        bottom: "2.75rem",
        left: "2.25rem"
      }}
    >
      <SmallAddIcon fontSize={iconSizeVariants[size]}/>
    </Button>
  );
}

export default FabButton;
