import {
    Box,
    Button,
    Center,
    Grid,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";

const Cartpage = () => {
    return (
        <div>
            Cartpage
            <Center>
                <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                    <CartProductCard />
                    <CartProductCard />
                    <CartProductCard />
                    <CartProductCard />
                    <CartProductCard />
                    <CartProductCard />
                </Grid>
            </Center>
        </div>
    );
};
const CartProductCard = () => {
    return (
        <Box w={"fit-content"} fontSize={"11px"} h={"560px"} padding={2}>
            <Stack>
                <Image src="https://imagescdn.aeo.in/img/app/product/7/776573-9586557.jpg?auto=format&w=298" />
                <Text textAlign={"left"}>
                    AMERICAN EAGLE MEN BLUE SUPER SOFT PATTERNED
                </Text>
                <Text textAlign={"left"} fontWeight={"bold"}>
                    Rs. 999
                </Text>
                <Button
                    variant={"outline"}
                    borderRadius={0}
                    border={"2px solid black"}
                    fontSize={"12px"}
                    w={"100%"}
                    h={"30px"}
                >
                    ADD TO CART
                </Button>
            </Stack>
        </Box>
    );
};

export default Cartpage;
