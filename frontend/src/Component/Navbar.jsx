import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyle";

const Div = styled.div`
  nav {
    display: flex;
    align-items: center;
    position: sticky;
    width: 100%;
    height: 70px;
    margin-bottom: 0%;
    background-color: aliceblue;
    box-shadow: 0 2px 4px -1px rgba(29, 29, 30, 0.25);
  }
  .left-div {
    width: 40%;
    display: flex;
    justify-content: left;
    text-align: center;
    align-items: center;
    color: var(primary-text-color) ;
    img{
      margin: 20px;
        width: 30px;
        height: 30px;
    }
  }
  .right-div {
    width: 65%;
    ul {
      display: flex;
      justify-content: end;
      align-items: end;
      list-style: none;
      padding: 0;

      li {
        justify-content: end;
        margin: 0 10px;
      }

      a {
        font-weight: bold;
        font-size: 1rem;
        color: var(--primary-text-color);
      }
      .signup-button{
        border:0.8px solid var(--primary-text-color);
        border-radius: 5px;
        padding: 8px;
        background-color: #bedeef;
      }
      .login-button{
        border:0.8px solid var(--primary-text-color);
        border-radius: 5px;
        padding: 8px;
        background-color: #034364;
        color: #f5f3f0;
      }
    }
  }
`;

function Navbar() {
  return (
    <>
    <GlobalStyle/>
    <Div>
      
      <nav>
        <div className="left-div">
          <img src="src/assets/images/favicon.png" alt="" />
          <h1>PG-manage</h1>
        </div>
        <div className="right-div">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li >
              <a className="signup-button"  href="#">Sign up</a>
            </li>
            <li>
              <a className="login-button" href="#">Log in</a>
            </li>
          </ul>
        </div>
      </nav>
    </Div>
    </>
  );
}
export default Navbar;
