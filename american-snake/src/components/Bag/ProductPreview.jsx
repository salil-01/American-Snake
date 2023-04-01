import {
    Box,
    HStack,
    Image,
    Link,
    Select,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";

const ProductPreview = () => {
    return (
        <div >
            <Stack display={"flex"} alignItems={"center"}>
                <Box
                    w={{ lg: "100%" }}
                    padding={"30px 0"}
                    borderBottom={"1px solid gray"}
                >
                    <Stack
                        display={"flex"}
                        flexDirection={{ lg: "row", base: "column" }}
                        justifyContent={"space-evenly"}
                        alignItems={"top"}
                        spacing={5}
                    >
                        <Box
                            margin={'auto 0'}
                        >
                            <Image
                                src={
                                    "https://imagescdn.aeo.in/img/app/product/8/861392-10410893.jpg?w=116&auto=format"
                                }
                            />
                        </Box>

                        <Box padding={"5px"} w={'70%'}>
                            <Stack
                                spacing={3}
                                textAlign={{ base: "center", lg: "left" }}
                            >
                                <Text fontSize={"12px"}>
                                    AMERICAN EAGLE MEN GREY SUPER SOFT LEGEND
                                    T-SHIRT
                                </Text>
                                <Text fontSize={"12px"}>Rs. 999</Text>
                                <Text fontSize={"12px"}>Color: Gray</Text>
                                <HStack>
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
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Select>
                                </HStack>
                                <Link
                                    textDecoration={"underline"}
                                    fontSize={"12px"}
                                >
                                    Move to Favourite
                                </Link>
                            </Stack>
                        </Box>
                        
                        <Box></Box>
                    </Stack>
                </Box>
            </Stack>
        </div>
    );
};

export default ProductPreview;
