import React, { Component } from "react";
import styled from "styled-components";

import star from "../UI/star.svg";
import {
  Card,
  Link,
  Img,
  Info,
  Price,
  Name,
  Details,
  Access,
  Beds,
  Stars,
  Rank
} from "../UI";

export default props => {
  return (
    <Card>
      <Link href={props.link}>
        <Img src={props.img} alt={props.name} />
        <Info>
          <Price>{props.price}</Price>
          <Name>{props.name}</Name>
        </Info>
      </Link>
      <Details>
        <Access>{props.access}</Access>
        <Beds>{props.beds}</Beds>
      </Details>
      <Stars src={star} />
      <Rank>{props.rank}</Rank>
    </Card>
  );
};
