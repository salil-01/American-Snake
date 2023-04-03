import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Spinner,
  Box,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const AllUsers = () => {
  const [loading, setLoading] = useState(false);
  const getOrderData = async (url) => {
    return await axios.get(url);
  };
  const deleteOrder = async (url, id) => {
    return await axios.delete(`${url}/${id}`);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      setLoading(true);
      getOrderData("https://american-eagle-mock-server.onrender.com/user")
        .then((e) => {
          console.log(e);
          setData(e.data)
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [data.length]);
  const handleDelete = (id) => {
    console.log(id);
    // setLoading(true);
    // deleteOrder("https://american-eagle-mock-server.onrender.com/user", id)
    //   .then((e) => getOrderData())
    //   .catch((e) => getOrderData())
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  return (
    <Box backgroundColor={"white"}>
      <TableContainer
        margin="auto"
        mt={"60px"}
        // alignItems={"center"}
        //   mr={["30px"]}
      >
        <Table variant="striped" colorScheme={"teal"}>
          <Thead>
            <Tr>
              <Th borderColor={"gray.300"}>
                <Center>S.No</Center>
              </Th>
              <Th borderColor={"gray.300"}>
                <Center>Name</Center>
              </Th>
              <Th borderColor={"gray.300"}>
                <Center>Email</Center>
              </Th>
              <Th borderColor={"gray.300"}>
                <Center>Mobile</Center>
              </Th>
              <Th borderColor={"gray.300"}>
                <Center>Delete</Center>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {loading ? (
              <Spinner marginLeft={"30vw"} size={"xl"} />
            ) : (
              data?.map((element) => (
                <Tr>
                  <Td backgroundColor={"white"}>
                    <Center>{element.id}</Center>
                  </Td>
                  <Td>
                    <Center>{element.name}</Center>
                  </Td>
                  <Td>
                    <Center>{element.email}</Center>
                  </Td>
                  <Td>
                    <Center>{element.mobile}</Center>
                  </Td>
                  <Td>
                    <Center>
                      <Button
                        onClick={() => handleDelete(element.id)}
                        bgColor={"red.500"}
                        _hover={{ bgColor: "red.400" }}
                        color={"whiteAlpha.900"}
                        //   w="70px"
                        margin={"auto"}
                      >
                        Delete
                      </Button>
                    </Center>
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

// export default AllUsers;
