import styled from "styled-components";
import { MdShare } from "react-icons/md";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left:50px; */
  width: 230px;
  height: 130px;
  background: #004982 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  margin-right: 30px;
  &:hover {
    border: 2px solid #00ab22;
    border-radius: 11px;
    opacity: 1;
  }
  @media only screen and (max-width: 650px) {
    padding-top: 2px;
    width: 200px; 
    height: 110px;
  }
  @media only screen and (max-width: 1720px) and(min-width:800px) {
    width: 200px;
    height: 125px; 
  }
`;

export const StyledNameCard = styled.p`
  margin-bottom: 11px;
  margin-top: 15px;
  margin-left: 15px;
  text-align: left;
  width: 220px;
  font: normal normal 600;
  font-size: 20px;
  font-weight: 540;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  white-space:normal;
  @media only screen and (max-width: 650px) {
    margin-top:5px;
    width: 195px;
    font-size: 17px;
    margin-bottom: 0px;

    
  }
  @media only screen and (max-width: 1720px) and(min-width:800px) {
    width: 195px;
    font-size: 18px;
  }
`;

export const StyledNatiCard = styled.p`
  margin-left: 15px;
  text-align: left;
  font: normal normal 600;
  font-size: 18px;
  font-weight: 540;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 15px;
  @media only screen and (max-width: 650px) {
    font-size: 15px;
    margin-bottom: 5px;
    width: 195px;
    font-size: 16px;
    
  }
  @media only screen and (max-width: 1720px) and(min-width:800px) {
    width: 195px;
    font-size: 18px;
  }
`;

export const StyledNumberCard = styled.p`
  margin-left: 15px;
  text-align: left;
  font: normal normal 600;
  font-size: 18px;
  font-weight: 540;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 12px;
  @media only screen and (max-width: 650px) {
    font-size: 16px;
    
  }
  @media only screen and (max-width: 1720px) and(min-width:800pxs) {
    width: 195px;
    font-size: 18px;
    margin-top: 10px;
  }
`;

export const ShareLogo = styled(MdShare)`
  position: absolute;
  margin-left: 193px;
  margin-top: 18px;
  color: white;
  size: 19;
  @media only screen and (max-width: 650px) {
    size:10;
    margin-left: 170px;
    margin-top: 10px;
    
  }
`;
