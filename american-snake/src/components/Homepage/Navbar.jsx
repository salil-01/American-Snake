import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Input,
    HStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import logo from "../../Assets/american-eagle.png";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    // eslint-disable-next-line no-unused-vars
    const [wishListCount, setWishListCount] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [bagCount, setBagCount] = useState(0);
    const [show, setShow] = useState(false);
    const handleSearchClick = () => {
        setShow((prev) => !prev);
    };

    return (
        <Box position={"sticky"} top={0} zIndex={'overlay'}>
            <Flex
                bg={useColorModeValue("white", "gray.800")}
                color={useColorModeValue("gray.600", "white")}
                minH={"60px"}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.900")}
                align={"center"}
                alignItems={"center"}
            >
                <Flex
                    flex={{ base: 1, md: "auto" }}
                    ml={{ base: -2 }}
                    display={{ base: "flex", md: "none" }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? (
                                <CloseIcon w={3} h={3} />
                            ) : (
                                <HamburgerIcon w={5} h={5} />
                            )
                        }
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>
                <Flex
                    flex={{ base: 1 }}
                    justify={{ base: "center", md: "start" }}
                    // custom work
                    // border="1px solid red"
                    alignItems={"center"}
                >
                    <Text
                        textAlign={useBreakpointValue({
                            base: "center",
                            md: "left",
                        })}
                        fontFamily={"heading"}
                        color={useColorModeValue("gray.800", "white")}
                    >
                        <Image src={logo} w={{ lg: "240px", base: "none" }} />
                    </Text>
                    <Box w="100%">
                        <Flex display={{ base: "none", md: "flex" }}>
                            <Box margin="auto">
                                <DesktopNav />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={"flex-end"}
                    direction={"row"}
                    spacing={4}
                >
                    {show === true ? (
                        <Box>
                            <Input
                                w={{ lg: "116px", base: "none" }}
                                h={"29px"}
                                borderRadius={0}
                                type="text"
                                placeholder="search"
                            />
                        </Box>
                    ) : (
                        " "
                    )}
                    <Box
                        w={"30px"}
                        h={"30px"}
                        // border={"1px solid black"}
                        _hover={{ cursor: "pointer" }}
                        onClick={handleSearchClick}
                    >
                        <Link href={"#"}>
                            <CiSearch size={"28px"} />
                        </Link>
                    </Box>
                    <Box
                        w={"30px"}
                        h={"30px"}
                        // border={"1px solid black"}
                        _hover={{ cursor: "pointer" }}
                    >
                        <HStack>
                            <Link href={"#"}>
                                <CiHeart size={"28px"} />
                            </Link>
                            <span
                                style={{
                                    marginTop: "-30px",
                                    marginLeft: "-5px",
                                    display: "float",
                                }}
                            >
                                {wishListCount}
                            </span>
                        </HStack>
                    </Box>
                    <Box
                        w={"30px"}
                        h={"30px"}
                        // border={"1px solid black"}
                        _hover={{ cursor: "pointer" }}
                    >
                        <HStack>
                            <Link href={"#"}>
                                <IoBagOutline size={"27px"} />
                            </Link>
                            <span
                                style={{
                                    marginTop: "-30px",
                                    marginLeft: "-5px",
                                    display: "float",
                                }}
                            >
                                {bagCount}
                            </span>
                        </HStack>
                    </Box>
                    <Box
                        w={"30px"}
                        h={"30px"}
                        // border={"1px solid black"}
                        _hover={{ cursor: "pointer" }}
                    >
                        <Link href={"#"}>
                            <IoPersonOutline size={"27px"} />
                        </Link>
                    </Box>
                </Stack>
            </Flex>
            <Box
                bgColor={"#1D2B4F"}
                h={"29px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Text color={"white"} fontSize={"12px"}>
                    Flat 10% off* on first purchase | Use: AEFIRST10
                </Text>
            </Box>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
        <Stack direction={"row"} spacing={4}>
            {/* {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? "#"}
                                fontSize={"16px"}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: "none",
                                    color: linkHoverColor,
                                }}
                            >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                borderTop={0}
                                boxShadow={"md"}
                                bg={popoverContentBgColor}
                                borderRadius={0}
                                p={5}
                                minW={"sm"}
                                w={"100vw"}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav
                                            key={child.label}
                                            {...child}
                                        />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))} */}

            <Box>
                {/* Mens section */}
                <Popover trigger={"hover"} placement={"bottom-start"}>
                    <PopoverTrigger>
                        <Link
                            p={2}
                            href={"#"}
                            fontSize={"16px"}
                            fontWeight={500}
                            color={linkColor}
                            _hover={{
                                textDecoration: "none",
                                color: linkHoverColor,
                            }}
                        >
                            Mens
                        </Link>
                    </PopoverTrigger>
                    <PopoverContent
                        borderTop={0}
                        boxShadow={"md"}
                        bg={popoverContentBgColor}
                        borderRadius={0}
                        p={5}
                        minW={"sm"}
                        w={"100vw"}
                    >
                        <HStack
                            align={"start"}
                            spacing={36}
                            padding={"2px 12px"}
                            marginBottom={"30px"}
                        >
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Text fontWeight={"bold"}>TOPS</Text>
                                <Text>
                                    <Link href="/products-men">T-Shirts</Link>
                                </Text>
                                <Text>
                                    <Link href="/products-men">
                                        Graphic Tees
                                    </Link>
                                </Text>
                                <Text>
                                    <Link href="/products-men">Shirts</Link>
                                </Text>
                                <Text>
                                    <Link href="/products-men">Jackets</Link>
                                </Text>
                                <Text>
                                    <Link href="/products-men">
                                        Hoodies & Sweatshirts
                                    </Link>
                                </Text>
                            </Stack>
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Text fontWeight={"bold"}>BOTTOMS</Text>
                                <Text>
                                    <Link href="/products-men">Shorts</Link>
                                </Text>
                                <Text>
                                    <Link href="/products-men">Joggers</Link>
                                </Text>
                                <Text>
                                    <Link href="/products-men">Chinos</Link>
                                </Text>
                            </Stack>
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Text fontWeight={"bold"}>UNDERWEAR</Text>
                            </Stack>
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Text fontWeight={"bold"}>
                                    SHOES & ACCESSORIES
                                </Text>
                                <Text>
                                    <Link href="/products-men">Socks</Link>
                                </Text>
                                <Text>
                                    <Link>Belts</Link>
                                </Text>
                            </Stack>
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Text fontWeight={"bold"}>FEATURED</Text>
                                <Text>
                                    <Link>New Arrivals</Link>
                                </Text>
                                <Text>
                                    <Link>Best Sellers</Link>
                                </Text>
                                <Text>
                                    <Link>Airflex Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Ripped Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Stripe Edit</Link>
                                </Text>
                            </Stack>
                        </HStack>
                    </PopoverContent>
                </Popover>

                {/* Womens section */}
                <Popover trigger={"hover"} placement={"bottom-start"}>
                    <PopoverTrigger>
                        <Link
                            p={2}
                            href={"#"}
                            fontSize={"16px"}
                            fontWeight={500}
                            color={linkColor}
                            _hover={{
                                textDecoration: "none",
                                color: linkHoverColor,
                            }}
                        >
                            Womens
                        </Link>
                    </PopoverTrigger>
                    <PopoverContent
                        borderTop={0}
                        boxShadow={"md"}
                        bg={popoverContentBgColor}
                        borderRadius={0}
                        p={5}
                        minW={"sm"}
                        w={"100vw"}
                    >
                        <HStack
                            align={"start"}
                            spacing={36}
                            padding={"2px 12px"}
                            marginBottom={"30px"}
                        >
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Text fontWeight={"bold"}>TOPS</Text>
                                <Text>
                                    <Link>T-Shirts</Link>
                                </Text>
                                <Text>
                                    <Link>Graphic Tees</Link>
                                </Text>
                                <Text>
                                    <Link>Shirts</Link>
                                </Text>
                                <Text>
                                    <Link>Sweaters & Carigans</Link>
                                </Text>
                                <Text>
                                    <Link>Jackets</Link>
                                </Text>
                                <Text>
                                    <Link>Hoodies & Sweatshirts</Link>
                                </Text>
                            </Stack>
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Text fontWeight={"bold"}>BOTTOMS</Text>
                                <Text>
                                    <Link>Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Shorts</Link>
                                </Text>
                                <Text>
                                    <Link>Pants</Link>
                                </Text>
                                <Text>
                                    <Link>Skirts</Link>
                                </Text>
                                <Text>
                                    <Link>Joggers</Link>
                                </Text>
                            </Stack>
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Text fontWeight={"bold"}>DRESSES</Text>
                                <Text>
                                    <Link>Midi Dresses</Link>
                                </Text>
                                <Text>
                                    <Link>Jumpsuits</Link>
                                </Text>
                                <Text>
                                    <Link>Maxi Dresses</Link>
                                </Text>
                                <Text>
                                    <Link>Mini Dresses</Link>
                                </Text>
                                <Text>
                                    <Link>Rompers</Link>
                                </Text>
                                <Text>
                                    <Link>Shift Dresses</Link>
                                </Text>
                                <Text>
                                    <Link>Shirt Dresses</Link>
                                </Text>
                            </Stack>
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Text fontWeight={"bold"}>
                                    SHOES & ACCESSORIES
                                </Text>
                                <Text>
                                    <Link>Shoes</Link>
                                </Text>
                                <Text>
                                    <Link>Socks</Link>
                                </Text>
                                <Text>
                                    <Link>Sunglasses</Link>
                                </Text>
                                <Text>
                                    <Link>Belts</Link>
                                </Text>
                                <Text>
                                    <Link>Rompers</Link>
                                </Text>
                                <Text>
                                    <Link>Bags</Link>
                                </Text>
                                <Text>
                                    <Link>Jewelry</Link>
                                </Text>
                            </Stack>
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Text fontWeight={"bold"}>FEATURED</Text>
                                <Text>
                                    <Link>New Arrivals</Link>
                                </Text>
                                <Text>
                                    <Link>Best Sellers</Link>
                                </Text>
                                <Text>
                                    <Link>Crop Edit</Link>
                                </Text>
                                <Text>
                                    <Link>Ripped Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>The Logo Shop</Link>
                                </Text>
                                <Text>
                                    <Link>Curvy Destination</Link>
                                </Text>
                                <Text>
                                    <Link>Dream Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>The Dress Shop</Link>
                                </Text>
                                <Text>
                                    <Link>Stripe Edit</Link>
                                </Text>
                            </Stack>
                        </HStack>
                    </PopoverContent>
                </Popover>

                {/* Jeans */}
                <Popover trigger={"hover"} placement={"bottom-start"}>
                    <PopoverTrigger>
                        <Link
                            p={2}
                            href={"#"}
                            fontSize={"16px"}
                            fontWeight={500}
                            color={linkColor}
                            _hover={{
                                textDecoration: "none",
                                color: linkHoverColor,
                            }}
                        >
                            Jeans
                        </Link>
                    </PopoverTrigger>
                    <PopoverContent
                        borderTop={0}
                        boxShadow={"md"}
                        bg={popoverContentBgColor}
                        borderRadius={0}
                        p={5}
                        minW={"sm"}
                        w={"100vw"}
                    >
                        <HStack
                            align={"start"}
                            spacing={36}
                            padding={"2px 12px"}
                            marginBottom={"30px"}
                        >
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Text fontWeight={"bold"}>MENS JEANS</Text>
                                <Text>
                                    <Link>Skinny Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Slim Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Straight Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Airflex Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Bootcut Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Slim Straight Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Athletic Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Tapered Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Ripped Jeans</Link>
                                </Text>
                            </Stack>
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Text fontWeight={"bold"}>WOMENS JEANS</Text>
                                <Text>
                                    <Link>Artist Flare Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Curvy Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Jeggings</Link>
                                </Text>
                                <Text>
                                    <Link>Hi Rise Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Cropped Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Kickboot Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Mom Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Skinny Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Skinny Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Slim Straight Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Tomgirl Jeans</Link>
                                </Text>
                                <Text>
                                    <Link>Ripped Jeans</Link>
                                </Text>
                            </Stack>
                        </HStack>
                    </PopoverContent>
                </Popover>

                {/* Sales */}
                <Popover trigger={"hover"} placement={"bottom-start"}>
                    <PopoverTrigger>
                        <Link
                            p={2}
                            href={"#"}
                            fontSize={"16px"}
                            fontWeight={500}
                            color={linkColor}
                            _hover={{
                                textDecoration: "none",
                                color: linkHoverColor,
                            }}
                        >
                            Sale
                        </Link>
                    </PopoverTrigger>
                    <PopoverContent
                        borderTop={0}
                        boxShadow={"md"}
                        bg={popoverContentBgColor}
                        borderRadius={0}
                        p={5}
                        minW={"sm"}
                        w={"100vw"}
                    >
                        <HStack
                            align={"start"}
                            spacing={36}
                            padding={"2px 12px"}
                            marginBottom={"30px"}
                        >
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Text fontWeight={"bold"}>MENS SALE</Text>
                                <Text>
                                    <Link>Bottoms</Link>
                                </Text>
                            </Stack>
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Text fontWeight={"bold"}>WOMENS SALE</Text>
                                <Text>
                                    <Link>Tops</Link>
                                </Text>
                                <Text>
                                    <Link>Bottoms</Link>
                                </Text>
                                <Text>
                                    <Link>Jeans</Link>
                                </Text>
                            </Stack>
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Text fontWeight={"bold"}>
                                    LAST OF THE BEST
                                </Text>
                                <Text>
                                    <Link>Upto 60 percetn Off</Link>
                                </Text>
                            </Stack>
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Text fontWeight={"bold"}>WOMENS FEST</Text>
                            </Stack>
                        </HStack>
                    </PopoverContent>
                </Popover>
            </Box>
        </Stack>
    );
};

// const DesktopSubNav = ({ label, href, subLabel }) => {
//     return (
//         <Link
//             href={href}
//             role={"group"}
//             display={"block"}
//             p={2}
//             rounded={"md"}
//             // _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//         >
//             <Stack direction={"row"} align={"center"}>
//                 <Box border={"1px solid red"} textAlign={"left"}>
//                     <Text
//                         transition={"all .3s ease"}
//                         // _groupHover={{ color: "pink.400" }}
//                         // fontWeight={"bold"}
//                         fontSize={"12px"}
//                     >
//                         {label}
//                     </Text>
//                     <Text fontSize={"12px"} letterSpacing={"0.5px"}>
//                         {subLabel}
//                     </Text>
//                 </Box>
//                 <Flex
//                     transition={"all .3s ease"}
//                     transform={"translateX(-10px)"}
//                     opacity={0}
//                     _groupHover={{
//                         opacity: "100%",
//                         transform: "translateX(0)",
//                     }}
//                     justify={"flex-end"}
//                     align={"center"}
//                     flex={1}
//                 ></Flex>
//             </Stack>
//         </Link>
//     );
// };

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            display={{ md: "none" }}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? "#"}
                justify={"space-between"}
                align={"center"}
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue("gray.600", "gray.200")}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={"all .25s ease-in-out"}
                        transform={isOpen ? "rotate(180deg)" : ""}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse
                in={isOpen}
                animateOpacity
                style={{ marginTop: "0!important" }}
            >
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    align={"start"}
                >
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: "Mens",
        children: [
            {
                label: "T-Shits",
                href: "/products-men",
            },
            {
                label: "Graphic Tees",
                href: "/products-men",
            },
            {
                label: "Shits",
                href: "/products-men",
            },
            {
                label: "Jackets",
                href: "/products-men",
            },
        ],
    },
    {
        label: "Women",
        children: [
            {
                label: "Midi Dresses",
                href: "/products-women",
            },
            {
                label: "Sweatshirts & Cardigans",
                href: "/products-women",
            },
            {
                label: "Jumpsuits",
                href: "/products-women",
            },
        ],
    },
    {
        label: "Jeans",
        children: [
            {
                label: "Job Board",
                subLabel: "Find your dream design job",
                href: "#",
            },
            {
                label: "Freelance Projects",
                subLabel: "An exclusive list for contract work",
                href: "#",
            },
        ],
    },
    {
        label: "Sales",
        children: [
            {
                label: "Job Board",
                subLabel: "Find your dream design job",
                href: "#",
            },
            {
                label: "Freelance Projects",
                subLabel: "An exclusive list for contract work",
                href: "#",
            },
        ],
    },
];
