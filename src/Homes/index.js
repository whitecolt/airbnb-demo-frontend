import React, { Component } from "react";
import styled from "styled-components";

import Header from "../Header";
import Filters from "./Filters";
import Card from "./Card";
import GoogleMap from "./GoogleMap";
import Paginator from "./Paginator";
import Footer from "./Footer";

import center from "./center.png";
import dreamy from "./dreamy.png";
import exclusive from "./exclusive.png";
import town from "./old town.png";
import salentina from "./salentina.png";
import vista from "./vista.png";

const CardWrap = styled.div`margin-bottom: 24px;`;

const Main = styled.main`
  padding-top: 112px;

  @media only screen and (min-width: 768px) {
    padding-bottom: 24px;
  }
`;

export default () => (
  <Main>
    <Header />
    <Filters />
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-lg-8">
          <div className="row">
            <div className="col-xs-12 col-md-6 col-lg-6">
              <CardWrap>
                <Card
                  link="#"
                  name="La Salentina, see, nature & relax"
                  img={salentina}
                  price="$82"
                  access="Entire house"
                  beds="9 beds"
                  rank="97  Superhost"
                />
              </CardWrap>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-6">
              <CardWrap>
                <Card
                  link="#"
                  name="Your private 3 bedr. riad and exclusi..."
                  img={exclusive}
                  price="$82"
                  access="Entire house"
                  beds="5 beds"
                  rank="161  Superhost"
                />
              </CardWrap>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-6">
              <CardWrap>
                <Card
                  link="#"
                  name="Dreamy Tropical Tree House"
                  img={dreamy}
                  price="$200"
                  access="Entire treehouse"
                  beds="1 bed"
                  rank="364  Superhost"
                />
              </CardWrap>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-6">
              <CardWrap>
                <Card
                  link="#"
                  name="Best location old town luxury loft"
                  img={town}
                  price="$110"
                  access="Entire appartment"
                  beds="1 bed"
                  rank="369  Superhost"
                />
              </CardWrap>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-6">
              <CardWrap>
                <Card
                  link="#"
                  name="Lusuoso. Vista incantevolve"
                  img={vista}
                  price="$83"
                  access="Entire appartment"
                  beds="6 bed"
                  rank="105  Superhost"
                />
              </CardWrap>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-6">
              <CardWrap>
                <Card
                  link="#"
                  name="In the historical centre of Leecce"
                  img={center}
                  price="$200"
                  access="Entire house"
                  beds="3 bed"
                  rank="221  Superhost"
                />
              </CardWrap>
            </div>
            <GoogleMap />
            <Paginator />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  </Main>
);
