import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const MainDiv = styled.div`
  margin:15% 35%; 
  position:absolute;
  width: 450px;
  height: 218px;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  z-index: 3;
`;

export const Styledtitle = styled.p`
  margin-bottom: 15px;
  font: normal normal medium;
  font-size: 30px;
  letter-spacing: 0px;
  color: #0082d4;
  opacity: 1;
`;

export const Styledtext = styled.p`
  font: normal normal normal;
  font-size: 20px;
  letter-spacing: 0px;
  color: #888888;
  opacity: 1;
`;

export const ButtonDiv = styled.div`
  display:flex;
  flex-direction: row;
`

export const StyledButton = styled.button`
  width: 152px;
  height: 48px;
  background: #0082d4 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  border:none;
  font: normal normal medium 20px/24px;
  font-size: 20px;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
`;

export const CloseLogo = styled(AiOutlineClose)`
  position: absolute;
  margin-left: 300px;
  &:hover{
    cursor: pointer;
  }
`;
