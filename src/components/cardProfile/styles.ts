import styled from "styled-components";

export const MainDiv = styled.div`
    border-radius: 10px;
    display:flex;
    flex-direction: row;
    background: #004982 0% 0% no-repeat padding-box;
    width: 447px;
    height: 83px;

`

export const NameNumberDIv = styled.div `
    display: flex;
    flex-direction: column;
    margin-left:15px;
    
`

export const Name = styled.p`
    margin-top: 5px;
    text-align: left;
    font: normal normal 600;
    font-size:20px;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    @media only screen and (max-width: 640px) {
   text-align: left;
  }
`

export const Number = styled.p`
    font: normal normal medium ;
    font-size:18px;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
`