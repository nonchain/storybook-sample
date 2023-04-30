// Libraries
import { Stack } from "@chakra-ui/react"
import Label from "./Label"

type propsType = {
  labels: {id: string; title: string;}[],
}

function LabelsList({ labels }: propsType) {
  return (
    <Stack direction="row" flexWrap="wrap" gap="0.35rem">
      {labels?.map((label) => <Label key={label?.id} state="unselected" title={label?.title}/>)}
    </Stack>
  )
}

export default LabelsList