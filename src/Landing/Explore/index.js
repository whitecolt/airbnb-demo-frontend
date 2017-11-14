import React from "react";
import styled from "styled-components";
import apparts from "./Apparts2x.png";
import boat from "./Boat2x.png";
import restaurants from "./Restaurants2x.png";
import Card from "./Card";

const H1 = styled.h1`
  font: 24px/28px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin-top: 40px;
  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    margin-top: 48px;
    font-size: 32px;
    line-height: 34px;
    margin-bottom: 24px;
  }
`;

const Section = styled.section``;

const Wrapper = styled.div`
  overflow-x: scroll;

  @media (min-width: 992px) {
    overflow-x: hidden;
  }
`;

export default function() {
  return (
    <Section>
      <H1>Explore Airbnb</H1>
      <Wrapper>
        <div className="row nowrap-xs">
          <div className="col-xs-6 col-sm-4 col-md-5 col-lg-4">
            <Card link="/homes" name="Homes" to="" img={apparts} />
          </div>

          <div className="col-xs-6 col-sm-4 col-md-5 col-lg-4">
            <Card link="/experiences" name="Experiences" to="" img={boat} />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-5 col-lg-4">
            <Card
              link="/restaurants"
              name="Restaurants"
              to=""
              img={restaurants}
            />
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}
