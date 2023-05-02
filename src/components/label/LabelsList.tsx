// Libraries
import {
  HStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useStore } from "../../app/stor";

type propsType = {
  labels: { id: string; title: string }[];
};

function LabelsList({ labels }: propsType) {
  const { filterTheTasks } = useStore();

  return (
    <RadioGroup defaultValue="all">
      <HStack spacing="8px">
        {labels?.map((label) => 
          <Radio onChange={()=> filterTheTasks(label?.id)} key={label?.id} id={label?.id} value={label?.id}>
            {label?.title}
          </Radio>
        )}
      </HStack>
    </RadioGroup>
  );
}

export default LabelsList;
