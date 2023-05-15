import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  HStack,
  Heading,
  Image,
  Input,
  ListItem,
  Select,
  Stack,
  Text,
  UnorderedList,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faRulerHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { IoHeartOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { ProductCarousel } from "../components/Homepage/ProductCarousel";
import Navbar from "../components/Homepage/Navbar";
import Footer from "../components/Homepage/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToBag, addToWishlist } from "../redux/bagReducer/action";

export const SingleProductMen = () => {
  const { id } = useParams();
  const [productItem, setProductItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bag, setBag] = useState(false);
  const [wish, setWish] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const bagData = useSelector((store) => {
    return store.BagReducer.bag;
  });
  console.log(bagData);
  const [qtyCount, setQtyCount] = useState(1);
  const handleBag = () => {
    // console.log("bag")
    let obj = {
      ...productItem,
      quantity: qtyCount,
    };
    dispatch(addToBag(obj));
    toast({
      position: "top",
      title: "Product Added in Your Bag",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setBag((prev) => !prev);
  };
  const handleWishlist = () => {
    let obj = {
      ...productItem,
      quantity: qtyCount,
    };
    dispatch(addToWishlist(obj));
    toast({
      position: "top",
      title: "Product Added in Wishlist",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setWish((prev) => !prev);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://american-eagle-mock-server.onrender.com/men/${id}`)
      .then((res) => {
        // console.log(res.data);
        setProductItem(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    brand,
    category,
    hreftag,
    image_front,
    image_reverse,
    price,
    title,
    type,
  } = productItem;

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* BreachCrums */}
      <Box
        h={"40px"}
        display={"flex"}
        alignItems={"center"}
        bgColor={"#FAFAFA"}
      >
        <Box w={"fit-content"} margin={"auto"}>
          <Breadcrumb
            fontWeight="medium"
            letterSpacing={"0.5px"}
            fontSize="11px"
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">{category}</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Top</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">{type}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" color={"gray"}>
                {title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Box>
      {/* Product section */}
      {loading ? (
        <Spinner size={"xl"} />
      ) : (
        <Box
          w={"97%"}
          margin={"auto"}
          // border={"1px solid black"}
          display={"flex"}
          flexDirection={{ lg: "row", base: "column", md: "column" }}
          justifyContent={"center"}
          padding={"20px"}
        >
          {/* Image section */}
          <Box
            w={{ lg: "540px", base: "none" }}
            // border={"1px dashed black"}
            padding={"15px"}
            // h={"668px"}
          >
            <Stack direction={"row"} spacing={9}>
              {/* preview Image section */}
              <Box w={"60px"} marginLeft={"20px"}>
                <Stack spacing={3}>
                  <Box
                    w={"54px"}
                    // h={"69px"}
                    border={"1px solid gray"}
                    padding={"2px"}
                  >
                    <Image src={image_front} />
                  </Box>
                  <Box w={"54px"} h={"69px"}>
                    <Image src={image_reverse} />
                  </Box>
                </Stack>
              </Box>
              {/* Main Image Section */}
              <Box>
                <Image w={{ lg: "100%", base: "70%" }} src={image_front} />
              </Box>
            </Stack>
          </Box>

          {/* Product Specification */}
          <Box
            w={{ lg: "426px" }}
            padding={"35px 50px 0 50px"}
            // border={"1px dashed red"}
          >
            <Stack>
              <Heading
                as={"h1"}
                fontSize={"lg"}
                fontWeight={"medium"}
                letterSpacing={"1px"}
              >
                {title}
              </Heading>
              <Box fontSize={"12px"} letterSpacing={"0.5px"}>
                <Text fontWeight={"bold"}>Rs. {price}</Text>
                <Text>(Inclusive of all taxes)</Text>
              </Box>
              <Box>
                <Box padding={"8px"}>
                  <Box
                    w={"38px"}
                    h={"38px"}
                    border={"1px solid black"}
                    borderRadius={"25px"}
                    margin={"auto"}
                  >
                    <Box
                      w={"32px"}
                      h={"32px"}
                      border={"1px solid black"}
                      borderRadius={"25px"}
                      margin={"auto"}
                      marginTop={"2px"}
                      bgColor={"navy"}
                    ></Box>
                  </Box>
                </Box>
                <Text fontSize={"11px"} color={"gray"}>
                  Navy Blue
                </Text>
              </Box>
              <Box>
                <HStack>
                  <FontAwesomeIcon icon={faRulerHorizontal} />
                  <Text fontSize={"11px"} textDecor={"underline"}>
                    <Link to={"#"}>Size Chart</Link>
                  </Text>
                  <Text
                    fontSize={"11px"}
                    fontWeight={"bold"}
                    textDecor={"underline"}
                  >
                    <Link to={"#"}>Find the perfect Size now!</Link>
                  </Text>
                </HStack>
              </Box>
              <Box>
                <Text fontSize={"11px"} textAlign={"left"}>
                  We recommend buying a size smaller than the size you shop from
                  other brands.
                </Text>
              </Box>
              {/* <Box>
                <Stack
                  direction={"row"}
                  justifyContent={{ base: "space-between" }}
                >
                  <Select
                    placeholder="Size"
                    borderRadius={0}
                    fontSize={"12px"}
                    w={{ lg: "222px", base: "250px" }}
                  >
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="s">S</option>
                    <option value="xl">XL</option>
                    <option value="xs">XS</option>
                  </Select>
                  <Box
                    border={"1px solid gray"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <Button
                      isDisabled={qtyCount === 1 ? true : false}
                      variant="ghost"
                      size={"xs"}
                      onClick={() => setQtyCount((prev) => prev - 1)}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </Button>
                    <Button variant="ghost" size={"xs"}>
                      {qtyCount}
                    </Button>
                    <Button
                      variant="ghost"
                      size={"xs"}
                      onClick={() => setQtyCount((prev) => prev + 1)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  </Box>
                </Stack>
              </Box> */}
              <Text fontSize={"11px"} textAlign={"left"}>
                This size is available online only.
              </Text>
              <Box>
                <HStack justifyContent={{ base: "space-between" }}>
                  <Button
                    bgColor={"black"}
                    color={"white"}
                    borderRadius={0}
                    fontSize={"13px"}
                    w={{ lg: "252px", base: "252px" }}
                    h={{ lg: "50px", base: "50px" }}
                    _hover={"none"}
                    isDisabled={bag}
                    onClick={handleBag}
                  >
                    ADD TO BAG
                  </Button>
                  <Button
                    variant="ghost"
                    w={{ lg: "64px" }}
                    h={{ lg: "50px", base: "50px" }}
                    borderRadius={0}
                    border={"2px solid black"}
                    isDisabled={wish}
                    onClick={handleWishlist}
                  >
                    <IoHeartOutline size={"25px"} />
                  </Button>
                </HStack>
              </Box>
              <Link to={"#"}>
                <Text
                  fontSize={"11px"}
                  textAlign={"left"}
                  textDecor={"underline"}
                >
                  Return Policy
                </Text>
              </Link>
              <Box>
                <HStack justifyContent={{ base: "space-between" }}>
                  <Input
                    type="text"
                    w={{ lg: "252px", base: "252px" }}
                    h={{ lg: "50px", base: "50px" }}
                    borderRadius={0}
                    placeholder="Enter Delivery Pin Code"
                    fontSize={"12px"}
                  />
                  <Button
                    variant="ghost"
                    w={{ lg: "64px" }}
                    h={{ lg: "50px", base: "50px" }}
                    borderRadius={0}
                    border={"2px solid black"}
                    fontSize={"12px"}
                  >
                    CHECK
                  </Button>
                </HStack>
              </Box>
            </Stack>
          </Box>
        </Box>
      )}

      {/* Product Details */}
      <HStack
        display={"flex"}
        flexDirection={{ lg: "row", base: "column", md: "column" }}
        alignItems={"stretch"}
        w={"70%"}
        margin={"auto"}
        justifyContent={"space-evenly"}
        padding={"20px 10px"}
      >
        <Box padding={"2px"}>
          <Stack>
            <Box textAlign={"left"} padding={"10px 2px"}>
              <Text fontSize={"12px"} fontWeight={"bold"}>
                Materials & Care
              </Text>
              <Box h={2}></Box>
              <UnorderedList fontSize={"11px"} marginLeft={"15px"} spacing={2}>
                <ListItem>100% Cotton</ListItem>
                <ListItem>Machine wash</ListItem>
              </UnorderedList>
            </Box>

            <Box textAlign={"left"} padding={"10px 2px"}>
              <Text fontSize={"12px"} fontWeight={"bold"}>
                The Details
              </Text>
              <Box h={2}></Box>
              <Box>
                <Text fontSize={"12px"}>
                  The one, the only, the legend: comfort never goes out of
                  style.
                </Text>
              </Box>
              <Box h={2}></Box>
              <UnorderedList fontSize={"11px"} marginLeft={"15px"} spacing={2}>
                <ListItem>Style: WEA0172711700 | Color: Yellow</ListItem>
                <ListItem>
                  Model Size:Tommy is 6' 2"(1.88 m), wearing size medium
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
        </Box>

        <Box padding={"2px"}>
          <Stack>
            <Box textAlign={"left"} padding={"10px 2px"}>
              <Text fontSize={"12px"} fontWeight={"bold"}>
                Size & Fit
              </Text>
              <Box h={2}></Box>
              <UnorderedList fontSize={"11px"} marginLeft={"15px"} spacing={2}>
                <ListItem>Standard fit</ListItem>
              </UnorderedList>
            </Box>

            <Text fontSize={"12px"} fontWeight={"bold"} textAlign={"left"}>
              Need Help Finding Your Size?
            </Text>

            <Box textAlign={"left"} padding={"10px 2px"}>
              <Stack spacing={2}>
                <HStack>
                  <FontAwesomeIcon icon={faRulerHorizontal} />
                  <Text fontSize={"12px"} fontWeight={"bold"}>
                    Size Chart
                  </Text>
                </HStack>
                <HStack>
                  <Text fontSize={"12px"} fontWeight={"bold"}>
                    Product Disclosure
                  </Text>
                  <FontAwesomeIcon icon={faPlus} />
                </HStack>
                <HStack>
                  <RiFacebookFill />
                  <RiTwitterFill />
                </HStack>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </HStack>

      {/* Product Carousel */}
      <Box margin={"30px 15px"}>
        <ProductCarousel />
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
};
