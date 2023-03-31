import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const SingleProdCard = ({ id, title, type, image_front, price,brand }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/SingleProduct/${id}`);
  };
  return (
    <Box onClick={handleClick}>
      <Box p="5">
        <Image
          src={image_front}
          alt={"img"}
          boxShadow="xs"
          p="1"
          rounded="md"
          bg="white"
        />       
        <br />
        <Text color={"grey"}>{title}</Text>
        <Text color={"black"}>{brand}</Text>
        <br />
        <Text as={"b"}>₹{price}</Text>
      </Box>
    </Box>
  );
};