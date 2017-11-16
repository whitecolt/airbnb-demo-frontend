import React from "react";
import styled from "styled-components";

import Card from "./Card";
import miami from "./Miami2x.png";
import tokyo from "./Tokyo2x.png";
import capetown from "./Cape Town2x.png";
import paris from "./Paris2x.png";
import seoul from "./Seoul2x.png";
import la from "./Los Angeles2x.png";
import next from "./next-page.svg";

export const NextContainer = styled.div`position: relative;`;

export const NextCard = styled.button`
  display: none;

  @media only screen and (min-width: 992px) {
    display: block;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    border: none;
    position: absolute;
    right: -20px;
    z-index: 10;
    width: 40px;
    height: 40px;
    background: url(${next}) no-repeat 0 0;
    background-size: contain;
  }
`;

const Next = NextCard.extend`top: 155px;`;

const Section = styled.section`
  margin-top: 48px;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    margin-top: 48px;
    margin-bottom: 64px;
  }
`;

const H2 = styled.h2`
  font: 24px/28px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin-bottom: 16px;

  @media only screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
    margin-bottom: 16px;
  }
`;

const ScrollContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
`;

export default () => (
  <Section>
    <NextContainer>
      <ScrollContainer>
        <H2>Featured destinations</H2>
        <div className="row nowrap-xs">
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card name="Paris" img={paris} />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card name="Miami" img={miami} />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card name="Tokyo" img={tokyo} />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card name="Cape town" img={capetown} />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card name="Seoul" img={seoul} />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card name="Los Angeles" img={la} />
          </div>
        </div>
      </ScrollContainer>
      <Next />
    </NextContainer>
  </Section>
);
