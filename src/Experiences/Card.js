import React from "react";
import styled from "styled-components";
import star from "./star.svg";

const Img = styled.img`
  width: 144px;
  height: 216px;

  @media only screen and (min-width: 768px) {
    width: 240px;
    height: 346px;
  }
  @media only screen and (min-width: 992px) {
    width: 230px;
    height: 346px;
  }
`;

const ExperienceCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: #383838;
`;

const Name = styled.span``;

export const Price = styled.span`
  display: inline-block;
  font: 13px/15px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin-right: 3px;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Info = styled.p`
  margin-top: 8px;
  margin-bottom: 4px;
  flex-basis: 100%;
  font: 13px/15px "Circular Air Light", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Stars = styled.img`
  width: 76px;
  height: 12px;
  margin-right: 8px;
`;
const Reviews = styled.span`font: 12px/14px "Circular Air Book", sans-serif;`;

export default props => {
  return (
    <ExperienceCard>
      <Link href="#">
        <Img src={props.img} alt={props.name} />
        <Info>
          <Price>{props.price}</Price>
          <Name>{props.name}</Name>
        </Info>
      </Link>
      <Stars src={star} />
      <Reviews>{props.rating}</Reviews>
    </ExperienceCard>
  );
};
