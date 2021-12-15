import { useMediaQuery } from "react-responsive";
import {
  MainDiv,
  StyledButton,
  Styledtext,
  Styledtitle,
  ButtonDiv,
  StyledCancelButton,
  CloseLogo
} from "./styles";
import { IDeleteProps } from "./types";

export const PopUpDelete = ({ onClick, DeleteCard }: IDeleteProps) => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 600px)",
  });
  return (
    <MainDiv>
      <CloseLogo size={21} onClick={onClick} />
      {isMobile ? <Styledtext>Deseja mesmo deletar esse cartão virtual?</Styledtext> : <>
        <Styledtitle>Deletar Cartão Virtual</Styledtitle>
        <Styledtext>Deseja mesmo deletar esse cartão virtual?</Styledtext>
        <Styledtext>Essa ação não poderá ser desfeita após confirmar.</Styledtext> </>
      }

      <ButtonDiv>
        <StyledButton onClick={DeleteCard}>Confirmar</StyledButton>
        <StyledCancelButton onClick={onClick}> Cancelar</StyledCancelButton>
      </ButtonDiv>
    </MainDiv>
  );
};
