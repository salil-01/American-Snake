import { Box, Heading, Image } from "@chakra-ui/react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Navbar from "./Navbar";

import bannarImg1 from "../../Assets/AmericanEagle_Images/bannars/bannarImg1.png";
import bannarImg2 from "../../Assets/AmericanEagle_Images/bannars/bannarImg2.png";
import bannarImg3 from "../../Assets/AmericanEagle_Images/bannars/bannarImg3.png";
import bannarImg4 from "../../Assets/AmericanEagle_Images/bannars/bannarImg4.png";
import { ProductCarousel } from "./ProductCarousel";

export const Homepage = () => {
    return (
        <div >
            <Navbar />
            <Carousel />
            <Box width={"100%"}><Image src={bannarImg1} width={"100%"} /></Box>
            <Box width={"100%"}>
            <Image  src={bannarImg2}width={"100%"} />
            </Box>
            <Box width={"100%"}>
            <Image src={bannarImg3} width={"100%"} />
            </Box>
            <Box>
                <Heading margin={"50px 0"} fontSize={"40px"} fontWeight={"700"}>
                    Best seller of the Week
                </Heading>
            </Box>
            <Box width={"100%"} margin={"30px auto"} padding={"2px 12px"}>
                <ProductCarousel />
            </Box>
            <Box width={"100%"}>
            <Image src={bannarImg4} width={"100%"} />
            </Box>
            <Footer />
        </div>
    );
};
