import React from 'react';
import styled from 'styled-components';
import Burger from '../components/Burger';

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  border-bottom: 2px solid #f5f5f5;
  display: flex;
  background-color: #A21717;
  justify-content: space-between;
  align-items: center;


  h1 {
    color: white;
    margin-left: 10px;
  }

  .logo {
    display: flex;
    width: 100px;
    height: 95px;
    margin-left: 30px;
  }

  @media (max-width: 765px) {
    .logo {
      display: flex;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
        <h1>Coop List</h1>
      <Burger />
    </Nav>
  );
};

export default Navbar;