import React from "react";
import styled from "styled-components";
import logo from "./airbnbLogo.svg";
import Findpicture from "./inputFind.svg";
import "flexboxgrid2";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1124px;
  margin: 0 auto;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
`;

const Input = styled.input`
  width: 392px;
  height: 48px;
  padding-left: 52px;
  margin-left: 50px;
  font: 16px/24px "CircularAir Book" "Helvetica Neue" "Helvetica" "Arial",
    sans-serif;
  background-image: url(${Findpicture});
  background-repeat: no-repeat;
  background-position: 12px center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 5px;
  box-sizing: border-box;
`;

const LogoSearch = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`display: flex;`;

const MenuLink = styled.a`
  display: inline-block;
  padding: 0 3px;
  margin-right: 8px;
  text-decoration: none;
  font: 14px/24px "CircularAir Book" "Helvetica Neue" "Helvetica" "Arial",
    sans-serif;
`;

class Header extends React.Component {
  render() {
    return (
      <Container>
        <LogoSearch>
          <a href="#">
            <img src={logo} alt="" />
          </a>
          <Input type="text" placeholder="Try &quot;Miami&quot;" />
        </LogoSearch>
        <Nav>
          <MenuLink href="#">Become a host</MenuLink>
          <MenuLink href="#">Help</MenuLink>
          <MenuLink href="#">Sign up</MenuLink>
          <MenuLink href="#">Log in</MenuLink>
        </Nav>
      </Container>
    );
  }
}

export default Header;

// export default () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="" />
//         <Header>
//           <a href="#">
//             <img src={logo} alt="airbnb-logo.svg" />
//           </a>
//           <Input type="text" placeholder="Try &quot;Miami&quot;" />
//         </Header>
//       </div>
//     </div>
//   );
// };
