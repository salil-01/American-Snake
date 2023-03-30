import React from "react";
import styled from "styled-components";

const Signup = () => {
  const [loginUser, setLoginUser] = React.useState({
    email: "",
    password: "",
    name: "",
    mobile: ""
  });
  const verfiyform = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://american-eagle-mock-server.onrender.com/user`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(loginUser),
      });
      alert("Signup sucess")
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <DIV>
      <h1>Signup page</h1>
      <form onSubmit={verfiyform}>
        <input
          onChange={(e) => setLoginUser({ ...loginUser, name: e.target.value })}
          required
          type="text"
          name="name"
          placeholder="Enter your Name"
        />
        <br/>
        <br/>
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
        <input
          onChange={(e) =>
            setLoginUser({ ...loginUser, mobile: e.target.value })
          }
          required
          type="number"
          name="mobile"
          placeholder="Enter your Phone Number"
        />
        <br/>
        <br/>
        <button>Submit now</button>
      </form>
    </DIV>
  );
};

export default Signup;

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
