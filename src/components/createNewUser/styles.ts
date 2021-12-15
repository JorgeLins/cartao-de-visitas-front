import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const MainDiv = styled.div`
  position: absolute;
  margin: 15% 35%;
  position: absolute;
  width: 533px;
  height: 255px;
  display: flex;
  border: 1px solid #0082d4;
  border-radius: 20px;
  flex-direction: column;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  z-index: 3;
  @media only screen and (max-width: 650px) {
    width: 372px;
    height: 194px;
    margin: 50% 7%;
    }
`;

export const StyledTitle = styled.p`
  display: inline-block;
  padding-top: 12px;
  padding-left: 29px;
  text-align: center;
  margin-top: 17px;
  border: 1px solid #0082d4;
  border-left: none;
  border-radius: 0px 15px 15px 0px;
  opacity: 1;
  width: 270px;
  height: 60px;
  text-align: left;
  font: normal normal;
  font-size: 28px;
  font-weight: 545;
  letter-spacing: 0px;
  color: #0082d4;
  opacity: 1;
  @media only screen and (max-width: 650px) {
    font-size: 20px;
    width: 170px;
  
    }
`;

export const StyledP = styled.p`
  margin-left: 30px;
  font: normal normal normal;
  font-size: 18px;
  letter-spacing: 0px;
  color: #888888;
  opacity: 1;
  @media only screen and (max-width: 650px) {
    font-size: 16px;
    align-self: center;
    margin-left: 0px;
  
    }
  
`;

export const StyledButtonsDiv = styled.div` 
  padding: 12px 25px 12px 25px;
  display:flex;
  flex-direction: row;
  margin-top:36px;  
  @media only screen and (max-width: 650px) {
    margin-top:0px;
    padding: 12px 25px 0px 25px;  
    }
  
`

export const StyledButton = styled.button`
  display: inline-block;
  text-align: center;
  font: normal normal medium;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 2px solid #70707080;
  border-radius: 5px;
  opacity: 1;
  font-size:20px;
  letter-spacing: 0px;
  color: #707070;
  background-color: white;
  margin-right: 30px;
  opacity: 1;
  padding: 12px 25px 12px 25px;
  padding-bottom: 12px;
  height: 48px; 
  opacity: 1;
  &:hover {
    color: white;
    background-color: #0082D4;
  }
  @media only screen and (max-width: 650px) {
    height: 43px;
    margin: 0px;
    margin-right: 15px;
    font-size:16px;
  }
  
`
export const CloseLogo = styled(AiOutlineClose)`
  margin-left: 480px;
  position: absolute;
  margin-top: 30px;
  margin-right: 50px;
  @media only screen and (max-width: 650px) {
    margin-left:80%;
    font-size:16px;
  }
  &:hover{
    cursor: pointer;
  }
`;