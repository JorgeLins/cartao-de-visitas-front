import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import YouTube from 'react-youtube';
import { MdExploreOff } from "react-icons/md";

export const AboutDiv = styled.div`
  position: absolute;
  top: calc(50% - 21.875rem);
  left: calc(50% - 32.188rem);
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #0082d4;
  border-radius: 20px;
  opacity: 1;
  width: 64.375rem;
  height: 43.75rem;
  z-index: 3;
  overflow: hidden;

  @media only screen and (max-width: 640px) {
    border-radius: 0px;
    left:0%;
    top:0%;
    width: 110vw;
    height: 170vh;
  }
  @media only screen and (max-width: 1540px) and (min-width: 641px) {
    margin: 5%;
  }
`;

export const AboutH1 = styled.h1`
  display: inline-block;
  padding-top: 0.75rem;
  padding-left: 1rem;
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
margin-top: 5px;
display: flex;
flex-direction: column;
margin-left: 68px;
margin-bottom: 0px;

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
  width: 88%;
  margin: auto;
  border-top: 1px solid #a4a4a4;
`;

export const BottomDiv = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 130px;
margin-right: 130px;

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

export const YoutubePlayer = styled(YouTube) `
  border: 2px solid #0082d4;
  border-radius: 15px;
  opacity: 1;
  height: 390px;
  width: 640px;
  margin-left: 55px;
`

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

