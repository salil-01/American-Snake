import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";

export const ProductCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Box ml={"30px"}>
      <Carousel responsive={responsive}>
        <Box w={"212px"}>
          <Stack direction={"column"} spacing={3}>
            <Image src="https://imagescdn.aeo.in/img/app/product/2/285571-1205992.jpg?w=317&auto=format" />
            <Text fontSize={"14px"} fontWeight={"600"} textAlign="left">
              American Eagle Women Blue Ne(X)T Level High Waisted Jegging
            </Text>
            <HStack>
              <Text textDecoration={"line-through"} fontSize={"12px"}>
                Rs. 3,999
              </Text>
              <Text fontSize={"12px"} color={"red"}>
                Rs. 1,599
              </Text>
            </HStack>
          </Stack>
        </Box>
        <Box w={"212px"}>
          <Stack direction={"column"} spacing={3}>
            <Image src="https://imagescdn.aeo.in/img/app/product/6/621284-5980727.jpg?w=317&auto=format" />
            <Text fontSize={"14px"} fontWeight={"600"} textAlign="left">
              American Eagle Men Blue Airflex+ Original Bootcut Jean
            </Text>
            <HStack>
              <Text textDecoration={"line-through"} fontSize={"12px"}>
                Rs. 3,999
              </Text>
              <Text fontSize={"12px"} color={"red"}>
                Rs. 1,599
              </Text>
            </HStack>
          </Stack>
        </Box>
        <Box w={"212px"}>
          <Stack direction={"column"} spacing={3}>
            <Image src="https://imagescdn.aeo.in/img/app/product/6/685126-7256368.jpg?w=317&auto=format" />
            <Text fontSize={"14px"} fontWeight={"600"} textAlign="left">
              American Eagle Women White Stretch Super High-Waisted Flare Jean
            </Text>
            <HStack>
              <Text textDecoration={"line-through"} fontSize={"12px"}>
                Rs. 4,499
              </Text>
              <Text fontSize={"12px"} color={"red"}>
                Rs. 2,699
              </Text>
            </HStack>
          </Stack>
        </Box>
        <Box w={"212px"}>
          <Stack direction={"column"} spacing={3}>
            <Image src="https://imagescdn.aeo.in/img/app/product/6/688551-7320455.jpg?w=317&auto=format" />
            <Text fontSize={"14px"} fontWeight={"600"} textAlign="left">
              American Eagle Women Purple Baby Tee
            </Text>
            <HStack>
              <Text textDecoration={"line-through"} fontSize={"12px"}>
                Rs. 1,299
              </Text>
              <Text fontSize={"12px"} color={"red"}>
                Rs. 519
              </Text>
            </HStack>
          </Stack>
        </Box>
        <Box w={"212px"}>
          <Stack direction={"column"} spacing={3}>
            <Image src="https://imagescdn.aeo.in/img/app/product/6/688749-7324716.jpg?w=317&auto=format" />
            <Text fontSize={"14px"} fontWeight={"600"} textAlign="left">
              American Eagle Women White Cropped Denim Jacket
            </Text>
            <HStack>
              <Text textDecoration={"line-through"} fontSize={"12px"}>
                Rs. 4,999
              </Text>
              <Text fontSize={"12px"} color={"red"}>
                Rs. 2,999
              </Text>
            </HStack>
          </Stack>
        </Box>
        <Box w={"212px"}>
          <Stack direction={"column"} spacing={3}>
            <Image src="https://imagescdn.aeo.in/img/app/product/6/689709-7333291.jpg?w=317&auto=format" />
            <Text fontSize={"14px"} fontWeight={"600"} textAlign="left">
              American Eagle Women Purple Floral Cinch-Front Mini Dress
            </Text>
            <HStack>
              <Text textDecoration={"line-through"} fontSize={"12px"}>
                Rs. 2,999
              </Text>
              <Text fontSize={"12px"} color={"red"}>
                Rs. 1,499
              </Text>
            </HStack>
          </Stack>
        </Box>
        <Box w={"212px"}>
          <Stack direction={"column"} spacing={3}>
            <Image src="https://imagescdn.aeo.in/img/app/product/2/285571-1205992.jpg?w=317&auto=format" />
            <Text fontSize={"14px"} fontWeight={"600"} textAlign="left">
              American Eagle Women Blue Ne(X)T Level High Waisted Jegging
            </Text>
            <HStack>
              <Text textDecoration={"line-through"} fontSize={"12px"}>
                Rs. 3,999
              </Text>
              <Text fontSize={"12px"} color={"red"}>
                Rs. 1,599
              </Text>
            </HStack>
          </Stack>
        </Box>
        <Box w={"212px"}>
          <Stack direction={"column"} spacing={3}>
            <Image src="https://imagescdn.aeo.in/img/app/product/5/554767-4564167.jpg?w=317&auto=format" />
            <Text fontSize={"14px"} fontWeight={"600"} textAlign="left">
              American Eagle Women Blue Ne(X)T Level High Waisted Jegging
            </Text>
            <HStack>
              <Text textDecoration={"line-through"} fontSize={"12px"}>
                Rs. 3,999
              </Text>
              <Text fontSize={"12px"} color={"red"}>
                Rs. 1,599
              </Text>
            </HStack>
          </Stack>
        </Box>
        <Box w={"212px"}>
          <Stack direction={"column"} spacing={3}>
            <Image src="https://imagescdn.aeo.in/img/app/product/8/861308-10410862.jpg?w=203&auto=format,compress" />
            <Text fontSize={"14px"} fontWeight={"600"} textAlign="left">
              American Eagle Women Blue Ne(X)T Level High Waisted Jegging
            </Text>
            <HStack>
              <Text textDecoration={"line-through"} fontSize={"12px"}>
                Rs. 3,999
              </Text>
              <Text fontSize={"12px"} color={"red"}>
                Rs. 1,599
              </Text>
            </HStack>
          </Stack>
        </Box>
        <Box w={"212px"}>
          <Stack direction={"column"} spacing={3}>
            <Image src="https://imagescdn.aeo.in/img/app/product/8/861385-10177709.jpg?w=203&auto=format,compress" />
            <Text fontSize={"14px"} fontWeight={"600"} textAlign="left">
              American Eagle Women Blue Ne(X)T Level High Waisted Jegging
            </Text>
            <HStack>
              <Text textDecoration={"line-through"} fontSize={"12px"}>
                Rs. 3,999
              </Text>
              <Text fontSize={"12px"} color={"red"}>
                Rs. 1,599
              </Text>
            </HStack>
          </Stack>
        </Box>
        <Box w={"212px"}>
          <Stack direction={"column"} spacing={3}>
            <Image src="https://imagescdn.aeo.in/img/app/product/8/861324-10410871.jpg?w=203&auto=format,compress" />
            <Text fontSize={"14px"} fontWeight={"600"} textAlign="left">
              American Eagle Women Blue Ne(X)T Level High Waisted Jegging
            </Text>
            <HStack>
              <Text textDecoration={"line-through"} fontSize={"12px"}>
                Rs. 3,999
              </Text>
              <Text fontSize={"12px"} color={"red"}>
                Rs. 1,599
              </Text>
            </HStack>
          </Stack>
        </Box>
      </Carousel>
    </Box>
  );
};
