import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

export const StyledP = styled.p`
  margin-top: 44px;
  margin-bottom: 20px;
  margin-right: 20px;
  text-align: left;
  font: normal normal 600 25px/30px;
  font-size: 25px;
  font-weight: 545;
  letter-spacing: 0px;
  color: #888888;
  opacity: 1;
 
  @media only screen and (max-width: 650px) {
    margin-top: 25px;
    padding-top: 5px;
    font-size: 20px;
  }
`;
export const StyledDivChangePage = styled.div`
  display: flex;
  flex-direction: row;
  P {
    &:hover {
      font-size: 26px;
     font-weight: 548;
      cursor: pointer;
    }
    &:current{
      color:red
    }
  }
`;

export const StyledDivSearch = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 650px) {
    height: 50px;
    width: 100vw;
    margin-top: 30px;
  }
`;

export const StyledSearchInput = styled.input`
  margin-right: 40px;
  width: 475px;
  height: 40px;
  background: #dfdfdf 0% 0% no-repeat padding-box;
  border-radius: 5px;
  border: none;
  opacity: 1;
  padding-left: 50px;

  &::placeholder {
    width: 70px;
    height: 19px;
    text-align: left;
    font: normal normal medium 16px/19px;
    font-size: 16px;
    letter-spacing: 0px;
    color: #a1a1a1;
    opacity: 1;
  }
  @media only screen and (max-width: 650px) {
    width: 372px;
    margin: 15px auto auto auto;
  }
`;

export const StyledIcon = styled(FiSearch)`
  margin-top: 10px;
  color: #a1a1a1;
  width: 18px;
  height: 18px;
  position: absolute;
  margin-left: 14px;
  @media only screen and (max-width: 650px) {
    top: 25px;
    margin-left: 90%;
    width: 22px;
    height: 22px;
  }
`;

export const StyledSelect = styled.select`
  border: none;
  color: #a1a1a1;
  width: 230px;
  height: 40px;
  background: #dfdfdf 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  @media only screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
    margin-left: 20px;
    width: 100vw;
  }
`;

export const StyledSelectTitleCard = styled.p`
  float: right;
  margin-right: 293px;
  font-size: 30px;
  letter-spacing: 0px;
  color: #bbbbbb;
  opacity: 1;
`;

export const CardsDiv = styled.div`
  display: grid;
  grid-template-columns: 260px 260px 150px;
  & > div:nth-child(even) {
    background: #0082d4 0% 0% no-repeat padding-box;
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: 230px 150px;
  }
  @media only screen and (max-width: 1700px) and(min-width:800px) {
    grid-template-columns: 230px 150px;
    grid-template-rows: 150px 100px;
  }
  @media only screen and (max-width: 1720px) and (min-width: 800px) {
    grid-template-columns: 260px 160px;
    grid-template-rows: 150px 150px;
  }
`;
export const ProfileCardDiv = styled.div`
  padding-top: 20px;
  grid-template-rows: 150px 150px 150px;
  display: grid;
  grid-template-columns: 260px;
  & > div:nth-child(even) {
    background: #0082d4 0% 0% no-repeat padding-box;
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: 230px;
  }
  @media only screen and (max-width: 1700px) and(min-width:800px) {
    grid-template-columns: 230px;
    grid-template-rows: 150px;
  }
  @media only screen and (max-width: 1720px) and (min-width: 800px) {
    grid-template-columns: 260px;
    grid-template-rows: 150px;
  }
`;

export const AllCardsDiv = styled.div`
  padding-top: 20px;
  display: grid;
  grid-template-columns: 260px 260px 400px;
  grid-template-rows: 150px 150px 150px;
  & > :nth-child(even) {
    background: #0082d4 0% 0% no-repeat padding-box;
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: 230px 150px;
    grid-template-rows: 150px 150px;
  }
  @media only screen and (max-width: 1720px) and (min-width: 800px) {
    grid-template-columns: 260px -1px;
    grid-template-rows: 150px 150px;
  }
`;

export const StyledPagination = styled.div`
  width: 381px;
  height: 30px;
  display: flex;
  flex-direction: row;
  margin-left: 218px;

  a {
    font: normal normal 600;
    font-size: 20px;
    margin-left: 12px;
    margin-right: 11px;
    width: 100px;
    height: 24px;
    letter-spacing: 0px;
    color: #bbbbbb;
    opacity: 1;
  }

  li:hover {
    color: #bbbbbb;
    height: 30px;
    background: #0082d4 1000% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    color: white;
  }
  @media only screen and (max-width: 650px) {
    margin-top: auto;
    margin-left: 20%;
    padding-top: 20px;
    padding-left: 45px;
  }
`;
export const CloseLogo = styled(AiOutlineClose)`
  margin-top: 6%;
  margin-left: 85%;
  position: absolute;
  color: #888888;
`;

export const SearchLogo = styled(FiSearch)`
  margin-top: 6%;
  margin-left: 10%;
  position: absolute;
  color: #888888;
  &:hover {
    cursor: pointer;
  }
`;
