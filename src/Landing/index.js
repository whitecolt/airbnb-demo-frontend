import React, { Component } from "react";
import styled from "styled-components";

import Header from "../Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import Footer from "./Footer";

export default () => (
  <div>
    <Header />
    <div className="container">
      <Explore />
      <Experiences />
      <Homes />
      <Reservations />
      <Destinations />
    </div>
    <Footer />
  </div>
);
