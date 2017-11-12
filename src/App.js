import React, { Component } from "react";
import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import Footer from "./Footer";
import "./App.css";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
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
  }
}

export default App;
