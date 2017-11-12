import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 91px;
  height: 138px;

  @media only screen and (min-width: 768px) {
    width: 176px;
    height: 264px;
  }

  @media only screen and (min-width: 992px) {
    width: 147px;
    height: 220px;
  }
`;

const DestCard = styled.a`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-decoration: none;
  color: #383838;
`;

const Name = styled.p`
  margin-top: 8px;
  color: #383838;
  font: 12px/14px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  @media only screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export default props => {
  return (
    <DestCard href="#">
      <Img src={props.img} alt={props.name} />
      <Name>{props.name}</Name>
    </DestCard>
  );
};
