import React, { useState } from "react";
import Navbar from "../components/Homepage/Navbar";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CiPercent } from "react-icons/ci";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Divider,
  Button,
  useDisclosure,
  Flex,
  Input,
  Checkbox,
  VStack,
  Image,
} from "@chakra-ui/react";
import image from "../Assets/logo-desktop.png";
import { useNavigate } from "react-router-dom";

const Cartpage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [price, setprice] = useState(0);
  const navigate = useNavigate();

  const handleProceed = () =>{
    alert("Order Placed Successfully");
    navigate("/")
  }

  return (
    <>
      <Navbar />
      <Flex justifyContent="space-around" padding="40px">
        <Box>
          <Box
            width="950px"
            shadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            height="150px"
            textAlign="left"
            padding="20px"
          >
            <Text fontSize="md" as="b">
              1.YOUR CART
            </Text>
            <br />
            <br />
            <Divider borderColor="black" variant="solid" />
          </Box>
          <br />
          <Box
            width="950px"
            shadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            height="150px"
            textAlign="left"
            padding="20px"
          >
            <Text fontSize="md" as="b">
              2.SHIPPING DETAILS
            </Text>
            <br />
            <br />
            <Divider borderColor="black" variant="solid" />
            <br />
            <Button
              onClick={onOpen}
              border="1px solid black"
              backgroundColor="white"
              width="400px"
            >
              Add New Shipping Details
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>ADD SHIPPING ADDRESS</ModalHeader>
                <Divider borderColor="black" />
                <ModalCloseButton />
                <ModalBody>
                  <VStack spacing={2}>
                    <Flex>
                      <Input placeholder="First Name" />
                      <Input placeholder="Last Name" />
                    </Flex>
                    <Input placeholder="*Pincode" />
                    <Input placeholder="Mobile Number" />
                    <Input placeholder="House/Flat Number" />
                    <Input placeholder="Landmark(Optional)" />
                    <Flex>
                      <Input placeholder="City" />
                      <Input placeholder="State" />
                    </Flex>
                    <Checkbox textAlign="left">Make this my default</Checkbox>
                  </VStack>
                </ModalBody>

                <ModalFooter>
                  <Button
                    color="white"
                    backgroundColor="black"
                    _hover={{
                      background: "blue",
                      color: "white",
                    }}
                    mr={3}
                    onClick={onClose}
                  >
                    Close
                  </Button>
                  <Button
                    color="white"
                    backgroundColor="black"
                    _hover={{
                      background: "blue",
                      color: "white",
                    }}
                    width="200px"
                    onClick={()=> alert("Adress Saved")}
                  >
                    Save Address
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
          <br />
          <Box
            width="950px"
            shadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            height="100px"
            textAlign="left"
            padding="20px"
          >
            <Text fontSize="md" as="b">
              3.PAYMENT OPTIONS
            </Text>
            <br />
            <br />
            <Divider borderColor="black" variant="solid" />
            <br />
            <br />
            <Image src={image} width="60%" cursor={"pointer"} onClick={()=> alert("Payment done Successfully")}/>
          </Box>
        </Box>

        <Box>
          <Box border="1px dashed black" width="400px" padding="10px">
            <Flex justifyContent="space-evenly">
              <CiPercent size={30} />
              <Text>Apply coupon to get the best price -</Text>
            </Flex>
          </Box>
          <br />
          <Box
            border="1px solid white"
            width="400px"
            padding="20px"
            height="300px"
            backgroundColor="#F2F2F2"
          >
            <Text fontSize="2xl" as="b">
              Order Summary
            </Text>
            <br />
            <br />
            <Flex justifyContent="space-between">
              <Text>Order Value</Text>
              <Text>₹{price}</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Shipping</Text>
              <Text color="blue">Free</Text>
            </Flex>
            <br />
            <Divider borderColor="black" />
            <br />
            <Flex justifyContent="space-between">
              <Text as="b">TOTAL</Text>
              <Text as="b">₹{price}</Text>
            </Flex>
            <br />
            <Flex>
              <RiSecurePaymentLine size={30} />
              <Text fontSize="sm" as="b">
                Safe and Secure Payments. Easy returns. 100% Authentic products
              </Text>
            </Flex>
          </Box>
          <br />
          <Button
            width="400px"
            padding="20px"
            color="white"
            backgroundColor="black"
            _hover={{
              background: "blue",
              color: "white",
            }}
            onClick={handleProceed}
          >
            Proceed
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Cartpage;
