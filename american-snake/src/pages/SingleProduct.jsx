import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    HStack,
    Heading,
    Image,
    Link,
    Select,
    Stack,
    Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMinus,
    faPlus,
    faRulerHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const { id } = useParams();
    const [productItem, setProductItem] = useState([]);
    const [qtyCount, setQtyCount] = useState(1);

    useEffect(() => {
        axios
            .get(`https://american-eagle-mock-server.onrender.com/men/${id}`)
            .then((res) => {
                console.log(res.data);
                setProductItem(res.data);
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
            <Box
                w={"97%"}
                border={"1px solid black"}
                display={"flex"}
                flexDirection={{ lg: "row", base: "column", md: "column" }}
            >
                {/* Image section */}
                <Box
                    w={"540px"}
                    border={"1px dashed black"}
                    padding={"15px"}
                    // h={"668px"}
                >
                    <Stack direction={"row"} spacing={9}>
                        {/* preview Image section */}
                        <Box w={"60px"} marginLeft={"20px"}>
                            <Stack spacing={3}>
                                <Box
                                    w={"54px"}
                                    h={"69px"}
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
                            <Image src={image_front} />
                        </Box>
                    </Stack>
                </Box>

                {/* Product Specification */}
                <Box
                    w={{ lg: "426px" }}
                    padding={"35px 50px 0 50px"}
                    border={"1px dashed red"}
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
                                    <Link>Size Chart</Link>
                                </Text>
                                <Text
                                    fontSize={"11px"}
                                    fontWeight={"bold"}
                                    textDecor={"underline"}
                                >
                                    <Link>Find the perfect Size now!</Link>
                                </Text>
                            </HStack>
                        </Box>
                        <Box>
                            <Text fontSize={"11px"} textAlign={"left"}>
                                We recommend buying a size smaller than the size
                                you shop from other brands.
                            </Text>
                        </Box>
                        <Box>
                            <Stack direction={"row"}>
                                <Select
                                    placeholder="Size"
                                    borderRadius={0}
                                    w={{ lg: "222px", base: "none" }}
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
                                        isDisabled={
                                            qtyCount === 1 ? true : false
                                        }
                                        variant="ghost"
                                        size={"xs"}
                                        onClick={() =>
                                            setQtyCount((prev) => prev - 1)
                                        }
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </Button>
                                    <Button variant="ghost" size={"xs"}>
                                        {qtyCount}
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size={"xs"}
                                        onClick={() =>
                                            setQtyCount((prev) => prev + 1)
                                        }
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                </Box>
                            </Stack>
                        </Box>
                        <Text fontSize={"11px"} textAlign={"left"}>
                            This size is available online only.
                        </Text>
                        <Box>
                            <HStack>
                                <Button
                                    bgColor={"black"}
                                    color={"white"}
                                    borderRadius={0}
                                    fontSize={"13px"}
                                    w={{ lg: "252px" }}
                                    h={{ lg: "50px" }}
                                    _hover={"none"}
                                >
                                    ADD TO BAG
                                </Button>
                                <Button
                                    w={{ lg: "64px" }}
                                    h={{ lg: "50px" }}
                                    borderRadius={0}
                                    border={"2px solid black"}
                                ></Button>
                            </HStack>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </>
    );
};

export default SingleProduct;