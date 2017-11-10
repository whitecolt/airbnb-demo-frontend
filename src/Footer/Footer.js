import React from "react";
import {
  Footer,
  FooterWrap,
  Form,
  Select,
  Nav,
  NavTitle,
  Link,
  Basement,
  Inc,
  Info,
  Logo,
  InfoLink
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
            <div className="col-4">
              <Form action="post">
                <Select name="language" id="languageSelect">
                  <option value="value1">English</option>
                </Select>
                <Select name="currency" id="currencySelect">
                  <option value="value1">Unated States dollar</option>
                </Select>
              </Form>
            </div>

            <div className="col-3">
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

            <div className="col-3">
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

            <div className="col-2">
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
        <Basement>
          <Inc>
            <Logo src={logo} alt="logo.svg" /> © Airbnb Inc.
          </Inc>

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
        </Basement>
      </div>
    </Footer>
  );
}
