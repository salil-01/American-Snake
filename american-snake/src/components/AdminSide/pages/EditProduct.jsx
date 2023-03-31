import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editProduct } from "../../../redux/admin/action";
const prod = {
  id: 1,
  hreftag:
    "https://www.aeo.in/product/american-eagle-men-blue-micro-dot-button-up-resort-shirt-873382.html",
  image_front:
    "https://imagescdn.aeo.in/img/app/product/8/873382-10412909.jpg?w=312&auto=format",
  image_reverse:
    "https://imagescdn.aeo.in/img/app/product/8/873382-10412910.jpg?w=312&auto=format",
  title: "American Eagle Men Blue Micro Dot Button-Up Resort Shirt",
  price: 2299,
  type: "shirt",
  brand: "Adidas",
  category: "mens",
};
export const EditProduct = () => {
  const [data, setData] = useState("" || prod);
  const toast = useToast();
  const { id } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((store) => {
    return store.AdminReducer;
  });
  console.log(productData);
  const handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
    const updatedData = {
      ...data,
      price: +data.price,
    };
    // console.log(updatedData);
    setData(updatedData);
    dispatch(editProduct(updatedData, id)).then(() => {
      toast({
        position: "top",
        title: `Product Edited Successfully`,
        status: "success",
        isClosable: true,
      });
    });
  };
  useEffect(() => {
    const getSingleProduct = (val) => {
      axios
        .get(`https://american-eagle-mock-server.onrender.com/men/${id}`)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
       getSingleProduct(id)
  }, []);
  return (
    <>
      <Box
        padding={10}
        margin={"auto"}
        mt="10px"
        bg="white"
        borderRadius={"5px"}
        boxShadow={"2xl"}
        width={{ base: "95vw", md: "95vw", lg: "40vw" }}
      >
        <Heading as={"h3"} textAlign={"center"} fontSize={"1.0rem"} mb={"40px"}>
          Please Enter New Details to Edit Product
        </Heading>
        <form>
          <FormControl isRequired>
            <FormLabel>Product Title</FormLabel>
            <Input
              placeholder="Please Enter Product Title"
              name="title"
              onChange={handleChange}
              value={data.title}
            />
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Product Image I</FormLabel>
            <Input
              value={data.image_front}
              placeholder="Please Enter URL for Ist Image"
              name="image_front"
              onChange={handleChange}
              //
            />
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Product Image II</FormLabel>
            <Input
              placeholder="Please Enter URL for IInd Image"
              name="image_reverse"
              onChange={handleChange}
              value={data.image_reverse}
            />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>Product Price</FormLabel>
            <Input
              placeholder="Please Enter Price"
              name="price"
              onChange={handleChange}
              value={data.price}
              type="number"
            />
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Gender</FormLabel>
            <Select
              name="category"
              placeholder="Select Gender"
              onChange={handleChange}
              value={data.category}
            >
              <option value="mens">Men</option>
              <option value="women">Women</option>
            </Select>
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Category</FormLabel>
            <Select
              name="type"
              placeholder="Select Category"
              value={data.type}
              onChange={handleChange}
            >
              <option value="tshirt">T Shirt</option>
              <option value="shirt">Shirt</option>
              <option value="shorts">Shorts</option>
              <option value="jeans">Jeans</option>
              <option value="dress">Women Dress</option>
            </Select>
          </FormControl>
          <Stack spacing={10} mt={"30px"} pt={2}>
            {productData.isLoading ? (
              <Button
                variant="outline"
                border={"1px solid #43A047"}
                isLoading
                loadingText="Editing Product"
                size="lg"
                bg={"#1d2b4f"}
                color={"white"}
                borderRadius="5px"
                _hover={{
                  bg: "#43A047)",
                  color: "white",
                }}
              >
                Edit Product
              </Button>
            ) : (
              <Button
                variant="outline"
                rightIcon={<EditIcon />}
                onClick={handleSubmit}
                size="lg"
                border={"1px solid #43A047"}
                color={"#43A047"}
                borderRadius="5px"
                _hover={{
                  bg: "#43A047",
                  color: "white",
                }}
              >
                Edit Product
              </Button>
            )}
          </Stack>
        </form>
      </Box>
    </>
  );
};
