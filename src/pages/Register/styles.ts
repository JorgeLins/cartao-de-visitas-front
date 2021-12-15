import styled from "styled-components";

export const MainDiv = styled.div``;

export const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 640px) {
    padding-left: 31px;
  }

  @media only screen and (max-width: 1540px) and (min-width: 641px) {
    width: 430px;
    height: 450px;
  }
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
    width: 154px;
    margin: 30px 131px 0px 98px;
    font-size: 16px;
  }

  @media only screen and (max-width: 1540px) and (min-width: 641px) {
    width: 410px;
  }
`;

export const StyledA = styled.a`
  margin-top: 50px;
  text-align: center;
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
    width: 154px;
    margin: 30px 131px 0px 98px;
    font-size: 16px;
  }
  
  @media only screen and (max-width: 1540px) and (min-width: 641px) {
    width: 410px;
  }
`;
