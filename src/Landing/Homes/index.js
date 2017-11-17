import React from "react";

import { NavLink } from "react-router-dom";

import Card from "../../Homes/Card";

import next from "./next-page.svg";
import styled from "styled-components";
import arrow from "./arrow.svg";
import dreamy from "./Dreamy2x.png";
import exclusive from "./Exclusive2x.png";
import salentina from "./Salentina2x.png";

const Section = styled.section`
  margin-top: 36px;
  margin-bottom: 16px;
  position: relative;

  @media only screen and (min-width: 768px) {
    margin-top: 36px;
    margin-bottom: 24px;
  }
`;

export const NextContainer = styled.div`position: relative;`;

export const NextCard = styled.button`
  display: none;

  @media only screen and (min-width: 992px) {
    display: block;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    border: none;
    position: absolute;
    right: -20px;
    z-index: 10;
    width: 40px;
    height: 40px;
    background: url(${next}) no-repeat 0 0;
    background-size: contain;
  }
`;

const Next = NextCard.extend`top: 80px;`;

const H2 = styled.h2`
  font: 24px/28px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;

  @media only screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const Link = styled(NavLink)`text-decoration: none;`;

export const SeeAll = styled.span`
  display: inline-block;
  font: 12px/24px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  color: #383838;
  margin-right: 8px;

  @media only screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 24px;
  }
`;

export const More = styled.div``;

export const Arrow = styled.img``;

const ScrollContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  margin: 0 -8px;
  padding: 2px 8px;
  @media only screen and (min-width: 992px) {
    overflow-x: auto;
  }
`;

export default () => {
  return (
    <Section>
      <Description>
        <H2>Homes</H2>
        <More>
          <Link to="/homes">
            <SeeAll>See All</SeeAll>
            <Arrow src={arrow} />
          </Link>
        </More>
      </Description>
      <NextContainer>
        <ScrollContainer>
          <div className="row nowrap-xs">
            <div className="col-xs-8 col-md-5 col-lg-4">
              <Card
                name="La Salentina, see, nature & relax"
                img={salentina}
                price="$82"
                access="Entire house"
                beds="9 beds"
                rank="97  Superhost"
              />
            </div>
            <div className="col-xs-8 col-md-5 col-lg-4">
              <Card
                name="Your private 3 bedr. riad and exclusi..."
                img={exclusive}
                price="$82"
                access="Entire house"
                beds="5 beds"
                rank="161  Superhost"
              />
            </div>
            <div className="col-xs-8 col-md-5 col-lg-4">
              <Card
                name="Dreamy Tropical Tree House"
                img={dreamy}
                price="$200"
                access="Entire treehouse"
                beds="1 bed"
                rank="364  Superhost"
              />
            </div>
          </div>
        </ScrollContainer>
        <Next />
      </NextContainer>
    </Section>
  );
};
