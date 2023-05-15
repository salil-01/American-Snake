import {
    Box,
    Button,
    Center,
    Flex,
    Grid,
    Input,
    Text,
    Select,
    ModalBody,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalHeader,
    ModalFooter,
    FormControl,
    FormLabel,
    Tooltip,
    HStack,
    Divider,
    Stack,
    useToast,
} from "@chakra-ui/react";
import "./Bag.css";
import React, { useState } from "react";
import { BsTag } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

import CardDetail from "../components/Bag/Payment";
import { CheckIcon } from "@chakra-ui/icons";
import ProductPreview from "../components/Bag/ProductPreview";
import { useDispatch } from "react-redux";
import { addAddress } from "../redux/bagReducer/action";
import Navbar from "../components/Homepage/Navbar";
import Footer from "../components/Homepage/Footer";

const initialData = {
    name: "",
    mobile: "",
    pincode: "",
    city: "",
    state: "",
    location: "",
};
export const Bag = () => {
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    const [formData, setFormData] = useState(initialData);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddAddress = (e) => {
        e.preventDefault();
        if (
            formData.mobile.split("").length === 10 &&
            formData.pincode.split("").length === 6 &&
            formData.name &&
            formData.city &&
            formData.state &&
            formData.location
        ) {
            onClose();
            dispatch(addAddress(formData));
        } else {
            toast({
                title: `Please Enter a Valid Details.`,
                status: "error",
                isClosable: true,
            });
        }
    };

    return (
        <div style={{ width: "100%" }}>
            <Navbar />
            <Stack
                width={{ sm: "100%", md: "100%", lg: "80%" }}
                margin={"auto"}
                direction={{ lg: "row", base: "column" }}
                justifyContent={"space-around"}
                spacing={9}
                mt={"80px"}
            >
                <Box w={{ bs: "100%", md: "100%", lg: "60%" }} margin={"auto"}>
                    <Box>
                        <Text textAlign={"left"} fontWeight={"500"}>
                            1. YOUR CART
                        </Text>
                        <Divider border={"1px solid black"} />

                        {/* <================== Hard Coded Data =============> */}
                        <ProductPreview setTotal={setTotal} />
                        {/* <================== Hard Coded Data =============> */}

                        <br />
                    </Box>
                    <Box>
                        <Text textAlign={"left"} fontWeight={"500"}>
                            2. SHIPPING DETAILS
                        </Text>
                        <Divider border={"1px solid black"} />
                    </Box>
                    <Flex
                        style={{
                            padding: "15px",
                            boxShadow:
                                "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
                        }}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Button
                            onClick={onOpen}
                            fontSize="1rem"
                            ml={"1%"}
                            fontWeight={"400"}
                            border={"1px solid #1d2b4f"}
                            colorScheme="white"
                            borderRadius={"0%"}
                            color={"#1d2b4f"}
                            _hover={{
                                color: "white",
                                backgroundColor: "#1d2b4f",
                            }}
                        >
                            ADD NEW SHIPPING ADDRESS
                        </Button>
                        <Box>
                            <Center>
                                <Text as={"h3"} fontWeight={"bold"}>
                                    Current Address
                                </Text>
                            </Center>
                            {formData.name ? (
                                <p style={{ textAlign: "left" }}>
                                    {" "}
                                    {`Name : ${formData.name}`}
                                </p>
                            ) : (
                                ""
                            )}
                            {formData.mobile ? (
                                <p style={{ textAlign: "left" }}>
                                    {" "}
                                    {`Mobile : ${formData.mobile}`}
                                </p>
                            ) : (
                                ""
                            )}
                            {formData.pincode ? (
                                <p style={{ textAlign: "left" }}>
                                    {" "}
                                    {`Pincode : ${formData.pincode}`}
                                </p>
                            ) : (
                                ""
                            )}
                            {formData.city ? (
                                <p style={{ textAlign: "left" }}>
                                    {" "}
                                    {`City : ${formData.city}`}
                                </p>
                            ) : (
                                ""
                            )}
                            {formData.state ? (
                                <p style={{ textAlign: "left" }}>
                                    {" "}
                                    {`State : ${formData.state}`}
                                </p>
                            ) : (
                                ""
                            )}
                            {formData.location ? (
                                <p style={{ textAlign: "left" }}>
                                    {" "}
                                    {`Location : ${formData.location}`}
                                </p>
                            ) : (
                                ""
                            )}
                        </Box>

                        <Modal
                            blockScrollOnMount={false}
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>
                                    Change Delivey Address
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Box>
                                        <FormControl>
                                            <Box>
                                                <Tooltip
                                                    hasArrow
                                                    label="enter valid name"
                                                    placement="top"
                                                    bg="#ff7043"
                                                >
                                                    <Input
                                                        mt={1}
                                                        type={"text"}
                                                        isRequired
                                                        name="name"
                                                        placeholder="Full Name*"
                                                        variant="flushed"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />
                                                </Tooltip>
                                            </Box>

                                            <Box mt={5}>
                                                <FormLabel>Mobile</FormLabel>
                                                <Tooltip
                                                    hasArrow
                                                    label="enter valid mobile no."
                                                    placement="top"
                                                    bg="#ff7043"
                                                >
                                                    <Input
                                                        type="number"
                                                        name="mobile"
                                                        placeholder="+91-Mobile Number"
                                                        variant="flushed"
                                                        maxLength="10"
                                                        onChange={handleChange}
                                                        value={formData.mobile}
                                                    />
                                                </Tooltip>
                                            </Box>

                                            <Box display="flex" mt={2}>
                                                <Box>
                                                    <Tooltip
                                                        hasArrow
                                                        label="enter valid pincode"
                                                        placement="top"
                                                        bg="#ff7043"
                                                    >
                                                        <Input
                                                            mt={5}
                                                            type="number"
                                                            name="pincode"
                                                            maxLength="6"
                                                            placeholder="Pincode*"
                                                            variant="flushed"
                                                            value={
                                                                formData.pincode
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </Tooltip>
                                                </Box>
                                                <Box pl={4}>
                                                    <Tooltip
                                                        hasArrow
                                                        label="enter valid name"
                                                        placement="top"
                                                        bg="#ff7043"
                                                    >
                                                        <Input
                                                            mt={5}
                                                            type={"text"}
                                                            name="city"
                                                            placeholder="City*"
                                                            variant="flushed"
                                                            onChange={
                                                                handleChange
                                                            }
                                                            value={
                                                                formData.city
                                                            }
                                                        />
                                                    </Tooltip>
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Tooltip
                                                    hasArrow
                                                    label="enter valid state"
                                                    placement="top"
                                                    bg="#ff7043"
                                                >
                                                    <Input
                                                        mt={5}
                                                        type={"text"}
                                                        name="state"
                                                        placeholder="State*"
                                                        variant="flushed"
                                                        onChange={handleChange}
                                                        value={formData.state}
                                                    />
                                                </Tooltip>
                                            </Box>
                                            <Box>
                                                <Select
                                                    mt={5}
                                                    name="location"
                                                    onChange={handleChange}
                                                    placeholder="Select Location"
                                                    value={formData.location}
                                                >
                                                    <option value="home">
                                                        Home
                                                    </option>
                                                    <option value="office">
                                                        Office
                                                    </option>
                                                </Select>
                                            </Box>

                                            {formData.name.length === 0 ||
                                            formData.mobile.length === 0 ||
                                            formData.pincode.length === 0 ||
                                            formData.city.length === 0 ||
                                            formData.state.length === 0 ? (
                                                <Box
                                                    fontSize={"0.7rem"}
                                                    color={"red"}
                                                    textAlign={"left"}
                                                >
                                                    *Fill All the Details
                                                    correctly
                                                </Box>
                                            ) : null}
                                        </FormControl>
                                    </Box>
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        width={"full"}
                                        backgroundColor={"#1d2b4f"}
                                        color={"white"}
                                        mr={3}
                                        onClick={(e) => {
                                            handleAddAddress(e);
                                            // console.log(formData);
                                        }}
                                    >
                                        ADD ADDRESS
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Flex>
                    <br />
                    <br />
                    <Box>
                        <Text textAlign={"left"} fontWeight={"500"}>
                            3. PAYMENT OPTIONS
                        </Text>

                        <Divider border={"1px solid black"} />
                        <HStack marginLeft={"1%"} padding={"15px"}>
                            <CardDetail />
                        </HStack>
                    </Box>
                    <div
                        style={{
                            marginTop: "10px",
                            padding: "15px",
                            boxShadow:
                                "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
                        }}
                    >
                        <Flex>
                            <TbTruckDelivery />
                            <p style={{ fontSize: "12px" }}>
                                Yeh ! No Convinience fee for this Order
                            </p>
                        </Flex>
                    </div>
                </Box>
                <Box w={{ bs: "80%", md: "80%", lg: "30%" }} margin={"auto"}>
                    <div
                        style={{
                            padding: "15px",
                            display: "flex",
                            gap: "5%",
                        }}
                    >
                        <HStack
                            border={"1px dotted"}
                            gap={"15px"}
                            padding={"8px"}
                        >
                            <span
                                style={{
                                    marginTop: "9px",
                                    marginRight: "-20px",
                                }}
                            >
                                <BsTag />
                            </span>
                            <p> Coupons</p>

                            <div>
                                <h1 style={{ fontSize: "10px" }}>
                                    1 Coupon Applied
                                </h1>
                                <p style={{ fontSize: "10px" }}>
                                    You save Additional 200
                                </p>
                            </div>
                            <div>
                                <Button
                                    style={{ fontSize: "12px" }}
                                    borderRadius={"0%"}
                                    border={"1px solid #ef506a"}
                                    colorScheme="white"
                                    color={"#ef506a"}
                                    w={"80px"}
                                    h={"35px"}
                                >
                                    Edit
                                </Button>
                            </div>
                        </HStack>
                    </div>
                    <Flex mt={2} gap={2}>
                        <Button
                            borderRadius={"100px"}
                            fontSize={"12px"}
                            variant="outline"
                        >
                            {" "}
                            Rs 10{" "}
                        </Button>
                        <Button
                            borderRadius={"100px"}
                            fontSize={"12px"}
                            variant="outline"
                        >
                            {" "}
                            Rs 20{" "}
                        </Button>
                        <Button
                            borderRadius={"100px"}
                            fontSize={"12px"}
                            variant="outline"
                        >
                            {" "}
                            Rs 30{" "}
                        </Button>
                        <Button
                            borderRadius={"100px"}
                            fontSize={"12px"}
                            variant="outline"
                        >
                            {" "}
                            Other{" "}
                        </Button>
                    </Flex>

                    <Box padding={15} mt={"10px"} bg={"#f2f2f2"}>
                        <h1
                            style={{
                                fontSize: "1.7rem",
                                fontWeight: "400",
                                textAlign: "left",
                                padding: "10px 0",
                            }}
                        >
                            Order Summary
                        </h1>
                        <Flex justifyContent={"space-between"} mt={2}>
                            <p style={{ fontSize: "14px" }}>Total MRP</p>
                            <p
                                style={{
                                    fontSize: "14px",

                                    marginLeft: "150px",
                                }}
                            >
                                ₹ {total}
                            </p>
                            <hr />
                        </Flex>
                        <hr style={{ marginRight: "100px" }} />
                        <Flex justifyContent={"space-between"} mt={2}>
                            <p style={{ fontSize: "14px" }}>Discount on MRP</p>
                            <p
                                style={{
                                    fontSize: "14px",
                                    marginLeft: "120px",
                                    color: "red",
                                }}
                            >
                                ₹ 79
                            </p>
                            <hr />
                        </Flex>
                        <hr style={{ marginRight: "100px" }} />
                        <Flex justifyContent={"space-between"} mt={2}>
                            <p style={{ fontSize: "14px" }}>
                                <strong>Shipping</strong>
                            </p>
                            <p
                                style={{
                                    fontSize: "14px",
                                    marginLeft: "165px",
                                }}
                            >
                                <strong>Free</strong>
                            </p>
                            <hr />
                        </Flex>

                        <Divider border={"1px solid black"} />
                        <Flex justifyContent={"space-between"} mt={2}>
                            <p
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    marginTop: "7px",
                                }}
                            >
                                Total Amount
                            </p>
                            <p
                                style={{
                                    fontSize: "14px",
                                    padding: "10px",
                                    marginLeft: "120px",
                                    fontWeight: "bold",
                                }}
                            >
                                ₹ {total - 79}
                            </p>
                            <hr />
                        </Flex>
                        <HStack spacing={3} margin={"5px 0"}>
                            <Box>
                                <CheckIcon />
                            </Box>
                            <Text
                                fontSize={"13px"}
                                marginTop={"15px"}
                                fontWeight={"500"}
                                textAlign={"left"}
                            >
                                Safe and Secure Payments. Easy returns. 100%
                                Authentic products
                            </Text>
                        </HStack>
                    </Box>
                </Box>
            </Stack>

            <Footer />
        </div>
    );
};