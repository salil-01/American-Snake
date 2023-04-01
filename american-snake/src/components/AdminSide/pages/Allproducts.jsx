import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  Image,
  Spacer,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, getProduct } from "../../../redux/admin/action";

export const AllProducts = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const productsData = useSelector((store) => {
    return store.AdminReducer;
  });
  const handleDelete = (id) => {
    dispatch(deleteProduct(id)).then(() => {
      dispatch(getProduct);
      toast({
        position: "top",
        title: `Product Deleted Successfully`,
        status: "success",
        isClosable: true,
      });
    });
  };
  console.log(productsData);
  useEffect(() => {
    dispatch(getProduct);
  }, []);
  return (
    <Box width={"100%"}>
      <Grid
        gap={5}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
      >
        {productsData.isLoading ? (
          <Spinner size={"xl"} marginLeft={"35vw"} marginTop={"20vh"} />
        ) : (
          productsData?.products?.map((el) => (
            <Card
              key={el.id}
              boxShadow={"md"}
              _hover={{
                "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <CardBody>
                <Image src={el.image_front} width={"100%"} />
                <Flex
                  flexDirection={"column"}
                  mt="6"
                  gap={"10px"}
                  textAlign={"left"}
                >
                  <Text>Id : {el.id}</Text>
                  <Heading as={"h4"} fontWeight={"500"} fontSize={"1.1rem"}>
                    Title : {el.title.substring(0, 30)}...
                  </Heading>
                  <Text color="gray">Brand : {el.brand}</Text>
                  <Text color="gray">
                    Category :{" "}
                    {el.type}
                  </Text>
                  <Text color="gray">
                    Gender :{" "}
                    {el.category==="mens"?"Men":"Women"}
                  </Text>
                  <Text color="gray">MRP : ₹{el.price}</Text>

                  <Flex
                    mt={"10px"}
                    padding={"5px"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    {productsData.isLoading ? (
                      <Button
                        variant="outline"
                        border={"1px solid #F57C00"}
                        isLoading
                        loadingText="Deleting Product"
                        bgColor={"red.500"}
                        margin="auto"
                        alignItems="center"
                        w="100px"
                        padding={"5px"}
                        color={"white"}
                        borderRadius="5px"
                        _hover={{
                          bg: "#EF6C00)",
                        }}
                      >
                        Delete
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        rightIcon={<DeleteIcon />}
                        onClick={() => handleDelete(el.id)}
                        border={"1px solid #F57C00"}
                        color={"#F57C00"}
                        borderRadius="5px"
                        padding={"5px"}
                        w="100px"
                        _hover={{
                          bg: "#EF6C00",
                          color: "white",
                        }}
                      >
                        Delete
                      </Button>
                    )}

                    <Button
                      variant="outline"
                      // rightIcon={<AddIcon />}
                      rightIcon={<EditIcon />}
                      border={"1px solid #43A047"}
                      color={"#43A047"}
                      borderRadius="5px"
                      padding={"5px"}
                      w="100px"
                      _hover={{
                        bg: "#43A047",
                        color: "white",
                      }}
                    >
                      <Link to={`/admin-editproduct/${el.id}`}>Edit</Link>
                    </Button>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          ))
        )}
      </Grid>
    </Box>
  );
};
