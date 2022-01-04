import styled from "styled-components";
import { AiOutlineDownload, AiOutlineClose } from "react-icons/ai";

export const MainDiv = styled.div`
  margin: 0% 35%;
  position: absolute;
  padding-left: 26px;
  border: 1px solid #0082d4;
  display: flex;
  flex-direction: column;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  z-index: 3;
  width: 430px;
  height: 385px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  @media only screen and (max-width: 650px) {
    margin: 0;
    margin-top: 50%;
    left: 25%;
    padding-left: 0px;
    width: 330px;
    height: 300px;
  }
`;

export const StyledEmailP = styled.p`
  margin-top: 34px;
  margin-bottom: 13px;
  font: normal normal medium;
  font-size: 20px;
  letter-spacing: 0px;
  color: #888888;
  opacity: 1;
  width: 64px;
  height: 24px;
  @media only screen and (max-width: 650px) {
    margin-left: 15px;
  }
`;

export const StyledEmailInput = styled.input`
  margin-bottom: 25px;
  font: normal normal medium;
  font-size: 18px;
  letter-spacing: 0px;
  color: #888888;
  opacity: 0.5;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #939393;
  border-radius: 7px;
  opacity: 1;
  width: 378px;
  height: 59px;
  padding-left: 10px;
  &::placeholder {
    padding-left: 19px;
  }
  @media only screen and (max-width: 650px) {
    width: 90%;
    align-self: center;
    height: 40px;
    &::placeholder {
      padding-left: 5px;
    }
  }
`;

export const StyledButton = styled.button`
  text-align: center;
  font: normal normal 600;
  font-size: 20px;
  letter-spacing: 0px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  opacity: 1;
  background: #848484 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 378px;
  height: 58px;
  margin-bottom: 26px;
  @media only screen and (max-width: 650px) {
    width: 90%;
    align-self: center;
    height: 40px;
    margin-bottom: 20px;
  }
`;

export const StyledText = styled.p`
  margin-left: 176px;
  margin-bottom: 27px;
  width: 27px;
  height: 22px;
  font: normal normal medium;
  font-size: 18px;
  letter-spacing: 0px;
  color: #888888;
  opacity: 1;
  @media only screen and (max-width: 650px) {
    margin-left: auto;
    margin-right: auto;
   margin-bottom: 20px;
  }
`;

export const StyledDownloadButton = styled.button`
  width: 378px;
  height: 58px;
  text-align: center;
  font: normal normal medium;
  font-size: 18px;
  letter-spacing: 0px;
  color: #4d7dff;
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #4c7dfa;
  border-radius: 7px;
  opacity: 1;
  @media only screen and (max-width: 650px) {
    width: 90%;
    height: 40px;
    margin-left: 5%;
  }
`;

export const StyledDownloadIcon = styled(AiOutlineDownload)``;

export const CloseLogo = styled(AiOutlineClose)`
  margin-top: 30px;
  position: absolute;
  margin-left: 360px;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 650px) {
   margin-left: 90%
  }
`;
