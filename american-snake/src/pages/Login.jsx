import React from "react";
import styled from "styled-components";
import {
  Flex,
  Stack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "../components/Homepage/Footer";

const Login = () => {
  const [loginUser, setLoginUser] = React.useState({
    email: "",
    password: "",
  });

  const verifyLogin = async (e) => {
    e.preventDefault();
    try {
      let usersData = await fetch(
        `https://american-eagle-mock-server.onrender.com/user`
      );
      let data = await usersData.json();
      for (let i = 0; i <= data.length - 1; i++) {
        if (
          loginUser.email === data[i].email &&
          loginUser.password === data[i].password
        ) {
          alert(`Welcome Back ${data[i].name}`);
          return;
        }
      }
      alert("Login Error");
    } catch (error) {
      console.log("error ", error);
    }
    setLoginUser({
      email: "",
      password: "",
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      direction="column"
    >
      <Stack align={"center"}>
        <Heading fontSize={"4xl"}>Login to your account</Heading>
      </Stack>
      <DIV>
        <form onSubmit={verifyLogin}>
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
            value= {loginUser.email}
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
            value= {loginUser.password}
          />
          <br />
          <br />
          <button onSubmit="submit">Submit now</button>
        </form>
      </DIV>
      <Footer/>
    </Flex>
  );
};

export default Login;

const DIV = styled.div`
  width: 400px;
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
