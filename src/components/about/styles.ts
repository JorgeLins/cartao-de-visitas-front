import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
export const AboutDiv = styled.div`
  position: absolute;
  top: calc(50% - 350px);
  left: calc(50% - 515px);
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #0082d4;
  border-radius: 20px;
  opacity: 1;
  width: 1030px;
  height: 700px;
  z-index: 3;

  @media only screen and (max-width: 640px) {
    border-radius: 0px;
    left:0%;
    top:0%;
    width: 110vw;
    height: 170vh;
  }
  @media only screen and (max-width: 1540px) and (min-width: 641px) {
    margin: 5% 17%;
  }
`;

export const AboutH1 = styled.h1`
  display: inline-block;
  padding-top: 12px;
  padding-left: 85px;
  text-align: center;
  margin-top: 44px;
  margin-right: 640px;
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

  @media only screen and (max-width: 640px) {
    padding: 0%;
    margin-left:124px;
    margin-right: 124px;
    letter-spacing: 0px;
    color: #888888;
    opacity: 1;
    font-size:20px;
    border:none;
  }
`;
export const DescritionDiv = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  margin-left: 68px;
  margin-bottom: 70px;

  @media only screen and (max-width: 640px) {
    margin-left: 20px;
  }
`;

export const Title = styled.p`
  text-align: left;
  font: normal normal;
  font-weight: 540;
  font-size: 25px;
  letter-spacing: 0px;
  color: #0082d4;
  opacity: 1;

  @media only screen and (max-width: 640px) {
    font-size: 20px;
    font-weight: 55 0;
    letter-spacing: 0px;
    color: #0088FA;
    opacity: 1;
  }
`;

export const Descrition = styled.p`
  width: 506px;
  height: 88px;
  text-align: left;
  font: normal normal normal;
  font-size: 18px;
  letter-spacing: 0px;
  color: #a4a4a4;
  opacity: 1;

  @media only screen and (max-width: 640px) {
    width: 317px;
    height: 114px;
  }
`;

export const HorizontalLine = styled.hr`
  width: 80%;
  margin: auto;
  border-top: 1px solid #a4a4a4;
`;

export const BottomDiv = styled.div`
  margin-top: 20px;
  margin-left: 68px;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 640px) {
    margin-left: 20px;
    flex-direction: column;
  }
`;

export const TeacherDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 125px;

  @media only screen and (max-width: 640px) {
    margin-bottom: 35px;
  }
`;

export const StudentsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CloseLogo = styled(AiOutlineClose)`
  position: absolute;
  margin-top: 50px;
  margin-right: 50px;
  margin-left: 955px;
  &:hover{
    cursor: pointer;
  }
  @media only screen and (max-width: 640px) {
    margin-top: 40px;
    margin-left: 5%;
    position: absolute;
    color: #888888;
      
  }
`;

