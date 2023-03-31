import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
  Select,
  ModalBody,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  useToast,
  FormControl,
  FormLabel,
  Tooltip,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import styles from "./Bag.css";
import React, { useState } from "react";
import { BsTag } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { Checkbox } from "@chakra-ui/react";
import { TbTruckDelivery } from "react-icons/tb";
import { useDispatch } from "react-redux";
import CardDetail from "../components/Bag/Payment";

const initialData = {
  name: "",
  mobile: "",
  pincode: "",
  city: "",
  state: "",
};
export const Bag = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialData);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  // const navigate = useNavigate();

  // const data = useSelector((store) => {
  //   return store.cartReducer.cart;
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // // delete logic ***************************

  // const handledelet = (el) => {
  //   const filterdata = data.filter((t) => t.id != el.id);

  //   dispatch(addToCart(id, filterdata));
  // };
  // login of cart ********************************
  // let value = 0;
  // let offerValue = 0;
  // data.map((el) => {
  //   offerValue += Number(el.offerPrice) * el.qtt;
  //   return (value = value + Number(el.originalPrice) * el.qtt);
  // });
  // const finalAmount = offerValue;
  // offerValue = value - offerValue;

  return (
    <div>
      {/* <Navbar /> */}
      <Center w={"100%"}>
        <Grid className="cart_grid" m="5" gap={4}>
          <GridItem width={"100%"}>
            <Flex
              style={{
                padding: "15px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
              justifyContent={"space-around"}
            >
              <Box>
                <Center>
                  <Text as={"h3"} fontWeight={"bold"}>
                    Delivery Address Details
                  </Text>
                </Center>
                {formData.name ? (
                  <p style={{ textAlign: "left" }}>
                    {" "}
                    {`Name : ${formData.name}`}
                  </p>
                ) : (
                  ""
                )}
                {formData.mobile ? (
                  <p style={{ textAlign: "left" }}>
                    {" "}
                    {`Mobile : ${formData.mobile}`}
                  </p>
                ) : (
                  ""
                )}
                {formData.pincode ? (
                  <p style={{ textAlign: "left" }}>
                    {" "}
                    {`Pincode : ${formData.pincode}`}
                  </p>
                ) : (
                  ""
                )}
                {formData.city ? (
                  <p style={{ textAlign: "left" }}>
                    {" "}
                    {`City : ${formData.city}`}
                  </p>
                ) : (
                  ""
                )}
                {formData.location ? (
                  <p style={{ textAlign: "left" }}>
                    {" "}
                    {`Location : ${formData.location}`}
                  </p>
                ) : (
                  ""
                )}
              </Box>

              <Button
                onClick={onOpen}
                fontSize="1rem"
                ml={"3%"}
                width={{ base: "50%", sm: "50%", md: "25%" }}
                borderRadius={"5px"}
                border={"1px solid #1d2b4f"}
                colorScheme="white"
                color={"#1d2b4f"}
                w={"auto"}
                h={"35px"}
                _hover={{
                  color: "white",
                  backgroundColor: "#1d2b4f",
                }}
              >
                Change Address
              </Button>

              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Change Delivey Address</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box>
                      <FormControl>
                        <Box>
                          <Tooltip
                            hasArrow
                            label="enter valid name"
                            placement="top"
                            bg="#ff7043"
                          >
                            <Input
                              mt={1}
                              type={"text"}
                              isRequired
                              name="name"
                              placeholder="Full Name*"
                              variant="flushed"
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </Tooltip>
                        </Box>

                        <Box mt={5}>
                          <FormLabel>Mobile</FormLabel>
                          <Tooltip
                            hasArrow
                            label="enter valid mobile no."
                            placement="top"
                            bg="#ff7043"
                          >
                            <Input
                              type="number"
                              name="mobile"
                              placeholder="+91-Mobile Number"
                              variant="flushed"
                              maxLength="10"
                              onChange={handleChange}
                              value={formData.mobile}
                            />
                          </Tooltip>
                        </Box>

                        <Box display="flex" mt={2}>
                          <Box>
                            <Tooltip
                              hasArrow
                              label="enter valid pincode"
                              placement="top"
                              bg="#ff7043"
                            >
                              <Input
                                mt={5}
                                type="number"
                                name="pincode"
                                maxLength="6"
                                placeholder="Pincode*"
                                variant="flushed"
                                value={formData.pincode}
                                onChange={handleChange}
                              />
                            </Tooltip>
                          </Box>
                          <Box pl={4}>
                            <Tooltip
                              hasArrow
                              label="enter valid name"
                              placement="top"
                              bg="#ff7043"
                            >
                              <Input
                                mt={5}
                                type={"text"}
                                name="city"
                                placeholder="City*"
                                variant="flushed"
                                onChange={handleChange}
                                value={formData.city}
                              />
                            </Tooltip>
                          </Box>
                        </Box>
                        <Box>
                          <Tooltip
                            hasArrow
                            label="enter valid state"
                            placement="top"
                            bg="#ff7043"
                          >
                            <Input
                              mt={5}
                              type={"text"}
                              name="state"
                              placeholder="State*"
                              variant="flushed"
                              onChange={handleChange}
                              value={formData.state}
                            />
                          </Tooltip>
                        </Box>
                        <Box>
                          <Select
                            mt={5}
                            name="location"
                            onChange={handleChange}
                            placeholder="Select Location"
                          >
                            <option value="home">Home</option>
                            <option value="office">Office</option>
                          </Select>
                        </Box>

                        {formData.name.length === 0 ||
                        formData.mobile.length === 0 ||
                        formData.pincode.length === 0 ||
                        formData.city.length === 0 ||
                        formData.state.length === 0 ? (
                          <Box
                            fontSize={"0.7rem"}
                            color={"red"}
                            textAlign={"left"}
                          >
                            *Fill All the Details correctly
                          </Box>
                        ) : null}
                      </FormControl>
                    </Box>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      width={"full"}
                      backgroundColor={"#1d2b4f"}
                      color={"white"}
                      mr={3}
                      onClick={(e) => {
                        onClose();
                        e.preventDefault();
                        console.log(formData);
                      }}
                    >
                      ADD ADDRESS
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
            <div
              style={{
                marginTop: "10px",
                padding: "15px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            >
              <Flex gap={3}>
                {" "}
                <CiPercent />
                <h1 style={{ fontSize: "14px" }}>Avilable Offers</h1>
              </Flex>
              <div>
                <li style={{ fontSize: "14px", textAlign: "left" }}>
                  10% Instant Discount on YES Bank Credit Cards on a min spend
                  of Rs 3,000. TCA
                </li>
                <li style={{ fontSize: "14px", textAlign: "left" }}>
                  Get up to Rs 500 Cashback on CRED Pay UPI (Android Devices
                  only) on a min spend of Rs 500. TCA
                </li>
                <li style={{ fontSize: "14px", textAlign: "left" }}>
                  Get up to Rs 500 Cashback on CRED Pay UPI (Android Devices
                  only) on a min spend of Rs 500. TCA
                </li>
                <li style={{ fontSize: "14px", textAlign: "left" }}>
                  5% Cashback up to Rs 1000 on Paytm Postpaid Transactions on a
                  min spend of Rs 1,500. TCA
                </li>
                <li style={{ fontSize: "14px", textAlign: "left" }}>
                  5% Unlimited Cashback on -
                  <strong>MasterCard Axis Bank Credit Card.</strong>
                  TCA
                </li>
              </div>
            </div>
            <div
              style={{
                marginTop: "10px",
                padding: "15px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            >
              <Flex>
                <TbTruckDelivery />
                <p style={{ fontSize: "12px" }}>
                  Yeh ! No Convinience fee for this Order
                </p>
              </Flex>
            </div>
            <Grid gap={2} mt={"10px"}>
              {/* {data.map((el) => {
                  return (
                    <Flex
                      key={el.id}
                      justifyContent={"space-between"}
                      boxShadow={
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                      }
                      padding={2}
                    >
                      <Flex gap={2}>
                        <Image h={"100px"} src={el.images[0]} />
  
                        <Box>
                          <Text>{el.brand}</Text>
                          <p style={{ fontSize: "12px" }}>{el.title}</p>
                          <Flex gap={2}>
                            <Select
                              w={"80px"}
                              style={{ fontSize: "12px" }}
                              h={"20px"}
                              borderRadius={"0%"}
                              placeholder="size"
                            >
                              {el.size.map((el) => {
                                return <option value={el}>{el}</option>;
                              })}
                            </Select>
                            <Select
                              w={"80px"}
                              h={"20px"}
                              style={{ fontSize: "12px" }}
                              onChange={(e) =>
                                handleChangeQtt(el.id, +e.target.value)
                              }
                              borderRadius={"0%"}
                              placeholder="Quantity"
                            >
                              {cartQuantity.map((el) => {
                                return <option value={el}>{el}</option>;
                              })}
                            </Select>
                          </Flex>
                          <Flex py="0.4rem">
                            <Text fontSize={"0.9rem"} pr={"0.5rem"}>
                              ₹{el.offerPrice}
                            </Text>
                            <Text
                              textDecoration={"line-through"}
                              fontSize={"0.9rem"}
                              color="gray.400"
                            >
                              ₹{el.originalPrice}
                            </Text>
                          </Flex>
  
                          <Flex>
                            <MdMoreTime />{" "}
                            <p style={{ fontSize: "10px" }}>
                              {" "}
                              14 Days return Avilalble
                            </p>
                          </Flex>
                        </Box>
                      </Flex>
                      <Button
                        backgroundColor={"#ffffff"}
                        onClick={() => handledelet(el)}
                      >
                        x
                      </Button>
                    </Flex>
                  );
                })} */}
            </Grid>
          </GridItem>
          <GridItem width={"100%"}>
            <div
              style={{
                padding: "15px",
                display: "flex",
                gap: "2%",
                boxShadow: " rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
              }}
            >
              <p>Coupons</p>
              <div>
                <BsTag />
              </div>
              <div>
                <h1 style={{ fontSize: "10px" }}>1 Coupon Applied</h1>
                <p style={{ fontSize: "10px" }}>You save Addiotiona 200</p>
              </div>
              <div>
                <Button
                  style={{ fontSize: "12px" }}
                  borderRadius={"0%"}
                  border={"1px solid #ef506a"}
                  colorScheme="white"
                  color={"#ef506a"}
                  w={"80px"}
                  h={"35px"}
                >
                  Edit
                </Button>
              </div>
            </div>
            <div style={{ paddingTop: "10px" }}>
              <p style={{ fontSize: "10px", padding: "2px" }}>
                GIFTING AND PERSONILAZATION
              </p>
              {/* <img src={gift} alt="ytyr" height={"150px"} /> */}
            </div>
            <Checkbox mt={2} defaultChecked>
              Support Us
            </Checkbox>
            <Flex mt={2} gap={2}>
              <Button
                borderRadius={"100px"}
                fontSize={"12px"}
                variant="outline"
              >
                {" "}
                Rs 10{" "}
              </Button>
              <Button
                borderRadius={"100px"}
                fontSize={"12px"}
                variant="outline"
              >
                {" "}
                Rs 20{" "}
              </Button>
              <Button
                borderRadius={"100px"}
                fontSize={"12px"}
                variant="outline"
              >
                {" "}
                Rs 30{" "}
              </Button>
              <Button
                borderRadius={"100px"}
                fontSize={"12px"}
                variant="outline"
              >
                {" "}
                other{" "}
              </Button>
            </Flex>

            <Box padding={15}>
              <hr style={{ padding: "10px", marginRight: "100px" }} />
              <h1 style={{ fontSize: "12px", fontWeight: "bold" }}>
                {/* Price Details ({data.length}-items) */}
              </h1>
              <Flex justifyContent={"space-between"} mt={2}>
                <p style={{ fontSize: "12px" }}>ToTal MRP</p>
                <p
                  style={{
                    fontSize: "12px",
                    padding: "10px",
                    marginLeft: "150px",
                  }}
                >
                  {/* Rs. {value} */}
                </p>
                <hr />
              </Flex>
              <hr style={{ marginRight: "100px" }} />
              <Flex justifyContent={"space-between"} mt={2}>
                <p style={{ fontSize: "12px" }}>Discount on MRP</p>
                <p
                  style={{
                    fontSize: "12px",
                    padding: "10px",
                    marginLeft: "120px",
                  }}
                >
                  {/* Rs. {offerValue} */}
                </p>
                <hr />
              </Flex>
              <hr style={{ marginRight: "100px" }} />
              <Flex justifyContent={"space-between"} mt={2}>
                <p style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Total Ammount
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    padding: "10px",
                    marginLeft: "120px",
                    fontWeight: "bold",
                  }}
                >
                  {/* Rs. {finalAmount} */}
                </p>
                <hr />
              </Flex>

              <CardDetail />
            </Box>
          </GridItem>
        </Grid>
      </Center>
      {/* <Footer /> */}
    </div>
  );
};
