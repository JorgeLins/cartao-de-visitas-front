import { useState, ChangeEvent } from "react";
import Axios, { AxiosError } from "axios";

import { LoginModal } from "../loginModal/loginModal";
import {
  StyledButton,
  StyledDiv,
  StyledInput,
  StyledPSent,
  StyledImageGreen,
  HeaderDiv,
  StyledA,
  StyledH1,StyledLogo,StyledLabel,StyledLinkText,StyledLogin,StyledLoginText, StyledImageBackground,MainDiv
} from "./styles";
import greenImage from "../../images/Verde.png";
import api from "../../services/api";
import { useMediaQuery } from "react-responsive";
import BackgroundImg from '../../images/GalaxyNote10.png'

export function UpdatePassword() {
  const [email, setEmail] = useState<string>("");
  const [nPassword, setNPassword] = useState<string>("");
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const text = "Não se preocupe";
  const secondText = " Vamos te ajudar a recuperar!";
  const isMobile = useMediaQuery({
    query: "(max-device-width: 600px)",
  });
  const recoverHandle = async () => {
    const token = localStorage.getItem("token");
    try{
      const response = await api.post("user/password/update", { email, nPassword }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) setHasClicked(true);
    }
    catch (error) {
      if (Axios.isAxiosError(error)) {
        alert((error as AxiosError).response?.data.message);
      }
    }
  }

  const handleChangeAPassword = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);

  const handleChangeNPassword = (event: ChangeEvent<HTMLInputElement>) => setNPassword(event.target.value);

  return (
    <MainDiv>
      <StyledImageBackground src={BackgroundImg} alt="" /> 
      <StyledDiv>
      
      <HeaderDiv mobile={isMobile}>
        <StyledH1>Cartão Virtual Unifor</StyledH1>
        <StyledLoginText>{text}</StyledLoginText>
        <StyledLoginText>{secondText}</StyledLoginText>
      </HeaderDiv>
      <StyledLogin> 
        <StyledInput
          value={email}
          onChange={handleChangeAPassword}
          id="login"
          type="email"
          placeholder="Email"
        />
        <StyledInput
          value={nPassword}
          onChange={handleChangeNPassword}
          id="login"
          type="password"
          placeholder="Nova senha"
        />
        </StyledLogin>
        <StyledButton
          className="sendButton"
          type="submit"
          onClick={recoverHandle}
        >
          Enviar
        </StyledButton>
        {hasClicked && (
          <StyledPSent className="sentText">
            <StyledImageGreen src={greenImage} alt="" />
            Verifique seu email.
          </StyledPSent>
        )}
      </StyledDiv>
    </MainDiv>
  );
}
