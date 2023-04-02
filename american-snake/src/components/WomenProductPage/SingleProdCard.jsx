import { Box, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SingleProdCard = ({
  id,
  title,
  image_reverse,
  image_front,
  price,
  brand,
}) => {
  const navigate = useNavigate();
  // const [over, setOver] = useState(false);
  // console.log(over)
  const handleClick = () => {
    navigate(`/singleproduct-women/${id}`);
  };
  return (
    <Box
      onClick={handleClick}
      _hover={{
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        // border:"1px solid",
        cursor: "pointer",
      }}
    >
      <Box p="5">
        <Box margin={"auto"} width={"80%"}>
          <Image
            //logic for image change on hover
            //  onMouseOver={() => setOver(true)}
            //  onMouseOut={() => setOver(false)}
            // src={over?image_reverse:image_front}
            src={image_front}
            alt={"img"}
            boxShadow="xs"
            p="1"
            rounded="md"
            bg="white"
          />
        </Box>
        <br />
        <Text color={"black"} fontSize={"14px"}>
          {title}
        </Text>
        <Text color={"grey"} fontSize={"14px"} mt={"5px"}>
          {brand}
        </Text>

        <Text as={"b"} fontSize={"14px"}>
          ₹{price}
        </Text>
      </Box>
    </Box>
  );
};
