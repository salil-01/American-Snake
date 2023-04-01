import { Box, Button, Flex, Select, Spacer } from "@chakra-ui/react";

export const Sortbybar = ({ sortby }) => {
  const sorthandleclick = (e) => {
    console.log(e);
  };
  return (
    <Box
      position="sticky"
      top={"20%"}
      bgGradient="linear(to-r, #fff5c8, #fcd5f5)"
      padding={"10px"}
    >
      <Box width={{ sm: "100%", md: "100%", lg: "90%" }} margin={"auto"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap={4}>
            <Button
              fontSize={{ sm: "10px", md: "15px" }}
              colorScheme={"purple"}
            >
              All
            </Button>
            <Button
              display={{ sm: "none", md: "none", lg: "inline" }}
              boxShadow={"sm"}
              fontSize={{ sm: "10px", md: "15px" }}
            >
              Try at Home
            </Button>
            <Button
              display={{ sm: "none", md: "none", lg: "inline" }}
              boxShadow={"sm"}
              fontSize={{ sm: "10px", md: "15px" }}
            >
              Designs in Store
            </Button>
            <Button boxShadow={"sm"} fontSize={{ sm: "10px", md: "15px" }}>
              Fast Delivery
            </Button>
            <Button boxShadow={"sm"} fontSize={{ sm: "10px", md: "15px" }}>
              New In
            </Button>
          </Flex>
          <Box>
            <Select
              placeholder="Sort By : New Arrivals"
              onClick={(e) => sorthandleclick(e)}
              bg={"white"}
            >
              <option fontSize={{ sm: "10px" }} value="lowtohigh">
                Price: Low to High
              </option>
              <option value="hightolow">Price: High to Low</option>
            </Select>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
