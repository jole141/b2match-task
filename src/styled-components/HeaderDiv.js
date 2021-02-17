import styled from "styled-components";

const HeaderDiv = styled.header`
  background-color: ${(props) => props.theme.prussianBlue};
  color: white;
  height: 80px;
  text-align: center;
  align-items: center;

  img {
    height: 40px;
    margin: 20px 0;
  }
`;

export default HeaderDiv;
