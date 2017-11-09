import React from "react";
import styled from "styled-components";
import Card from "./ExperiencesCard";
import forest from "./Forest2x.png";
import whale from "./Whale2x.png";
import mountain from "./Mountain2x.png";
import salsa from "./Salsa2x.png";
import star from "./star.svg";
import arrow from "./Arrow.svg";
import seelink from "./See all.svg";

const H2 = styled.h2`
  font: bold 32px/34px "CircularAir Bold", Helvetica Neue, Helvetica, Arial,
    sans-serif;
  margin-top: 48px;
  margin-bottom: 24px;
`;

const SeeAll = styled.a``;

export default () => (
  <div className="Section">
    <H2>Experiences</H2>
    <SeeAll href="#">See All</SeeAll>

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
  </div>
);
