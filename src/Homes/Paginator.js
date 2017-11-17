import React, { Component } from "react";
import styled from "styled-components";
import next from "./paginatornext.svg";

const Paginator = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
  margin-bottom: 15px;
`;

const Link = styled.a`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-right: 22px;

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

const Img = styled.img`
  width: 32px;
  height: 32px;
`;

const Amount = styled.p`
  text-align: center;
  color: #383838;
  font: 16px/19px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  margin-top: 0;
  margin-bottom: 24px;
`;

export default props => {
  return (
    <div className="container">
      <Paginator>
        <Wrap>
          <CurrentLink href="#">1</CurrentLink>
          <Link href="#">2</Link>
          <Link href="#">3</Link>
          <Link href="#">...</Link>
          <Link href="#">17</Link>
          <Link href="#">
            <Img src={next} alt="" />
          </Link>
        </Wrap>

        <Amount>1 – 18 of 300+ Rentals</Amount>
      </Paginator>
    </div>
  );
};
