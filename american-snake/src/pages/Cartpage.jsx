import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Homepage/Navbar";
import Footer from "../components/Homepage/Footer";
import { addToBag, updateWishlist } from "../redux/bagReducer/action";
import { DeleteIcon } from "@chakra-ui/icons";

const Cartpage = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const wishlistData = useSelector((store) => {
    return store.BagReducer.wishlist;
  });
  const bagData = useSelector((store) => {
    return store.BagReducer.bag;
  });
  // console.log(bagData)
  const handleWishlist = (id) => {
    console.log(id);
    let item = wishlistData.find((el) => {
      return el.id == +id;
    });
    // console.log(item);
    dispatch(addToBag(item));
    toast({
      position: "top",
      title: `Product Moved To Bag`,
      status: "success",
      isClosable: true,
    });
  };
  const handleRemove = (id) => {
    const updatedData = wishlistData.filter((el) => {
      return el.id !== +id;
    });
    dispatch(updateWishlist(updatedData));
  };

  return (
    <div>
      <Navbar />
      <Center m={"40px 5px"}>
        {wishlistData.length !== 0 ? (
          <Grid
            templateColumns={{
              sm: "repeat(2,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
            gap={6}
          >
            {wishlistData?.map((el) => (
              <CartProductCard
                key={el.id}
                {...el}
                handleWishlist={handleWishlist}
                handleRemove={handleRemove}
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
  handleRemove,
}) => {
  return (
    <Box w={"fit-content"} fontSize={"11px"} padding={2}>
      <Stack>
        <Box>
          <Image src={image_front} w={"100%"} h={"100%"} />
        </Box>
        <Text textAlign={"left"}>{title.substring(0, 50)}</Text>
        <Text textAlign={"left"} fontWeight={"bold"}>
          Rs. {price}
        </Text>
        <Text textAlign={"left"}>Brand: {brand}</Text>
        <HStack>
          <Button
            variant={"outline"}
            borderRadius={0}
            border={"2px solid orangered"}
            fontSize={"12px"}
            w={"100%"}
            h={"30px"}
            _hover={{
              bg: "orangered",
              color: "white",
            }}
            onClick={() => handleRemove(id)}
          >
            REMOVE <DeleteIcon ml={"5px"} />
          </Button>
          <Button
            variant={"outline"}
            borderRadius={0}
            border={"2px solid #1D2B4F"}
            fontSize={"12px"}
            w={"100%"}
            h={"30px"}
            _hover={{
              bg: "#1D2B4F",
              color: "white",
            }}
            onClick={() => handleWishlist(id)}
          >
            ADD TO BAG
          </Button>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Cartpage;
