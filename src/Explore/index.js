import React from "react";
import styled from "styled-components";
import apparts from "./Apparts2x.png";
import boat from "./Boat2x.png";
import restaurants from "./Restaurants2x.png";
import ExploreCard from "./Card";

const H1 = styled.h1`
  font: 32px/34px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin-top: 48px;
  margin-bottom: 24px;
`;

export default function() {
  return (
    <div className="Section">
      <H1>Explore Airbnb</H1>
      <div className="row">
        <div className="col-4">
          <ExploreCard name="Homes" to="" img={apparts} />
        </div>
        <div className="col-4">
          <ExploreCard name="Experiences" to="" img={boat} />
        </div>
        <div className="col-4">
          <ExploreCard name="Restaurants" to="" img={restaurants} />
        </div>
      </div>
    </div>
  );
}