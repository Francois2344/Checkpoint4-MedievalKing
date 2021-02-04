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


const Inscription = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const nameRegister = (event) => {
    setUsername(event.target.value);
  };

  const passwordRegister = (event) => {
    setPassword(event.target.value);
  };

  const emailRegister = (event) => {
    setEmail(event.target.value);
  };

  const birthdayRegister = (event) => {
    setBirthday(event.target.value);
  };

  return (
    <DIV className="register">
      <form>
        <h2>Inscription</h2>
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
        <label>E-mail</label>
        <input
          type="email"
          value={email}
          className="input email"
          placeholder="E-mail"
          onChange={emailRegister}
        />
        <label>Birthday</label>
        <input
          type="date"
          value={birthday}
          className="input password"
          placeholder="Nom"
          onChange={birthdayRegister}
        />
        <button type="submit">
          S'inscrire
        </button>
      </form>
    </DIV>
  );
};

export default Inscription;
