import styled from "styled-components";
import mySVG from "../../images/Elemento_Azul.svg";
import mySVGMobile from "../../images/Mobile_ElementoAzul.png";
import { IHeaderDiv } from "./types";
import logoDesktop from "../../images/logoDesktop.svg";
import logoMobile from "../../images/LogoMobile.svg";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 675px;
  @media only screen and (max-width: 640px){
    width: 100%;
  }
`;

export const HeaderDiv = styled.div<IHeaderDiv>`
  display: flex;
  background-image: ${(props) =>
    props.mobile ? `url(${mySVGMobile})` : `url(${mySVG})`};
  background-repeat: no-repeat;
  background-position: -115px -85px;
  background-size: 930px;
  flex-direction: column;
  width: 100%;
  padding: 98px 0 260px 72px;

  @media only screen and (max-width: 640px){

    
    }
  @media only screen and (max-width: 640px){
    
    background-size:100%;
    background-position: center;
    background-position-y:-40px ;
    padding-top: 130px;
    padding-right: 0px;
    padding-left: 0px;
    justify-content: center;
    text-align: center;
    
    }
`;

export const StyledH1 = styled.h1`
  font-weight: 600;
  font-size: 50px;
  color: #ffffff;
  margin-bottom: 30px;
  @media only screen and (max-width: 640px){
    font-size:30px;
    
  }
`;

export const StyledLoginText = styled.p`
  color: #ffffff;
  font-size: 25px;
  line-height: 25px;
  font-weight: 600;
  @media only screen and (max-width: 640px){
    font-size:20px;
    
  }
`;

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 67px;
  margin-bottom: 32px;
  @media only screen and (max-width: 640px){
  justify-content: center;
  margin: 0 0;
  padding: 0 31px;
  }
  
`;

export const StyledLabel = styled.label`
  width: 70px;
  height: 29px;
  font-weight: 600;
  font-size: 24px;
  color: #888888;
  margin-bottom: 18px;
  @media only screen and (max-width: 640px){
    height: 19px;
    font-size: 15px;
  }
`;

export const StyledInput = styled.input`
  height: 70px;
  border: 1px solid #939393;
  border-radius: 7px;
  font-weight: 600;
  font-size: 20px;
  color: #888888;
  padding-left: 24px;
  ::placeholder{
    color: #888888;
    opacity: 0.3;
  }
  @media only screen and (max-width: 640px){
    height: 45px;
  }
`;

export const StyledButton = styled.button`
  border: none;
  margin: 18px 67px 0 67px;
  height: 80px;
  background: #0088fa;
  border-radius: 8px;
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
  @media only screen and (max-width: 640px){
    height: 43px;
    font-size: 15px;
  }
`;

export const StyledLinkText = styled.p`
  margin-top: 50px;
  text-align: center;
  font-size: 18px;
  color: #bbbbbb;

  &:visited {
    color: #bbbbbb;
  }
`;

export const StyledA = styled.a`
  margin-top: 50px;
  text-decoration: underline;
  font-size: 18px;
  color: #bbbbbb;

  &:visited {
    color: #bbbbbb;
  }
`;


export const StyledLogo = styled.div<IHeaderDiv>`
  background-image: ${(props) =>
    props.mobile ? `url(${logoMobile})` : `url(${logoDesktop})`};
  margin-top:57px;
  width: 115px;
  height: 99px;
  opacity: 1;
  float: left;
  background-repeat: no-repeat;
  position: absolute;
`;