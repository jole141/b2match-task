import React from "react";
import HeaderDiv from "../styled-components/HeaderDiv";
import logoImg from "../images/b.svg";

const Header = () => {
  return (
    <HeaderDiv>
      <img src={logoImg} alt="Letter B" />
    </HeaderDiv>
  );
};

export default Header;
