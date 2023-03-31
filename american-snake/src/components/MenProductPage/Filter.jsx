import { Box, Center, Checkbox, Divider, Stack, Text } from "@chakra-ui/react";
import {
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
export const Filter = ({ onFilterChange, categories, onFilterPrice, prices }) => {
  return (
    <Box
      p={5}
      border="1px solid black"
      bgColor={"white"}
      position="sticky"
      top={"10%"}
      zIndex={10}
    >
      <Center h={"50px"} fontSize="lg">
        Filter By
      </Center>
      <Stack
        p={0}
        direction={{
          base: "row",
          sm: "row",
          md: "row",
          lg: "column",
        }}
      >
        <Text as={"b"}>Price</Text>
        {prices.map((price) => (
          <label key={price}>
            <input onChange={onFilterPrice} type="checkbox" value={price} />
            {price}
          </label>
        ))}
      </Stack>
      <Divider p={1} />
      <Stack
        p={0}
        direction={{
          base: "row",
          sm: "row",
          md: "row",
          lg: "column",
        }}
      >
        <Text as={"b"}>Product Type</Text>
        {categories.map((category) => (
          <label key={category}>
            <input onChange={onFilterChange} type="checkbox" value={category} />
            {category}
          </label>
        ))}
      </Stack>
    </Box>
  );
};