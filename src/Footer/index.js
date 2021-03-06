import React from "react";
import {
  Footer,
  FooterWrap,
  Select,
  Nav,
  NavTitle,
  Link,
  Basement,
  Inc,
  Info,
  Logo,
  InfoLink,
  Buttons
} from "./styled";

import logo from "./logo.svg";
import fb from "./facebook.svg";
import tw from "./twitter.svg";
import inst from "./instagram.svg";

export default function() {
  return (
    <Footer>
      <div className="container">
        <FooterWrap>
          <div className="row">
            <div className="col-xs-12 col-md-3">
              <div className="row">
                <div className="col-xs-6 col-md-12">
                  <Buttons>
                    <Select>
                      <option>English</option>
                    </Select>
                  </Buttons>
                </div>

                <div className="col-xs-6 col-md-12">
                  <Buttons>
                    <Select>
                      <option>United States dollar</option>
                    </Select>
                  </Buttons>
                </div>
              </div>
            </div>

            <div className="col-md-offset-1 col-md-2  col-lg-2">
              <Nav>
                <NavTitle>Airbnb</NavTitle>
                <Link href="#">About us</Link>
                <Link href="#">Careers</Link>
                <Link href="#">Press</Link>
                <Link href="#">Policies</Link>
                <Link href="#">Help</Link>
                <Link href="#">Diversity & Belonging</Link>
              </Nav>
            </div>

            <div className="col-md-offset-1 col-md-2 col-lg-offset-1 col-lg-2">
              <Nav>
                <NavTitle>Discover</NavTitle>
                <Link href="#">Trust & Safety</Link>
                <Link href="#">Travel Credit</Link>
                <Link href="#">Gift Cards</Link>
                <Link href="#">Airbnb Citizen</Link>
                <Link href="#">Bisiness Travel</Link>
                <Link href="#">Guidebooks</Link>
                <Link href="#">Airbnbmag</Link>
              </Nav>
            </div>

            <div className="col-md-offset-1 col-md-2 col-lg-offset-1 col-lg-2">
              <Nav>
                <NavTitle>Hosting</NavTitle>
                <Link href="#">Why Host</Link>
                <Link href="#">Hospitality</Link>
                <Link href="#">Responsible Hosting</Link>
                <Link href="#">Community Center</Link>
              </Nav>
            </div>
          </div>
        </FooterWrap>

        <div className="row">
          <div className="col-md-12">
            <Basement>
              <div className="col-md-3">
                <Inc>
                  <Logo src={logo} alt="logo.svg" /> © Airbnb Inc.
                </Inc>
              </div>
              <div className="col-md-5">
                <Info>
                  <InfoLink href="#">Terms</InfoLink>
                  <InfoLink href="#">Privacy</InfoLink>
                  <InfoLink href="#">Site Map</InfoLink>
                  <InfoLink href="#">
                    <img src={fb} alt="facebook" />
                  </InfoLink>
                  <InfoLink href="#">
                    <img src={tw} alt="twitter" />
                  </InfoLink>
                  <InfoLink href="#">
                    <img src={inst} alt="instagram" />
                  </InfoLink>
                </Info>
              </div>
            </Basement>
          </div>
        </div>
      </div>
    </Footer>
  );
}
