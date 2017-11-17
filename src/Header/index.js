import React from "react";
import styled from "styled-components";
import {
  Header,
  Wrap,
  Input,
  LogoSearch,
  Nav,
  MenuLink,
  MenuBtn
} from "./styled";
import logo from "./airbnbLogo.svg";

const FixedContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 11;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 17px;
  box-shadow: 0 1px 0 0 rgba(72, 72, 72, 0.08);
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  background: #fff;
  top: 0;
  left: 0;
`;

export default function() {
  return (
    <Header>
      <FixedContainer>
        <div className="container">
          <Wrap>
            <LogoSearch>
              <a href="/">
                <img src={logo} alt="" />
              </a>
              <MenuBtn />
              <Input type="text" placeholder="Try &quot;Miami&quot;" />
            </LogoSearch>

            <Nav>
              <MenuLink href="#">Become a host</MenuLink>
              <MenuLink href="#">Help</MenuLink>
              <MenuLink href="#">Sign up</MenuLink>
              <MenuLink href="#">Log in</MenuLink>
            </Nav>
          </Wrap>
        </div>
      </FixedContainer>
    </Header>
  );
}
