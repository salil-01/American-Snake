import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Image,
  Select,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateBag } from "../../redux/bagReducer/action";

const ProductPreview = ({ setTotal }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const bagData = useSelector((store) => {
    return store.BagReducer.bag;
  });

  //   console.log(bagData);
  const handleChange = (e, id) => {
    let val = +e.target.value;
    const updatedData = bagData.map((item) =>
      item.id === id ? { ...item, quantity: +val } : item
    );
    dispatch(updateBag(updatedData));
  };

  //delete functionality
  const removeitem = (id) => {
    const updatedData = bagData.filter((el) => {
      return el.id !== id;
    });
    dispatch(updateBag(updatedData));
    // window.location.reload();
  };
  useEffect(() => {
    let tempprice =
      bagData.length > 0 &&
      bagData.reduce((acc, item) => {
        return (acc += item.quantity * Number(item.price));
      }, 0);
    setPrice(tempprice);
    setTotal(tempprice);
  }, [handleChange]);
  return (
    <div style={{ marginTop: "15px", width: "100%" }}>
      {bagData.length > 0 ? (
        bagData?.map((element) => (
          <Stack
            key={element.id}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
          >
            <Box padding={"30px 0"} borderBottom={"1px solid gray"}>
              <Stack
                display={"flex"}
                flexDirection={{ lg: "row", base: "column" }}
                justifyContent={"space-evenly"}
                alignItems={{ sm: "center", md: "center", lg: "top" }}
                // alignItems={"top"}
                spacing={5}
                gap={"10px"}
              >
                <Box margin={"auto 0"}>
                  <Image src={element.image_front} />
                </Box>

                <Box padding={"5px"} w={"70%"}>
                  <Stack spacing={3} textAlign={{ base: "center", lg: "left" }}>
                    <Text fontSize={"14px"}>{element.title}</Text>
                    <Text fontSize={"14px"}> ₹ {element.price}</Text>
                    <Text fontSize={"14px"}>Color: Gray</Text>
                    <HStack
                      justifyContent={{
                        sm: "space-between",
                        md: "space-between",
                        lg: "start",
                      }}
                    >
                      <Select
                        fontSize={"11px"}
                        w={"80px"}
                        borderRadius={0}
                        border={"1px solid gray"}
                      >
                        <option value="m">M</option>
                        <option value="s">S</option>
                        <option value="l">L</option>
                      </Select>
                      <Select
                        fontSize={"11px"}
                        w={"80px"}
                        borderRadius={0}
                        border={"1px solid gray"}
                        onChange={(e) => handleChange(e, element.id)}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </Select>
                    </HStack>
                    <Text>
                      <Button
                        variant={"link"}
                        colorScheme={"black"}
                        fontSize={"14px"}
                        onClick={() => {
                          removeitem(element.id);
                        }}
                      >
                        <DeleteIcon />
                        <Box width={"6px"}>
                        
                      </Box>
                        Remove Item
                      
                        
                      </Button>
                    </Text>
                  </Stack>
                </Box>

                <Box></Box>
              </Stack>
            </Box>
            <br />
          </Stack>
        ))
      ) : (
        <Box margin={"20px 0"}>
          <Text mb={"10px"}>Oh ho, Your Bag is Empty...</Text>
          <Button
            w={{ lg: "335px" }}
            bgColor={"black"}
            color={"white"}
            fontSize={"12px"}
            borderRadius={0}
            _hover={{ bgColor: "none" }}
          >
            <Link to={"/products-men"}>ADD ITEMS</Link>
          </Button>
        </Box>
      )}
    </div>
  );
};

export default ProductPreview;
