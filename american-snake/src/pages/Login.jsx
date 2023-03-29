import React from 'react';
import { loginPostDetails } from '../redux/AuthReducer/action';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = () =>{

    
  };

  return (
    <DIV>
      <h2>Log In</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        data-testid="user-email"
        type="email"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        data-testid="user-password"
        type="password"
        placeholder="Password"
      />
      <button onClick={handleSubmitLogin} data-testid="user-login">
        Log In
      </button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
    border: 1px solid black;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
    border: 1px solid black;
  }
`;

export default Login;