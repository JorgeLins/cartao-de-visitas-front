import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const MainDiv = styled.div`
  position: absolute;
  margin: 10% 28%;
  position: absolute;
  width: 816px;
  height: 593px;
  display: flex;
  border: 1px solid #0082d4;
  border-radius: 20px;
  flex-direction: column;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  z-index: 3;
  
  @media only screen and (max-width: 650px) {
    height: 600px;
    width: 370px;
    margin-left: 35px;
    font-size:16px;
  }
  @media only screen and (max-width: 1720px) and(min-width:800px){
    margin-left: 90%;
    width: 820px;
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
    width: 200px;
    font-size: 24px;
    text-align: left;
    border-radius: 0px 20px 20px 0px;
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
   
    font-size: 18px;
  
   
  }
`;

export const StyledInputDiv = styled.div`
  margin-left: 30px;
`;

export const StyledInputText = styled.label`
  display:block;
  text-align: left;
  margin-bottom: 0px;
  font: normal normal medium;
  font-size: 20px;
  letter-spacing: 0px;
  color: #888888;
  opacity: 1;
  @media only screen and (max-width: 650px) {
   
   font-size: 18px;
 
  
 }
`;

export const StyledInput = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;  
  border: 1px solid #888888;
  border-radius: 5px;
  opacity: 1;
  width: 360px;
  height: 40px;
   @media only screen and (max-width: 650px) {
    height: 40px;
    width: 80%;
    margin: 0px;
    margin-right: 15px;
    }
  
`;

export const StyledButtonsDiv = styled.div`
  margin-left: 5px;
  padding: 0px 25px 12px 25px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  @media only screen and (max-width: 650px) {
    margin-top: 10px;
  }
`;

export const StyledConfirmButton = styled.button`
  padding: 12px 25px 12px 25px;
  text-align: center;
  font: normal normal medium;
  border: none;
  font-size: 20px;
  letter-spacing: 0px;
  margin-right: 12px;
  color: #ffffff;
  opacity: 1;
  width: 148px;
  height: 48px;
  background: #0082d4 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  @media only screen and (max-width: 650px) {
   font-size: 18px;
 }
`;

export const StyledCancelButton = styled.button`
  text-align: center;
  font: normal normal medium;
  border: none;
  font-size: 20px;
  letter-spacing: 0px;
  color: #707070;
  background-color: white;
  opacity: 1;
  padding: 12px 25px 12px 25px;
  margin-left: 12px;
  width: 148px;
  height: 48px;
  opacity: 1;
  @media only screen and (max-width: 650px) {
   
   font-size: 18px;
 
  
 }
`;

export const CloseLogo = styled(AiOutlineClose)`
  margin-left: 754px;
  
  margin-top: 30px;
  margin-right: 50px;
  @media only screen and (max-width: 650px) {
   margin-top: 5%;
   margin-left: 90%;
  
 }
 &:hover{
    cursor: pointer;
  }
`;
