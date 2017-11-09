import React, { Component } from "react";
import Header from "./Header/Header";
import Explore from "./Explore/Explore";
import Experiences from "./Experiences/Experiences";
import Homes from "./Homes/Homes";
import Reservations from "./Reservations/Reservations";
import "./App.css";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <Header />
        <div className="container">
          <Explore />
          <Experiences />
          <Homes />
          <Reservations />
        </div>
      </div>
    );
  }
}

export default App;
