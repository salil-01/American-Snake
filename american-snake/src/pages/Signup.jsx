import React from "react";
import styled from "styled-components";
import {
  Flex,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "../components/Homepage/Footer";
import Navbar from "../components/Homepage/Navbar";

const Signup = () => {
  const [loginUser, setLoginUser] = React.useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
  });

  const verfiyform = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://american-eagle-mock-server.onrender.com/user`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(loginUser),
      });
      alert("Signup sucess");
    } catch (error) {
      console.log("error ", error);
    }
  };

  return (
    <div>
      <Navbar/>
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      direction="column"
    >
      <Stack align={"center"}>
        <Heading fontSize={"4xl"}>Register your account</Heading>
      </Stack>
      <DIV>
        <form onSubmit={verfiyform}>
          <p>
            <b>Your Name</b>
          </p>
          <input
            onChange={(e) =>
              setLoginUser({ ...loginUser, name: e.target.value })
            }
            required
            type="text"
            name="name"
            placeholder="Enter your Name"
          />
          <br />
          <br />
          <p>
            <b>Email Address</b>
          </p>
          <input
            onChange={(e) =>
              setLoginUser({ ...loginUser, email: e.target.value })
            }
            required
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <br />
          <br />
          <p>
            <b>Password</b>
          </p>
          <input
            onChange={(e) =>
              setLoginUser({ ...loginUser, password: e.target.value })
            }
            required
            type="password"
            name="password"
            placeholder="Enter your Password"
          />
          <br />
          <br />
          <p>
            <b>Your Phone Number</b>
          </p>
          <input
            onChange={(e) =>
              setLoginUser({ ...loginUser, mobile: e.target.value })
            }
            required
            type="number"
            name="mobile"
            placeholder="Enter your Phone Number"
          />
          <br />
          <br />
          <button>SignUp</button>
        </form>
        <Stack pt={6}>
          <Text align={"center"}>
            Already a user?{" "}
            <Link color={"blue.400"} href="/login">
              Login
            </Link>
          </Text>
        </Stack>
      </DIV>
      <Footer />
    </Flex>
    </div>
  );
};

export default Signup;

const DIV = styled.div`
  width: 450px;
  padding: 30px;
  margin: 40px auto;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  input {
    width: 300px;
    height: 40px;
    font-size: 15px;
    border: 1px solid grey;
    border-radius: 7px;
    padding: 5px;
  }

  button {
    width: 150px;
    height: 40px;
    font-size: large;
    align-items: center;
    border-radius: 7px;
    border: 1px solid white;
    background-color: #cfd8dc;
  }

  button: hover {
    background-color: blue;
  }
`;
