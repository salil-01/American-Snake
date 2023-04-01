import { Box, Button, Flex, Select, Spacer } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Sortbybar = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const initialOrder = searchParam.get("order");
  const [order, setOrder] = useState(initialOrder || "");
  const handleSort = (e) => {
    let val = e.target.value;
    console.log(val);
    setOrder(val);
  };
  useEffect(() => {
    let params = {};
    order && (params.order = order);
    setSearchParam(params);
  }, [order]);
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
              onChange={(e) => handleSort(e)}
              bg={"white"}
            >
              <option fontSize={{ sm: "10px" }} value="asc">
                Price: Low to High
              </option>
              <option value="desc">Price: High to Low</option>
            </Select>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
