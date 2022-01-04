import styled from "styled-components";
import { GoPlus } from "react-icons/go";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from"react-bootstrap/Nav"
import {GiHamburgerMenu} from "react-icons/gi"

export const StyledHeader = styled.div`
  display: flex;
  width: 100vw;
  background: #0088fa 0% 0% no-repeat padding-box;
  opacity: 1;
  height: 80px;
  margin-bottom: 50px;
  @media only screen and (max-width: 650px) {
    margin-bottom: 122px;
    flex-direction: column;
    background: white 0% 0% no-repeat padding-box;
   
  }
`;

export const StyledTitle = styled.p`
  margin-left: 36px;
  margin-top: 18px;
  margin-bottom: 19px;
  margin-right: 50px;
  text-align: left;
  font-weight: 600px;
  font-size: 35px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media only screen and (max-width: 650px) {
    margin-top:25px;
    text-align: center;
    color: #888888;
  }
 
`;

export const StyledButtonsDiv = styled.div`
  display:flex;
  
  @media only screen and (max-width: 650px) {
    flex-direction: column;
    
  }
`

export const StyledCardButton = styled.button`
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: row;
  border: none;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0px;
  color: #0088fa;
  opacity: 1;
  margin: auto 30px auto auto;
  width: 301px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 5px;

  @media only screen and (max-width: 1540px) and (min-width: 641px)  {
    margin: auto auto auto 50px;
  }
  @media only screen and (max-width: 650px) {
    width: 372px;
    border:1px solid #0088FA;
    margin: 15px auto auto auto;
    
  }
`;

export const StyledDropdown = styled(Dropdown)`
  margin: 20px 66px 27px auto;
  &:hover{
    background-color: #0088FA;
  }
  @media only screen and (max-width: 650px) {
    top:5px;
    position: absolute;
    background-color: white;  
    
  }
  
`
export const StyledDropdownToggle = styled(Dropdown.Toggle)`
  background-color: #0088FA;
  border: none; 
  font-size: 25px;
  color: white;
  font-weight:500;
  &:hover{
    background-color: #0088FA;
  }
  @media only screen and (max-width: 650px) {
    background-color: white;  
    
  }
`

export const StyledDropdownMenu = styled(Dropdown.Menu)`
  align-items:center;
  width: 200px;
`

export const StyledDropdownItem = styled(Dropdown.Item)`
  font-size:15px;
`

export const PlusButton = styled(GoPlus)`
  margin-right: 7px;
`
export const HamburgerButton = styled (GiHamburgerMenu)`

`
