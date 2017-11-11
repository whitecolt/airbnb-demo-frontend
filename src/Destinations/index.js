import React from "react";
import styled from "styled-components";
import Card from "./Card.js";
import miami from "./Miami2x.png";
import tokyo from "./Tokyo2x.png";
import capetown from "./Cape Town2x.png";
import paris from "./Paris2x.png";
import seoul from "./Seoul2x.png";
import la from "./Los Angeles2x.png";

const Section = styled.section`
  margin-top: 48px;
  margin-bottom: 64px;
`;

const H2 = styled.h2`
  font: 32px/34px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin-bottom: 24px;
`;

export default () => (
  <Section>
    <H2>Featured destinations</H2>
    <div className="row">
      <div className="col-lg-2">
        <Card name="Paris" img={paris} />
      </div>
      <div className="col-lg-2">
        <Card name="Miami" img={miami} />
      </div>
      <div className="col-lg-2">
        <Card name="Tokyo" img={tokyo} />
      </div>
      <div className="col-lg-2">
        <Card name="Cape town" img={capetown} />
      </div>
      <div className="col-lg-2">
        <Card name="Seoul" img={seoul} />
      </div>
      <div className="col-lg-2">
        <Card name="Los Angeles" img={la} />
      </div>
    </div>
  </Section>
);
