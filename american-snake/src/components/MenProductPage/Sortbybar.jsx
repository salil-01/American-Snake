import { Box, Button, Flex, Select, Spacer } from "@chakra-ui/react";

export const Sortbybar = ({ sortby }) => {
  const sorthandleclick = (e) => {
    console.log(e);
  };
  return (
    <Box position="sticky" top={"20%"}>
      <Flex>
        <Box w={"60%"} bgGradient="linear(to-r, #fff5c8, #fcd5f5)" p={5}>
          <Flex>
            {sortby.map((e) => (
              <Button colorScheme={"none"} color>
                {e}
              </Button>
            ))}
          </Flex>
          <Flex gap={4}>
            <Button
              fontSize={{ sm: "10px", md: "15px" }}
              w={{ base: "20px", sm: "20px", md: "60px" }}
              colorScheme={"purple"}
            >
              All
            </Button>
            <Button
              boxShadow={"sm"}
              w={{ base: "100px", sm: "100px", md: "100px" }}
              size={{ sm: "4xl", md: "4xl" }}
              fontSize={{ sm: "10px", md: "15px" }}
            >
              Try at Home
            </Button>
            <Button boxShadow={"sm"} fontSize={{ sm: "10px", md: "15px" }}>
              Designs in Store
            </Button>
            <Button boxShadow={"sm"} fontSize={{ sm: "10px", md: "15px" }}>
              Fast Delivery
            </Button>
            <Button boxShadow={"sm"} fontSize={{ sm: "10px", md: "15px" }}>
              New In
            </Button>
          </Flex>
        </Box>
        <Flex w={"40%"} bgGradient="linear(to-r, #fcd5f5, #bfb3fe)">
          <Spacer />
          <Select
            w={"40%"}
            mt="30px"
            bg
            placeholder="Sort By:"
            onClick={(e) => sorthandleclick(e)}
          >
            <option fontSize={{ sm: "10px" }} value="option1">
              Price: Low to High
            </option>
            <option value="option2">Price: High to Low</option>
          </Select>
        </Flex>
      </Flex>
    </Box>
  );
};