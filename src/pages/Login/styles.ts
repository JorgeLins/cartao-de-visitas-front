import styled from "styled-components";
import logoDesktop from "../../images/logoDesktop.svg";
import logoMobile from "../../images/LogoMobile.svg";
import { ILoginProp } from "./types";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 640px) {
    width: 100%;
    height: 100%;
  }
`;

export const StyledImageBackground = styled.img`
  width: 70%;
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin-right: auto;

  @media only screen and (max-width: 640px) {
    width: 350px;
  }

  @media only screen and (max-width: 1540px) and (min-width: 641px) {
    padding: 5px 0;
    width: 430px;
    margin-left: 67px;
  }
`;

export const StyledButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  border: none;
  width: 541px;
  height: 79px;
  background: #0088fa 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  font: normal normal 600 24px/29px;
  font-size: 24px;
  letter-spacing: 0px;
  color: #ffffff;

  @media only screen and (max-width: 640px) {
    background: #0088fa 0% no-repeat padding-box;
    margin: 30px 31px auto 0px;
    width: 350px;
    height: 45px;
    font-size: 18px;
  }

  @media only screen and (max-width: 1540px) and (min-width: 641px) {
    font-size: 22px;
    width: 410px;
    height: 70px;
    margin-left: 67px;
  }
`;

export const StyledLabel = styled.label`
  top: 503px;
  left: 1312px;
  width: 70px;
  height: 29px;
  text-align: left;
  font: normal normal 600 24px/29px;
  font-size: 24px;
  letter-spacing: 0px;
  color: #888888;
  opacity: 1;
  margin-bottom: 1em;

  @media only screen and (max-width: 640px) {
    margin: 0;
    font-size: 18px;
  }

  @media only screen and (max-width: 1540px) and (min-width: 641px) {
    font-size: 22px;
  }
`;

export const StyledInput = styled.input`
  margin-right: auto;
  top: 549px;
  width: 541px;
  height: 70px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #939393;
  border-radius: 7px;
  opacity: 1;
  text-align: left;
  font: normal normal 600 20px/24px;
  font-size: 20px;
  letter-spacing: 0px;
  color: #888888;
  opacity: 0.3;
  padding: 3%;

  @media only screen and (max-width: 640px) {
    align-items: center;
    width: 350px;
    height: 45px;
    font-size: 18px;
    border: 2px solid #939393;
  }

  @media only screen and (max-width: 1540px) and (min-width: 641px) {
    width: 410px;
  }
`;

export const StyledPagesDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 640px) {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
  }
`;

export const StyledLinkText = styled.p`
  margin-top: 50px;
  text-align: center;
  font: normal normal normal;
  font-size: 18px;
  letter-spacing: 0px;
  color: #bbbbbb;
  opacity: 1;

  &:visited {
    color: #bbbbbb;
  }

  @media only screen and (max-width: 640px) {
    width: 180px;
    margin: 30px 131px 0px 98px;
    font-size: 16px;
  }

  @media only screen and (max-width: 1540px) and (min-width: 641px) {
    width: 410px;
  }
`;

export const StyledA = styled.a`
  margin-top: 50px;
  text-align: right;
  text-decoration: underline;
  font: normal normal normal;
  font-size: 18px;
  letter-spacing: 0px;
  color: #bbbbbb;
  opacity: 1;
  &:visited {
    color: #bbbbbb;
  }

  @media only screen and (max-width: 640px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 1540px) and (min-width: 641px) {
    width: 410px;
  }
`;
export const StyledLogo = styled.div<ILoginProp>`
  background-image: ${(props) =>
    props.mobile ? `url(${logoMobile})` : `url(${logoDesktop})`};
  margin-top: 57px;
  width: 115px;
  height: 99px;
  background-repeat: no-repeat;
  position: absolute;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 640px) {
    margin-left: calc(50% - 50px);
    margin-top: 25px;
    width: 109px;
    height: 109px;
  }
`;
