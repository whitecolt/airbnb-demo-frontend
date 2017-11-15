import React, { Component } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 18px;
  margin-bottom: 15px;
`;

const Link = styled.a`
  display: inline-block;
  width: 32px;
  height: 32px;

  text-decoration: none;
  text-align: center;
  font: 16px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  line-height: 32px;

  color: #0f7276;
  border-radius: 50%;
`;

const CurrentLink = Link.extend`
  background-color: #008489;
  color: #ffffff;
`;

const NextLink = Link.extend`border: 1px solid #008489;`;

const Amount = styled.p`
  text-align: center;
  color: #383838;
  font: 16px/19px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  margin-top: 0;
  margin-bottom: 24px;
`;

const NextButton = styled.a``;

export default props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Wrap>
            <CurrentLink href="#">1</CurrentLink>
            <Link href="#">2</Link>
            <Link href="#">3</Link>
            <Link href="#">...</Link>
            <Link href="#">17</Link>
            <NextLink href="#">></NextLink>
          </Wrap>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <Amount>1 – 18 of 300+ Rentals</Amount>
        </div>
      </div>
    </div>
  );
};
