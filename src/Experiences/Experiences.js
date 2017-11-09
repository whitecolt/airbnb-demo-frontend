import React from "react";
import styled from "styled-components";
import Card from "./ExperiencesCard";
import forest from "./Forest2x.png";
import whale from "./Whale2x.png";
import mountain from "./Mountain2x.png";
import salsa from "./Salsa2x.png";

const H2 = styled.h2`
  font: bold 32px/34px "CircularAir Bold", Helvetica Neue, Helvetica, Arial,
    sans-serif;
  margin-top: 48px;
  margin-bottom: 24px;
`;

export default () => (
  <div className="Wrapper">
    <H2>Experiences</H2>
    <div className="row">
      <div className="col-3">
        <Card name="Forest therapy" img={forest} price={"$29"} />
      </div>
      <div className="col-3">
        <Card name="Forest therapy" img={forest} price={"$29"} />
      </div>
      <div className="col-3">
        <Card name="Forest therapy" img={forest} price={"$29"} />
      </div>
      <div className="col-3">
        <Card name="Forest therapy" img={forest} price={"$29"} />
      </div>
    </div>
  </div>
);
