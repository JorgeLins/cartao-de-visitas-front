import styled from "styled-components";
import { IoMdShare, IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import background from "../../images/BackgroundPDFCard.jpg";
import logoUnifor from "../../images/logounifor.svg";

export const ImageCard = styled.div`
  width: 350px;
  height: 740px;
  background-image: url(${background});
  background-size: cover;
  border-radius: 10px;
  margin-right: 45px;
  margin-bottom: 81px;
  @media only screen and (max-width: 650px) {
    margin-top: 50px;
    height:620px ;
    width: 296px;
    
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 1550px) {
    
  }
`;

export const ImageHeader = styled.div`
  background-image: url(${logoUnifor});
  background-size: 220px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  margin: auto;
  padding-top: 15px;
  width: 220px;
  height: 200px;
`;
export const ImageInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-space-evenly;
  margin-top: 5%;
  margin-bottom: 5%;
`;
export const ImageWhiteLine = styled.div`
  background-color: white;
  height: 5px;
  width: 250px;
  margin: auto;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 28px;
`;

export const ImageLabelName = styled.label`
  font-size: 27px;
  font-weight: bold;
  color: white;
`;
export const ImageLabelRole = styled.label`
  font-size: 18px;
  color: white;
`;
export const ImageLabelSector = styled.label`
  margin-top: 20px;
  font-size: 15px;
  text-align: center;
  color: white;
`;

export const ImageLinksCotainer = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50%;
`;
export const ImageLink = styled.div`
  background-color: white;
  height: 3.5rem;
  width: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ImageIcon = styled.img`
  width: 35px;
  height: 35px;
`;

export const ImageArrowRight = styled.div`
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid white;
`;
export const ImageArrowLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 20px solid white;
`;

export const ImageFooter = styled.footer`
  text-align: center;
  margin-left: 0px;
  font-size: 15px;
`;

export const MainDiv = styled.div`
      width: 820px;
    display: inline-block;
    float:none;
  @media only screen and (max-width: 650px) {
    height: 105vh;
    width: 0;
    position: absolute;
    z-index: 3;
    background-color: white;
  }


`;

export const DataCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 920px;
  margin-left:200px;

  @media only screen and (max-width: 650px) {
    width: 95vw;
    height: 100%;
    margin-left: 0px;
    margin-top: 16px;
  }

`;

export const DataInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 650px) {
    width: 246px;
    margin-top: 10px;
  }
`;

export const DataTitle = styled.p`
  font: normal normal 600;
  font-size: 30px;
  letter-spacing: 0px;
  color: #636363;
  opacity: 1;
  margin-right: 15px;
  @media only screen and (max-width: 650px) {
    font-size: 25px;
    color: #888888;
    align-self: center;
  }
`;

export const DataField = styled.div`
  opacity: 1;
  width: 302px;
`;

export const DataID = styled.label`
  text-align: left;
  font: normal normal medium;
  font-size: 25px;
  letter-spacing: 0px;
  color: #0082d4;
  opacity: 1;
  @media only screen and (max-width: 650px) {
    color: #0088fa;
    font-size: 20px;
  }
`;

export const DataProperty = styled.input`
  margin-bottom: 14px;
  text-align: left;
  font: normal normal normal;
  font-size: 20px;
  letter-spacing: 0px;
  color: #636363;
  opacity: 1;
  &:disabled {
    background: white;
    border: none;
    width: auto;
  }
  @media only screen and (max-width: 650px) {
    color: #939393;
    padding-left: 14px;
    border: solid 1px;
    border-radius: 5px;
    width: 90%;
    &:disabled {
      background: white;
      border: solid 1px;
    }
  }
`;

export const CardDiv = styled.div`
  margin-right: 45px;
  width: 370px;
  height: 830px;
  background: transparent linear-gradient(180deg, #00b0ff 0%, #0088ff 100%) 0%
    0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
`;

export const StyledButton = styled.button`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid #0082d4;
  border-radius: 5px;
  opacity: 1;
  width: 109px;
  height: 43px;
  font: normal normal medium;
  font-size: 16px;
  letter-spacing: 0px;
  color: #0082d4;
  opacity: 1;
  margin-right: 12px;
  @media only screen and (max-width: 650px) {
    border: none;
    color: #888888;
    margin-right: 0px;
    margin-top: 10px;
  }
`;

export const StyledShareButton = styled.button`
  width: 284px;
  height: 44px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid #0082d4;
  border-radius: 5px;
  opacity: 1;
  font: normal normal medium;
  font-size: 16px;
  letter-spacing: 0px;
  color: #0082d4;
  opacity: 1;
  @media only screen and (max-width: 650px) {
    width: auto;

  }
`;

export const MobileDiv = styled.div`
  margin-left: 0px;
  width: 296px;
  display: flex;
  flex-direction: column;
`
export const ShareIcon = styled(IoMdShare)`
  margin-right: 10px;
`;

export const EditButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SaveButton = styled.button`
  margin-right: 15px;
  width: 99px;
  height: 43px;
  background: #0082d4 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 5px;
  opacity: 1;
  font: normal normal medium;
  font-size: 16px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media only screen and (max-width: 650px) {
    width: 160px;
    background-color: #848484;
    border-radius: 9px;
    &:hover {
      background-color: #ffffff;
    }
  }
`;

export const CancelButton = styled.button`
  margin-left: 15px;
  width: 99px;
  height: 43px;
  background: white 0% 0% no-repeat padding-box;
  border-radius: 5px;
  border: none;
  opacity: 1;
  font: normal normal medium;
  font-size: 16px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  font: normal normal medium;
  font-size: 16px;
  letter-spacing: 0px;
  color: #aaaaaa;
  opacity: 1;
  @media only screen and (max-width: 650px) {
    margin-left: 0;
    width: 160px;
  }
`;
export const PreViewButton = styled.button`
  width: auto;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #0088fa;
  padding: 5px;
  margin-bottom: 22px;
`;

export const TrashIcon = styled(IoMdTrash)`
`;

export const EditIcon = styled(MdEdit)``;

export const BackIcon = styled(AiOutlineArrowLeft)`
  margin-left:5px;
  width: 90px;
`;
