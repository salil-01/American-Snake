import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Center,
  Image,
  useToast,
  HStack,
} from "@chakra-ui/react";
import { useState, useReducer } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/action";
import Signup from "./Signup";
import Navbar from "../components/Homepage/Navbar";
import Footer from "../components/Homepage/Footer";
import axios from "axios";
import logo from "../Assets/americanSnake.png";
// import TopNavBar from "../components/Navbar/TopNavabr";
// import Signup from "./SignUp";

function validateData(data, { email, password }) {
  let c = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].email == email && data[i].password == password) {
      // console.log("successfully logged in")
      c=1;
    }
  }
  if(c==1){
    return true;
  } else{
    return false;
  }
}
const initialState = {
  email: "",
  password: "",
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
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
export const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const {email,password} = state;
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location)
  const dispatcher = useDispatch();
  const authData = useSelector((store) => {
    return store.AuthReducer.isAdminAuth;
  });
  console.log(authData);

  //handling submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password)
    setIsLoading(true);
    axios
      .get("https://american-eagle-mock-server.onrender.com/user")
      .then((res) => {
        console.log(res)
        if (validateData(res.data, state)) {
          // login();
          // console.log(isAuth)
          dispatcher(login);
          toast({
            position: "top",
            title: `Login Successfull`,
            status: "success",
            isClosable: true,
          });
          if (location.state) {
            navigate(location.state, {
              replace: true,
            });
          } else {
            navigate("/");
          }
        } else {
          toast({
            position: "top",
            title: `Wrong Credentials`,
            status: "error",
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast({
          position: "top",
          title: `Wrong Credentials`,
          status: "error",
          isClosable: true,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const style = {
    height: "30px",
    marginBottom: "20px",
    borderColor: "rgb(255,112,67)",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderWidth: "1.5px",
    borderRadius: "0px",
  };
  return (
    <>
      <Navbar />
      <Flex
        // height={"80vh"}
        align={"center"}
        justify={"center"}
        bg={"rgb(239,238,241)"}
        paddingTop={"50px"}
        paddingBottom={"50px"}
        // border={"1px solid"}
      >
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
          boxShadow={"2xl"}
          bg={"white"}
          borderRadius={"8px"}
          width={{ sm: "80%", md: "80%", lg: "100%" }}
          marginTop={"20px"}
        >
          <Image  
            cursor={"pointer"}
            src={logo}
            width={{ sm: "60%", md: "60%", lg: "70%" }}
            // width="100px"
            // height="100px"
            margin="auto"
            onClick={() => navigate("/")}
          />
          <Center>
            <Text fontSize={"1.2rem"} fontWeight={"bold"}>
              Login Here
            </Text>
          </Center>

          <Box
            rounded={"lg"}
            bg={useColorModeValue("white")}
            p={6}
            margin={"auto"}
          >
            <Stack
              spacing={2}
              width={{ sm: "80%", md: "80%", lg: "330px" }}
              margin={"auto"}
            >
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  isRequired
                  value={state.email}
                  onChange={(e) =>
                    dispatch({ type: "email", payload: e.target.value })
                  }
                  focusBorderColor="white"
                  style={style}
                  type="email"
                  placeholder="Enter your email address"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    isRequired
                    value={state.password}
                    onChange={(e) =>
                      dispatch({ type: "password", payload: e.target.value })
                    }
                    focusBorderColor="white"
                    style={style}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
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
              </FormControl>
              <Stack spacing={10} pt={2}>
                {isLoading ? (
                  <Button
                    isLoading
                    loadingText="Logging In"
                    size="lg"
                    bg={"#1D2B4F"}
                    color={"white"}
                    borderRadius="5px"
                    _hover={{
                      bg: "#1D2B4F",
                    }}
                  >
                    Login
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
                  >
                    Login
                  </Button>
                )}
              </Stack>

              <HStack spacing={["0", "0", "-1", "-3", "-3"]} pt={"4"}>
                <Text
                  as={"span"}
                  align={"center"}
                  marginLeft={["10px", "10px", "11px", "15px", "50px"]}
                >
                  New to American-Snake?
                </Text>
                <Box>
                  <Signup />
                </Box>
              </HStack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
};
