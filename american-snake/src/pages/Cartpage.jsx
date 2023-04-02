import {
    Box,
    Button,
    Center,
    Grid,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Homepage/Navbar";
import Footer from "../components/Homepage/Footer";
import { addToBag, addToWishlist } from "../redux/bagReducer/action";

const Cartpage = () => {
    const dispatch = useDispatch();
    const Items = useSelector((store) => {
        return store.BagReducer.wishlist;
    });

    const handleWishlist = (n) => {
        // eslint-disable-next-line array-callback-return
        let product = Items.filter((el) => {
            if (el.id === n) return el;
        });
        dispatch(addToBag(product));

        // removeItem
        // const updateData = Items.filter((el) => {
        //     if (el.id !== n) return el;
        // });
        // dispatch(addToWishlist(updateData));
    };

    return (
        <div>
            <Navbar />
            <Center m={"40px 5px"}>
                {Items.length !== 0 ? (
                    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                        {Items?.map((el) => (
                            <CartProductCard
                                key={el.id}
                                {...el}
                                handleWishlist={handleWishlist}
                            />
                        ))}
                    </Grid>
                ) : (
                    <Heading>Your Wishlist is Empty</Heading>
                )}
            </Center>
            <Footer />
        </div>
    );
};
const CartProductCard = ({
    id,
    image_front,
    title,
    price,
    brand,
    handleWishlist,
}) => {
    return (
        <Box w={"fit-content"} fontSize={"11px"} h={"560px"} padding={2}>
            <Stack>
                <Box h={"411px"}>
                    <Image src={image_front} w={"100%"} h={"100%"} />
                </Box>
                <Text textAlign={"left"}>{title.substring(0, 50)}</Text>
                <Text textAlign={"left"} fontWeight={"bold"}>
                    Rs. {price}
                </Text>
                <Text textAlign={"left"}>Brand: {brand}</Text>
                <Button
                    variant={"outline"}
                    borderRadius={0}
                    border={"2px solid black"}
                    fontSize={"12px"}
                    w={"100%"}
                    h={"30px"}
                    onClick={() => handleWishlist(id)}
                >
                    ADD TO CART
                </Button>
            </Stack>
        </Box>
    );
};

export default Cartpage;
