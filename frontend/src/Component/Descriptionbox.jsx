import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyle";

const Descriptionstyle = styled.div`
  .left-div {
    width: 40%;
    margin-top: 100px;
    margin-left: 80px;
  }
  #text-div{
    width: 250px;
  }
`;

function Descriptionbox() {
  return (
    <>
      <Descriptionstyle>
        <GlobalStyle />
        <conatiner className="container">
          <div className="left-div">
            <div id="text-div">
            <h1>Manage Rooms Hastle-Free</h1>
            </div>
            <div id="p-div">
            <p>
              A streamlined PG booking website offering seamless searches,
              detailed listings, secure reservations, and easy management for
              tenants and landlords.
            </p>
            </div>
          </div>

          <div className="right-div">
            <img src="" alt="" />
          </div>
        </conatiner>
      </Descriptionstyle>
    </>
  );
}

export default Descriptionbox;
