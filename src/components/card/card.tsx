import {
  StyledCard,
  StyledNameCard,
  StyledNatiCard,
  StyledNumberCard,
  ShareLogo,
} from "./styles";
import { ICardProps } from "./types";
import { SharePopUp } from "../sharePopUp";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Card = ({ name, instituition, phone, url, onClick }: ICardProps) => {
  const [share, setShare] = useState<boolean>(false)
  const handleSharePopUp = () => setShare(true)
  const isMobile = useMediaQuery({
    query: "(max-device-width: 640px)",
  });

  
  return (
    <>
    
      <StyledCard onClick={onClick}>
      {isMobile &&  <ShareLogo onClick={handleSharePopUp} />}
        <StyledNameCard>{name}</StyledNameCard>
        <StyledNatiCard>{instituition}</StyledNatiCard>
        <StyledNumberCard>{phone}</StyledNumberCard>
      </StyledCard>
      {share && <SharePopUp onClick={onClick} url={url} />}
    </>
  );
};

export default Card;
