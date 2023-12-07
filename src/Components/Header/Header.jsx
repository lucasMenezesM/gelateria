import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: #f9db79;
  width: 100%;

  .header-container {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1024px;
    margin: 0 auto;
  }

  nav .header-link {
    text-decoration: none;
    font-size: 20px;
    color: black;
    margin: 0 10px;
    transition: all 0.2s;

    &:hover {
      color: white;
      cursor: pointer;
      text-decoration: underline;
    }
  }

  img {
    width: 80px;
  }

  @media screen and (max-width: 425px) {
    .header-container {
      justify-content: center;
    }
    img {
      width: 70px;
      margin: 0 59px;
    }

    nav {
      border-top: 1px solid black;
      padding: 10px 0;
    }

    nav .header-link {
      margin: 0 20px;
      font-size: 18px;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className="header-container">
        <div className="logoBanner">
          <img src="assets/logo.png" alt="logo header"></img>
        </div>

        <nav>
          <NavLink className={"header-link"} to="/gelateria/">
            Home
          </NavLink>
          <NavLink className={"header-link"} to="/gelateria/sabores">
            Sabores
          </NavLink>
          <NavLink className={"header-link"} to="/gelateria/sobre">
            Sobre
          </NavLink>
        </nav>
      </div>
    </StyledHeader>
  );
}

export default Header;
