import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";

import {
  MainDiv,
  StyledButton,
  Styledtext,
  Styledtitle,
  ButtonDiv,
  StyledCancelButton,
  CloseLogo
} from "./styles";
import { ICreateProps } from "./types";

export const PopUpLogout = ({ onClick }: ICreateProps) => {
  const history = useHistory();
  const logout = () => history.push("/")
  const isMobile = useMediaQuery({
    query: "(max-device-width: 600px)",
  });
  return (
    <MainDiv>
      <CloseLogo size={21} onClick={onClick}/>
      <Styledtitle>Sair do sistema</Styledtitle>
      
      <Styledtext>Deseja mesmo sair do sistema?</Styledtext>
      <ButtonDiv>
        <StyledButton onClick={logout}>Sair</StyledButton>
        <StyledCancelButton onClick={onClick} >Cancelar</StyledCancelButton>
      </ButtonDiv>
    </MainDiv>
  );
};
