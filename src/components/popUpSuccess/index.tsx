import {
  MainDiv,
  StyledButton,
  Styledtext,
  Styledtitle,
} from "./styles";

export const popUpSuccess = () => {
  return (
    <MainDiv>
      <Styledtitle>Sucesso!</Styledtitle>
      <Styledtext>Cartão de visitas virtual criado com sucesso!</Styledtext>
      <StyledButton>Continuar</StyledButton>
    </MainDiv>
  );
};
