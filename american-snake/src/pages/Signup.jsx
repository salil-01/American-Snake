import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  VStack,
  Stack,
  Button,
  Text,
  Image,
  useToast,
  Spacer,
  FormHelperText,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import { useReducer, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const initialState = {
  name: "",
  mobile: "",
  email: "",
  password: "",
};
const reducerFn = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "name": {
      return {
        ...state,
        name: payload,
      };
    }
    case "mobile": {
      return {
        ...state,
        mobile: payload,
      };
    }
    case "email": {
      return {
        ...state,
        email: payload,
      };
    }
    case "password": {
      return {
        ...state,
        password: payload,
      };
    }
    case "reset": {
      return initialState;
    }
    default:
      return state;
  }
};

export default function Signup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [isLoading, setisLoading] = useState(false);
  const [formState, dispatch] = useReducer(reducerFn, initialState);
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  //form  validation
  const validatePassword = (password) => {
    let x =
      password.includes("!") ||
      password.includes("@") ||
      password.includes("#") ||
      password.includes("&") ||
      password.includes("$");
    let p = password;
    if (p == "") {
      toast({
        title: `Please Enter a Valid Password`,
        status: "error",
        isClosable: true,
      });
    }
    let y = p.length >= 8;
    if (x && y) {
      return true;
    } else {
      return false;
    }
  };
  const validatename = (name) => {
    return name.length < 1 ? false : true;
  };
  const validateemail = (email) => {
    return email.includes("@") ? true : false;
  };
  const validatemobile = (mobile) => {
    return mobile.length === 10 ? true : false;
  };

  //submit handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formState);
    // dispatch({ type: "reset" });

    const isValidated =
      validatename(formState.name) &&
      validatePassword(formState.password) &&
      validateemail(formState.email) &&
      validatemobile(formState.mobile);
    setisLoading(true);
    if (isValidated) {
      //   let postdata = { name, email, password, mobile };
      let res = await fetch(
        "https://american-eagle-mock-server.onrender.com/user"
      );
      let userdata = await res.json();
      let result = false;
      userdata.forEach((el) => {
        if (el.email == formState.email) {
          result = true;
          return;
        }
      });
      if (result == false) {
        let response = await fetch(
          "https://american-eagle-mock-server.onrender.com/user",
          {
            method: "POST",
            body: JSON.stringify(formState),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        let data = await response.json();
        // console.log(response);
        setisLoading(false);
        toast({
          position: "top",
          title: `Successfully registered`,
          status: "success",
          isClosable: true,
        });
        dispatch({ type: "reset" });
      } else {
        setisLoading(false);
        toast({
          position: "top",
          title: `Email already exists`,
          status: "error",
          isClosable: true,
        });
      }
    } else {
      setisLoading(false);
      toast({
        position: "top",
        title: `Please enter valid credentials`,
        status: "error",
        isClosable: true,
      });
    }
  };
  const style = {
    height: "30px",
    // marginBottom: "10px",
    borderColor: "rgb(255,112,67)",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderRadius: "0",
  };
  return (
    <>
      <Button
        ref={btnRef}
        width="50%"
        variant={"ghost"}
        margin={"auto"}
        _hover={{ textDecoration: "underline" }}
        onClick={onOpen}
      >
        Register
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex height={"100vh"}>
              <VStack margin={"20px auto"}>
                <Image
                  cursor={"pointer"}
                  src="american-eagle.png"
                  borderRadius={"50px"}
                  margin="auto"
                  boxSize={"100%"}
                  onClick={() => navigate("/")}
                />
                <Text fontWeight={"bold"} textAlign={"left"}>
                  Register Here
                </Text>

                <Box
                  rounded={"lg"}
                  padding={"10px"}
                  boxShadow={"2xl"}
                  bg={"white"}
                >
                  <Stack
                    spacing={0}
                    width={{ sm: "350px", md: "300px", lg: "400px" }}
                    padding={"20px"}
                    height={["75vh", "75vh", "70vh"]}
                    marginTop={"25px"}
                  >
                    <HStack margin={"0px 0 30px"}>
                      <Box width="100%" padding={1}>
                        <FormControl isRequired>
                          <FormLabel margin={"-1"}>Full Name</FormLabel>
                          <Input
                            display={"inline-block"}
                            isRequired
                            value={formState.name}
                            onChange={(e) =>
                              dispatch({
                                type: "name",
                                payload: e.target.value,
                              })
                            }
                            focusBorderColor="white"
                            style={style}
                            type="text"
                            placeholder="Enter your full name"
                          />
                        </FormControl>
                      </Box>
                    </HStack>
                    <Box padding={1}>
                      <FormControl isRequired>
                        <FormLabel margin={"-1"}>Mobile Number</FormLabel>
                        <div style={{ display: "flex" }}>
                          <Input
                            float={"left"}
                            width={"70px"}
                            onChange={(e) => (e.target.value = "+91")}
                            focusBorderColor="white"
                            style={style}
                            value={"+91"}
                          ></Input>
                          <Spacer />
                          <Input
                            isRequired
                            value={formState.mobile}
                            onChange={(e) =>
                              dispatch({
                                type: "mobile",
                                payload: e.target.value,
                              })
                            }
                            focusBorderColor="white"
                            style={style}
                            type="number"
                            placeholder="Enter your mobile number"
                            marginBottom={"30px"}
                          />
                        </div>
                      </FormControl>
                    </Box>
                    <FormControl isRequired>
                      <FormLabel margin={"0"}>Email address</FormLabel>
                      <Input
                        display={"inline-block"}
                        isRequired
                        value={formState.email}
                        onChange={(e) =>
                          dispatch({ type: "email", payload: e.target.value })
                        }
                        focusBorderColor="white"
                        style={style}
                        type="email"
                        placeholder="Enter your email address"
                        marginBottom={"30px"}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel margin={0}>Password</FormLabel>
                      <InputGroup>
                        <Input
                          isRequired
                          value={formState.password}
                          onChange={(e) =>
                            dispatch({
                              type: "password",
                              payload: e.target.value,
                            })
                          }
                          focusBorderColor="white"
                          style={style}
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          margin={"0px auto 0px"}
                        />
                        <InputRightElement h={"full"}>
                          <Button
                            marginBottom="15px"
                            variant={"ghost"}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormHelperText
                        fontSize={"0.8rem"}
                        margin={"0"}
                        textAlign={"left"}
                      >
                        Password must be at least 8 characters long with 1
                      </FormHelperText>
                      <FormHelperText
                        fontSize={"0.8rem"}
                        margin={"0px 0px 10px 0px"}
                        textAlign={"left"}
                      >
                        Uppercase, 1 Lowercase & 1 Numeric character.
                      </FormHelperText>
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                      {isLoading ? (
                        <Button
                          isLoading
                          loadingText="Signing up"
                          size="lg"
                          bg={"rgb(255,112,67)"}
                          color={"white"}
                          borderRadius="0px"
                          _hover={{
                            bg: "rgb(255,112,67)",
                          }}
                          margin={"auto"}
                          width={"100%"}
                        >
                          Sign up
                        </Button>
                      ) : (
                        <Button
                          onClick={handleSubmit}
                          size="lg"
                          color={"#1D2B4F"}
                          borderRadius="5px"
                          _hover={{
                            bg: "#1D2B4F",
                            color: "white",
                          }}
                          width={"100%"}
                          margin={"auto"}
                        >
                          Register
                        </Button>
                      )}
                    </Stack>
                    <Stack pt={6}>
                      <Text align={"center"}>
                        Already a user?
                        <Link to="/login">
                          <Text fontWeight={"700"} textDecoration={"underline"}>
                            Login
                          </Text>
                        </Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </VStack>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="outline"
              w="100%"
              mr={3}
              colorScheme="blue"
              color={"red"}
              _hover={{
                color: "white",
                bg: "red",
              }}
              onClick={onClose}
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
