import React from "react";
import styled from "styled-components";
import "flexboxgrid2";
import ExploreCard from "./ExploreCard";

const H1 = styled.h1`
  font: 32px/34px "CircularAir Bold" "Helvetica Neue" "Helvetica" "Arial",
    sans-serif;
  margin-top: 48px;
`;

class Explore extends React.Component {
  render() {
    return (
      <div className="container">
        <H1>Explore Airbnb</H1>
        <div className="row">
          <div className="col-lg-4">
            <ExploreCard />
          </div>
          <div className="col-lg-4" />
          <div className="col-lg-4" />
        </div>
      </div>
    );
  }
}

export default Explore;
