import React from "react";
import styled from "styled-components";
import arrow from "./Arrow.svg";
import Card from "./Card.js";
import dreamy from "./Dreamy2x.png";
import exclusive from "./Exclusive2x.png";
import salentina from "./Salentina2x.png";

const Section = styled.section`
  margin-top: 36px;
  margin-bottom: 16px;
  position: relative;

  @media only screen and (min-width: 768px) {
    margin-top: 36px;
    margin-bottom: 24px;
  }
`;

const H2 = styled.h2`
  font: 24px/28px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;

  @media only screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const SeeAll = styled.a`
  text-decoration: none;
  font: 12px/24px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  color: #383838;
  margin-right: 8px;

  @media only screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 24px;
  }
`;

export const More = styled.div``;

export const Arrow = styled.img``;

const ScrollContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
`;

export default () => (
  <Section>
    <Description>
      <H2>Homes</H2>
      <More>
        <SeeAll href="#">See All</SeeAll>
        <Arrow src={arrow} />
      </More>
    </Description>
    <ScrollContainer>
      <div className="row nowrap-xs">
        <div className="col-xs-8 col-md-5 col-lg-4">
          <Card
            name="La Salentina, see, nature & relax"
            img={salentina}
            price="$82"
            access="Entire house"
            beds="9 beds"
            rank="97  Superhost"
          />
        </div>
        <div className="col-xs-8 col-md-5 col-lg-4">
          <Card
            name="Your private 3 bedr. riad and exclusi..."
            img={exclusive}
            price="$82"
            access="Entire house"
            beds="5 beds"
            rank="161  Superhost"
          />
        </div>
        <div className="col-xs-8 col-md-5 col-lg-4">
          <Card
            name="Dreamy Tropical Tree House"
            img={dreamy}
            price="$200"
            access="Entire treehouse"
            beds="1 bed"
            rank="364  Superhost"
          />
        </div>
      </div>
    </ScrollContainer>
  </Section>
);
