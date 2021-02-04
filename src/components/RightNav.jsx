import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Slideburger = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 19;

  li {
    padding: 18px 10px;
    background-color: #A21717;
    color: #f5f5f5;
    padding: 20px;
  }

  a {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #A21717;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 40vh;
    width: 300px;
    padding-top: 5.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: black;
      text-align: center;
      border-bottom: 2px solid;
    }
    a {
      color: #ffffff;
    }
  } ;
`;

// eslint-disable-next-line react/prop-types
const RightNav = ({ open }) => {
  return (
    <Slideburger open={open}>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/inscription">Inscription</Link>
      </li>
      <li>
        <Link to="/Profile">Profile</Link>
      </li>
      <li>
        <Link to="/Profile">Connexion</Link>
      </li>
    </Slideburger>
  );
};

export default RightNav;