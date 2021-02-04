import React, { useState } from "react";

import styled from 'styled-components';

const DIV = styled.div`
display: flex;
flex-direction: column;
text-align: center;

h1 {
  color: #A21717;
}
h2 {
  color: #A21717;
}
input {
  width: 300px;
    height: 60px;
    margin: 10px;
    align-self: center;
    border-radius: 5px;
    
}
button {
  
}
`;


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const nameRegister = (event) => {
    setUsername(event.target.value);
  };
  
  const passwordRegister = (event) => {
    setPassword(event.target.value);
  };
  return (
    <DIV className="login">
      <h2>Identifez-vous</h2>
      <form>
        <label>UserName</label>
        <input
          type="text"
          value={username}
          className="input username"
          placeholder="Username"
          onChange={nameRegister}
        />
        <label>Mot de passe</label>
        <input
          type="password"
          value={password}
          id="name"
          className="input password"
          placeholder="Nom"
          onChange={passwordRegister}
        />
      </form>
    </DIV>
  );
};

export default Login;
