import React from "react";
import styled from "styled-components";
import arrow from "./Arrow.svg";
import Card from "./HomesCard.js";
import dreamy from "./Dreamy2x.png";
import exclusive from "./Exclusive2x.png";
import salentina from "./Salentina2x.png";

const Section = styled.section`
  margin-top: 66px;
  margin-bottom: 24px;
`;

const H2 = styled.h2`
  font: bold 32px/34px "CircularAir Bold", Helvetica Neue, Helvetica, Arial,
    sans-serif;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SeeAll = styled.a`
  text-decoration: none;
  font: 14px/24px "Circular Air Book", sans-serif;
  color: #383838;
  margin-right: 8px;
`;

export const More = styled.div``;

export const Arrow = styled.img``;

export default () => (
  <Section>
    <Title>
      <H2>Homes</H2>
      <More>
        <SeeAll href="#">See All</SeeAll>
        <Arrow src={arrow} />
      </More>
    </Title>
    <div className="row">
      <div className="col-4">
        <Card
          name="La Salentina, see, nature & relax"
          img={salentina}
          price="$82"
          access="Entire house"
          beds="9 beds"
          rank="97  Superhost"
        />
      </div>
      <div className="col-4">
        <Card
          name="Your private 3 bedr. riad and exclusi..."
          img={exclusive}
          price="$82"
          access="Entire house"
          beds="5 beds"
          rank="161  Superhost"
        />
      </div>
      <div className="col-4">
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
  </Section>
);
