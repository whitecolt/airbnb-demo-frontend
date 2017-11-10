import React from "react";
import styled from "styled-components";
import Card from "./ExperiencesCard";
import forest from "./Forest2x.png";
import whale from "./Whale2x.png";
import mountain from "./Mountain2x.png";
import salsa from "./Salsa2x.png";
import star from "./star.svg";
import arrow from "./Arrow.svg";
import { SeeAll, More, Arrow } from "../Homes/Homes";

const H2 = styled.h2`
  font: 32px/34px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
`;

const Section = styled.div`
  margin-top: 48px;
  margin-bottom: 24px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export default () => (
  <Section>
    <Title>
      <H2>Experiences</H2>
      <More>
        <SeeAll href="#">See All</SeeAll>
        <Arrow src={arrow} />
      </More>
    </Title>
    <div className="row">
      <div className="col-3">
        <Card
          name="Forest therapy"
          img={forest}
          price={"$29"}
          img1={star}
          name1={"44 reviews"}
        />
      </div>
      <div className="col-3">
        <Card
          name="Whale watching"
          img={whale}
          price={"$69"}
          img1={star}
          name1={"46 reviews"}
        />
      </div>
      <div className="col-3">
        <Card
          name="Table Mountain Summit, Cable Car Down"
          img={mountain}
          price={"$69"}
          img1={star}
          name1={"44 reviews"}
        />
      </div>
      <div className="col-3">
        <Card
          name="Salsa Night"
          img={salsa}
          price={"$50"}
          img1={star}
          name1={"44 reviews"}
        />
      </div>
    </div>
  </Section>
);
