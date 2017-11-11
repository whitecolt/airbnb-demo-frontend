import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Scroll from "./Card";
import forest from "./Forest2x.png";
import whale from "./Whale2x.png";
import mountain from "./Mountain2x.png";
import salsa from "./Salsa2x.png";
import arrow from "./arrow.svg";

const H2 = styled.h2`
  font: 32px/34px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
`;

export const SeeAll = styled.a`
  text-decoration: none;
  font: 14px/24px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  color: #383838;
  margin-right: 8px;
`;

export const More = styled.div``;

export const Arrow = styled.img``;

const Section = styled.section`
  margin-top: 48px;
  margin-bottom: 24px;
`;

const Inscription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export default () => (
  <Section>
    <Inscription>
      <H2>Experiences</H2>
      <More>
        <SeeAll href="#">See All</SeeAll>
        <Arrow src={arrow} />
      </More>
    </Inscription>
    <div className="row">
      <div className="col-lg-3">
        <Card
          name="Forest therapy"
          img={forest}
          price="$29"
          rating="44 reviews"
        />
      </div>
      <div className="col-lg-3">
        <Card
          name="Whale watching"
          img={whale}
          price="$69"
          rating="46 reviews"
        />
      </div>
      <div className="col-lg-3">
        <Card
          name="Table Mountain Summit, Cable Car Down"
          img={mountain}
          price="$69"
          rating="44 reviews"
        />
      </div>
      <div className="col-lg-3">
        <Card name="Salsa Night" img={salsa} price="$50" rating="44 reviews" />
      </div>
    </div>
  </Section>
);
