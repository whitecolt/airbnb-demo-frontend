import React from "react";
import styled from "styled-components";
import Card from "./Card";
import arrow from "./Arrow.svg";
import chum from "./Chumleys2x.png";
import han from "./Hanjan2x.png";
import meat from "./Primemeats2x.png";
import sea from "./Seaprice2x.png";

const Section = styled.section`
  margin-top: 48px;
  margin-bottom: 48px;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const SeeAll = styled.a`
  text-decoration: none;
  font: 12px/24px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  color: #383838;
  margin-right: 8px;
  white-space: nowrap;

  @media only screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 24px;
  }
`;

export const More = styled.div``;

const H2 = styled.h2`
  font: 24px/28px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  @media only screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
  }
`;

export const Arrow = styled.img``;

const BtnScroll = styled.a`
  position: absolute;
  top: 1050px;
  left: 74%;
  width: 40px;
  height: 40px;
`;

const ScrollContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
`;

export default () => (
  <Section>
    <Description>
      <H2>Popular reservations around the world</H2>
      <More>
        <SeeAll href="#">See All</SeeAll>
        <Arrow src={arrow} />
      </More>
    </Description>
    <ScrollContainer>
      <div className="row nowrap-xs">
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            img={chum}
            name="Chumley's"
            kitchen="speakeasy"
            check="About $60 per person"
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            img={han}
            name="Hanjan"
            kitchen="korean gastropub"
            check="About $50 per person"
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            img={meat}
            name="Prime Meats"
            kitchen="german american"
            check="About $55 per person"
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            img={sea}
            name="Seaprice"
            kitchen="fine seafood"
            check="About $70 per person"
          />
        </div>
      </div>
    </ScrollContainer>
  </Section>
);
