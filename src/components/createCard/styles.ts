import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";

export const AboutDiv = styled.div`
  position: absolute;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #0082d4;
  border-radius: 20px;
  opacity: 1;
  margin: 5% 23%;
  width: 1030px;
  height: 750px;
  z-index: 3;
  @media only screen and (max-width: 650px) {
    border: none;
    margin: 0px;
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 3;
    background-color: white;
  }
`;

export const AboutH1 = styled.h1`
  display: inline-block;
  padding-top: 12px;
  padding-left: 85px;
  text-align: center;
  margin-top: 44px;
  margin-right: 590px;
  margin-bottom: 39px;
  border: 1px solid #0082d4;
  border-left: none;
  border-radius: 0px 15px 15px 0px;
  opacity: 1;
  width: 390px;
  height: 61px;
  text-align: left;
  font: normal normal;
  font-size: 30px;
  font-weight: 545;
  letter-spacing: 0px;
  color: #0082d4;
  opacity: 1;
  @media only screen and (max-width: 650px) {
    width: 100vw;
    padding: 0px;
    text-align: center;
    border: none;
    margin-top: 65px;
    margin-right: 0px;
    margin-bottom: 0px;
    color: #888888;
    font-size: 25px;
  }
`;

export const StyledInputsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 80px;
  @media only screen and (max-width: 650px) {
    margin: 0px;
  }
`;
export const StyledColunmInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 90px;
  @media only screen and (max-width: 650px) {
    width: 100%;
    margin: 0 20px;
  }
`;

export const StyledInput = styled.input`
  margin-bottom: 50px;
  width: 360px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #888888;
  border-radius: 5px;
  opacity: 1;
  &:hover {
    border-color: #0082d4;
  }
  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const StyledLabel = styled.label`
  text-align: left;
  font: normal normal medium;
  font-size: 20px;
  letter-spacing: 0px;
  color: #888888;
  opacity: 1;

  @media only screen and (max-width: 650px) {
    font-size: 18px;
    color: #0082d4;
  }
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 80px;
`;

export const StyledConfirmButton = styled.button`
  width: 154px;
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
  margin-right: 10px;
`;

export const StyledCancelButton = styled.button`
  font: normal normal medium;
  background: #ffffff;
  border-radius: 5px;
  font-size: 20px;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  width: 139px;
  height: 48px;
  border: none;
  margin-left: 10px;
`;

export const CloseLogo = styled(AiOutlineClose)`
  position: absolute;
  margin-top: 50px;
  margin-right: 50px;
  margin-left: 90%;
  &:hover{
    cursor: pointer;
  }
`;

export const BackIcon = styled(AiOutlineArrowLeft)`
  margin-top: 65px;
  margin-left: 5%;
  position: absolute;
  color: #888888;
`;

export const NextButton = styled.button`
  @media only screen and (max-width: 650px) {
    background-color: #0088fa;
    color: #ffffff;
    width: 100%;
    height: 50px;
    text-align: center;
    border: none;
  
    margin-bottom: 5%;
    border-radius: 10px;
  }
`;

export const StyledIndicatorStage = styled.div`
  @media only screen and (max-width: 650px) {
    text-align:center;
    font-size: 18px;
    color: #b1b100;
  }
`;
