import React from "react";
import styled from "styled-components";
import logo from "./airbnbLogo.svg";
import find from "./inputFind.svg";
import flexboxgrid from "../flexboxgrid2.css";
import Findpicture from "./inputFind.svg";

const Container = styled.div`
  display: flex;
  max-width: 1124px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 392px;
  height: 48px;
  padding-left: 52px;
  margin-left: 50px;
  font: 16px "CuricularAir-Book", sans-serif;
  line-hieght: 24px;
  background-image: url(${Findpicture});
  background-repeat: no-repeat;
  background-position: 12px center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 5px;
  box-sizing: border-box;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Menu>
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </Menu>
        <Input type="text" placeholder="Try &quot;Miami&quot;" />
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
