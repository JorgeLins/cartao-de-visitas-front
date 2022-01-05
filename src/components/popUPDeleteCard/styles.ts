import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const MainDiv = styled.div`
  margin: 0% 35%;
  position: absolute;
  width: 533px;
  height: 288px;
  padding-left: 30px;
  border: 1px solid #0082d4;
  display: flex;
  flex-direction: column;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  z-index: 3;
  @media only screen and (max-width: 650px) {
    padding-left: 0px;
    z-index: 4;
    width: 246px;
    height: 240px;
    margin: 50% 3%;
  }
`;

export const Styledtitle = styled.p`
  margin-top: 26px;
  margin-bottom: 15px;
  font: normal normal medium;
  font-size: 30px;
  letter-spacing: 0px;
  color: #0082d4;
  opacity: 1;
 
`;

export const Styledtext = styled.p`
  font: normal normal normal;
  font-size: 16px;
  letter-spacing: 0px;
  color: #888888;
  opacity: 1;
  @media only screen and (max-width: 650px) {
    margin-top: 30px;
    font-size: 20px;
    text-align: center;
    color: #888888;
  }
`;

export const ButtonDiv = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 650px) {
    margin: 0;
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }
`;
export const StyledButton = styled.button`
  width: 152px;
  height: 48px;
  background: #0082d4 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  border: none;
  font: normal normal medium;
  font-size: 20px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  
  @media only screen and (max-width: 650px) {
    background: #0088FA;
    font-size: 16px;
  }
`;

export const StyledCancelButton = styled.button`
  width: 152px;
  height: 48px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  border: none;
  font: normal normal medium 20px/24px;
  font-size: 20px;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  @media only screen and (max-width: 650px) {
    font-size: 16px;
  }
`;
export const CloseLogo = styled(AiOutlineClose)`
    position: absolute;
    margin-left: 221px;
    margin-top: 5px;
  &:hover{
    cursor: pointer;
  }
`;
