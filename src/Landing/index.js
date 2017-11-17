import React, { Component } from "react";
import styled from "styled-components";

import Header from "../Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import Footer from "./Footer";

const Main = styled.main`
  padding-top: 80px;
  @media only screen and (min-width: 768px) {
    padding-top: 88px;
  }
`;

export default () => (
  <div>
    <Header />
    <Main>
      <div className="container">
        <Explore />
        <Experiences />
        <Homes />
        <Reservations />
        <Destinations />
      </div>
    </Main>
    <Footer />
  </div>
);
