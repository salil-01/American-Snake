/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    Box,
    Button,
    HStack,
    Input,
    Link,
    Stack,
    Text,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <DIV>
            <Box borderTop={"1px solid gray"}>
                <Box w={"80%"} margin={"auto"}>
                    <HStack justifyContent={"space-around"}>
                        <Box
                            h={{ lg: "51px", base: "auto" }}
                            w={{ lg: "491px", base: "auto" }}
                            border="1px solid black"
                            padding={"15px 10px"}
                            margin={"30px 0"}
                        >
                            <Text
                                fontSize={"13.33px"}
                                fontWeight={"light"}
                                letterSpacing={"0.5px"}
                            >
                                Want 25% off your purchase?{" "}
                                <Link textDecoration={"underline"}>
                                    Refer A friend
                                </Link>
                                !
                            </Text>
                        </Box>
                        <Box
                            h={{ lg: "51px", base: "auto" }}
                            w={{ lg: "491px", base: "auto" }}
                            border="1px solid black"
                            padding={"15px 10px"}
                            margin={"30px 0"}
                        >
                            <Text
                                fontSize={"13.33px"}
                                fontWeight={"light"}
                                letterSpacing={"0.5px"}
                            >
                                A gift that always fits.{" "}
                                <Link textDecoration={"underline"}>
                                    Shop E-Gift Card
                                </Link>
                            </Text>
                        </Box>
                    </HStack>
                </Box>
            </Box>
            <Stack
                direction={{ lg: "row", base: "column", md: "row" }}
                borderBottom={"1px solid gray"}
            >
                <DIV className="footerBox">
                    <Stack spacing={3.5}>
                        <Text
                            fontSize={"14px"}
                            fontWeight={"bold"}
                            letterSpacing={"1.5px"}
                            padding={"0 30px"}
                        >
                            <Link>Customer Policies</Link>
                        </Text>

                        <Text
                            fontSize={"12px"}
                            letterSpacing={"0.5px"}
                            padding={"0 30px"}
                        >
                            <Link>Terms And Conditions Of Use</Link>
                        </Text>
                        <Text
                            fontSize={"12px"}
                            letterSpacing={"0.5px"}
                            padding={"0 30px"}
                        >
                            <Link>Offer Terms And Conditions</Link>
                        </Text>
                        <Text
                            fontSize={"12px"}
                            letterSpacing={"0.5px"}
                            padding={"0 30px"}
                        >
                            <Link>Shipping Policy</Link>
                        </Text>
                        <Text
                            fontSize={"12px"}
                            letterSpacing={"0.5px"}
                            padding={"0 30px"}
                        >
                            <Link>Returns Policy</Link>
                        </Text>
                        <Text
                            fontSize={"12px"}
                            letterSpacing={"0.5px"}
                            padding={"0 30px"}
                        >
                            <Link>Cancellation Policy</Link>
                        </Text>
                        <Text
                            fontSize={"12px"}
                            letterSpacing={"0.5px"}
                            padding={"0 30px"}
                        >
                            <Link>Payment Options</Link>
                        </Text>
                        <Text
                            fontSize={"12px"}
                            letterSpacing={"0.5px"}
                            padding={"0 30px"}
                        >
                            <Link>Privacy Policy</Link>
                        </Text>
                    </Stack>
                </DIV>
                <DIV className="footerBox">
                    <Stack spacing={3.5}>
                        <Text
                            fontSize={"14px"}
                            fontWeight={"bold"}
                            letterSpacing={"1.5px"}
                            padding={"0 30px"}
                        >
                            <Link>Help</Link>
                        </Text>
                        <Text
                            fontSize={"12px"}
                            letterSpacing={"0.5px"}
                            padding={"0 30px"}
                        >
                            <Link>About ASO</Link>
                        </Text>
                        <Text
                            fontSize={"12px"}
                            letterSpacing={"0.5px"}
                            padding={"0 30px"}
                        >
                            <Link>ASO Blogs</Link>
                        </Text>
                        <Text
                            fontSize={"12px"}
                            letterSpacing={"0.5px"}
                            padding={"0 30px"}
                        >
                            <Link>Customer Support</Link>
                        </Text>
                        <Text
                            fontSize={"12px"}
                            letterSpacing={"0.5px"}
                            padding={"0 30px"}
                        >
                            <Link>Frequently Asked Questions</Link>
                        </Text>
                        <Text
                            fontSize={"12px"}
                            letterSpacing={"0.5px"}
                            padding={"0 30px"}
                        >
                            <Link>Track Order</Link>
                        </Text>
                        <Text
                            fontSize={"12px"}
                            letterSpacing={"0.5px"}
                            padding={"0 30px"}
                        >
                            <Link>Store Locator</Link>
                        </Text>
                        <Text
                            fontSize={"12px"}
                            letterSpacing={"0.5px"}
                            padding={"0 30px"}
                        >
                            <Link>Site Map</Link>
                        </Text>
                    </Stack>
                </DIV>
                <DIV className="footerBox">
                    <Text
                        fontSize={"14px"}
                        fontWeight={"bold"}
                        // letterSpacing={"1.5px"}
                    >
                        Keep in touch
                    </Text>
                    <Box>
                        <Text
                            fontSize={"12px"}
                            letterSpacing={"0.5px"}
                            margin={"12px 0"}
                        >
                            Sign up for email and get insider access to
                            exclusive offers, new arrivals, style tips and more
                        </Text>
                        <HStack>
                            <Input
                                type="email"
                                placeholder="Enter your email address"
                                style={{
                                    borderRadius: "0",
                                    width: "238px",
                                    height: "42px",
                                }}
                            />
                            <Button
                                style={{
                                    borderRadius: "0",
                                    backgroundColor: "black",
                                    color: "white",
                                }}
                            >
                                SIGN UP
                            </Button>
                        </HStack>
                        <Box w={"35px"} h={"35px"}></Box>
                        <HStack>
                            <Box w={"35px"} h={"35px"}>
                                <Link href="#">
                                    <FaInstagram size={"32px"} />
                                </Link>
                            </Box>
                            <Box w={"35px"} h={"35px"}>
                                <Link href="#">
                                    <FaFacebookF size={"32px"} />
                                </Link>
                            </Box>
                            <Box w={"35px"} h={"35px"}>
                                <Link href="#">
                                    <FaYoutube size={"32px"} />
                                </Link>
                            </Box>
                        </HStack>
                    </Box>
                </DIV>
            </Stack>

            <Box>
                <Text
                    fontSize={"12px"}
                    letterSpacing={"0.5px"}
                    margin={"12px 0"}
                    textAlign={"left"}
                    padding={"15px 35px"}
                >
                    © 2021 ASO Management Co. All Rights Reserved.
                </Text>
            </Box>
        </DIV>
    );
};

export default Footer;

const DIV = styled.div`
    .footerBox {
        height: 305px;
        width: 100%;
        /* border: 1px dashed red; */
        text-align: left;
        padding: 26px 10px 12px 10px;
    }
`;
