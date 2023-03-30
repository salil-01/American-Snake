import React from "react";
import styled from "styled-components";

const Login = () => {
  const [loginUser, setLoginUser] = React.useState({
    email: "",
    password: "",
    name: "",
    mobile: ""
  });
  const verifyLogin = async (e) => {
    e.preventDefault();
    try {
      let usersData = await fetch(`https://american-eagle-mock-server.onrender.com/user`);
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
  };
  return (
    <DIV>
      <h1>Login page</h1>
      <form onSubmit={verifyLogin}>
        <input
          onChange={(e) =>
            setLoginUser({ ...loginUser, email: e.target.value })
          }
          required
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <br/>
        <br/>
        <input
          onChange={(e) =>
            setLoginUser({ ...loginUser, password: e.target.value })
          }
          required
          type="password"
          name="password"
          placeholder="Enter your Password"
        />
        <br/>
        <br/>
        <button onSubmit="submit">Submit now</button>
      </form>
    </DIV>
  );
};

export default Login;

const DIV = styled.div`
width: 400px;
padding: 20px;
margin: 40px auto;
border: 1px solid gray;
align-items: center;

input{
    width: 80%;
    height: 30px;
    font-size: larger;
    border: 1px solid white;
}

button{
    width: 150px;
    height: 50px;
    font-size: large;
    border: 1px solid white;
    background-color: grey;
}

button: hover{
  background-color: blue;
}
`
