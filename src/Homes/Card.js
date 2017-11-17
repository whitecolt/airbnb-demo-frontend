import React, { Component } from "react";
import styled from "styled-components";

import star from "../UI/star.svg";

export const Card = styled.a`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-decoration: none;
  color: #383838;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #383838;
`;

export const Price = styled.span`
  display: inline-block;
  font: 13px/15px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin-right: 3px;
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

export const Name = styled.span`
  font: 13px/15px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Info = styled.p`
  margin-top: 8px;
  margin-bottom: 2px;
  flex-basis: 100%;
  font: 13px/15px "Circular Air Light", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Details = styled.p`
  margin-top: 2px;
  font: 12px/14px "Circular Air Light", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  color: #383838;
  margin-bottom: 8px;
  flex-basis: 100%;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Access = styled.span`
  display: inline-block;
  margin-right: 8px;
`;

export const Beds = styled.span`display: inline-block;`;

export const Rank = styled.span`
  font: 12px/14px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  color: #383838;
`;

export default props => {
  return (
    <Card href={props.link}>
      <Img src={props.img} alt={props.name} />
      <Info>
        <Price>{props.price}</Price>
        <Name>{props.name}</Name>
      </Info>

      <Details>
        <Access>{props.access}</Access>
        <Beds>{props.beds}</Beds>
      </Details>
      <Stars src={star} />
      <Rank>{props.rank}</Rank>
    </Card>
  );
};
